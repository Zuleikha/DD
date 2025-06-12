// src/pages/ForumPage.tsx - Enhanced with Spam Protection & Persistent Likes
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../contexts/AuthContext';

// Firebase imports
import {
  ref,
  onValue,
  push,
  set,
  update,
  remove,
  query as rtdbQuery,
  orderByChild,
  get
} from 'firebase/database';
import { rtdb } from '../config/firebase';

import {
  MessageSquare,
  Plus,
  User,
  Clock,
  Heart,
  MessageCircle,
  PawPrint,
  LogIn,
  UserPlus,
  Image,
  Video,
  AlertTriangle,
  Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToHomeButton from '../components/common/BackToHomeButton';
import MediaUpload from '../components/common/MediaUpload';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  createdAt: number;
  likes?: { [userId: string]: boolean };
  replies?: { [replyId: string]: Reply };
  category: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
}

interface Reply {
  content: string;
  author: string;
  authorId: string;
  createdAt: number;
  likes?: { [userId: string]: boolean };
}

// Spam protection constants
const SPAM_PROTECTION = {
  MIN_POST_LENGTH: 10,
  MAX_POST_LENGTH: 5000,
  MIN_TITLE_LENGTH: 5,
  MAX_TITLE_LENGTH: 200,
  POST_COOLDOWN: 30000, // 30 seconds between posts
  REPLY_COOLDOWN: 10000, // 10 seconds between replies
  MAX_POSTS_PER_HOUR: 10,
  MAX_REPLIES_PER_HOUR: 20
};

const ForumPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('general');
  const [loading, setLoading] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [newPostMediaUrl, setNewPostMediaUrl] = useState('');
  const [newPostMediaType, setNewPostMediaType] = useState<'image' | 'video' | ''>('');
  
  // Spam protection states
  const [lastPostTime, setLastPostTime] = useState<number>(0);
  const [lastReplyTime, setLastReplyTime] = useState<number>(0);
  const [postCooldownRemaining, setPostCooldownRemaining] = useState<number>(0);
  const [replyCooldownRemaining, setReplyCooldownRemaining] = useState<number>(0);
  const [recentPosts, setRecentPosts] = useState<number[]>([]);
  const [recentReplies, setRecentReplies] = useState<number[]>([]);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const categories = [
    { value: 'general', label: 'General Discussion' },
    { value: 'health', label: 'Health & Wellness' },
    { value: 'training', label: 'Training & Behavior' },
    { value: 'nutrition', label: 'Nutrition & Diet' },
    { value: 'breeds', label: 'Breed Discussions' },
    { value: 'adoption', label: 'Adoption & Rescue' },
    { value: 'events', label: 'Events & Meetups' },
    { value: 'photos', label: 'Photos & Stories' }
  ];

  // Load spam protection data from localStorage
  useEffect(() => {
    if (currentUser?.uid) {
      const userData = localStorage.getItem(`forumData_${currentUser.uid}`);
      if (userData) {
        const data = JSON.parse(userData);
        setLastPostTime(data.lastPostTime || 0);
        setLastReplyTime(data.lastReplyTime || 0);
        setRecentPosts(data.recentPosts || []);
        setRecentReplies(data.recentReplies || []);
      }
    }
  }, [currentUser]);

  // Save spam protection data to localStorage
  const saveUserData = () => {
    if (currentUser?.uid) {
      const userData = {
        lastPostTime,
        lastReplyTime,
        recentPosts,
        recentReplies
      };
      localStorage.setItem(`forumData_${currentUser.uid}`, JSON.stringify(userData));
    }
  };

  // Update cooldown timers
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const postCooldown = Math.max(0, SPAM_PROTECTION.POST_COOLDOWN - (now - lastPostTime));
      const replyCooldown = Math.max(0, SPAM_PROTECTION.REPLY_COOLDOWN - (now - lastReplyTime));
      
      setPostCooldownRemaining(postCooldown);
      setReplyCooldownRemaining(replyCooldown);
    }, 1000);

    return () => clearInterval(interval);
  }, [lastPostTime, lastReplyTime]);

  // Clean old timestamps from recent activity arrays
  const cleanOldTimestamps = (timestamps: number[], maxAge: number = 3600000) => {
    const now = Date.now();
    return timestamps.filter(timestamp => now - timestamp < maxAge);
  };

  // Validate post content
  const validatePost = (title: string, content: string): string[] => {
    const errors: string[] = [];
    
    if (title.trim().length < SPAM_PROTECTION.MIN_TITLE_LENGTH) {
      errors.push(`Title must be at least ${SPAM_PROTECTION.MIN_TITLE_LENGTH} characters long`);
    }
    
    if (title.trim().length > SPAM_PROTECTION.MAX_TITLE_LENGTH) {
      errors.push(`Title must be less than ${SPAM_PROTECTION.MAX_TITLE_LENGTH} characters`);
    }
    
    if (content.trim().length < SPAM_PROTECTION.MIN_POST_LENGTH) {
      errors.push(`Post content must be at least ${SPAM_PROTECTION.MIN_POST_LENGTH} characters long`);
    }
    
    if (content.trim().length > SPAM_PROTECTION.MAX_POST_LENGTH) {
      errors.push(`Post content must be less than ${SPAM_PROTECTION.MAX_POST_LENGTH} characters`);
    }

    // Check for duplicate content
    const isDuplicate = posts.some(post => 
      post.authorId === currentUser?.uid && 
      (post.title.toLowerCase() === title.trim().toLowerCase() || 
       post.content.toLowerCase() === content.trim().toLowerCase())
    );
    
    if (isDuplicate) {
      errors.push('You have already posted this content. Please create original posts.');
    }

    return errors;
  };

  // Check spam protection limits
  const checkSpamLimits = (): string[] => {
    const errors: string[] = [];
    const now = Date.now();
    
    // Check post cooldown
    if (now - lastPostTime < SPAM_PROTECTION.POST_COOLDOWN) {
      const remaining = Math.ceil((SPAM_PROTECTION.POST_COOLDOWN - (now - lastPostTime)) / 1000);
      errors.push(`Please wait ${remaining} seconds before posting again`);
    }
    
    // Check hourly post limit
    const cleanRecentPosts = cleanOldTimestamps(recentPosts);
    if (cleanRecentPosts.length >= SPAM_PROTECTION.MAX_POSTS_PER_HOUR) {
      errors.push(`You have reached the maximum of ${SPAM_PROTECTION.MAX_POSTS_PER_HOUR} posts per hour`);
    }
    
    return errors;
  };

  useEffect(() => {
    const postsRef = ref(rtdb, 'forumPosts/');
    const postsQuery = rtdbQuery(postsRef, orderByChild('createdAt'));

    const unsubscribe = onValue(postsQuery, (snapshot) => {
      const postsData: ForumPost[] = [];
      const data = snapshot.val();

      if (data) {
        Object.keys(data).forEach((postId) => {
          const post = data[postId];
          postsData.push({
            id: postId,
            ...post,
            likes: post.likes || {},
            replies: post.replies || {}
          } as ForumPost);
        });
      }

      setPosts(postsData.reverse());
    }, (error) => {
      console.error('Error fetching posts:', error);
    });

    return () => unsubscribe();
  }, [rtdb]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser?.uid) {
      alert("You must be logged in to create a post. Please sign in and try again.");
      return;
    }

    // Validate content
    const contentErrors = validatePost(newPostTitle, newPostContent);
    const spamErrors = checkSpamLimits();
    const allErrors = [...contentErrors, ...spamErrors];
    
    setValidationErrors(allErrors);
    
    if (allErrors.length > 0) {
      return;
    }

    setLoading(true);

    try {
      const postsListRef = ref(rtdb, 'forumPosts/');
      const now = Date.now();

      const postData: Omit<ForumPost, 'id'> = {
        title: newPostTitle.trim(),
        content: newPostContent.trim(),
        category: newPostCategory,
        author: currentUser.displayName || currentUser.email || 'Anonymous',
        authorId: currentUser.uid,
        createdAt: now,
        likes: {},
        replies: {},
        ...(newPostMediaUrl && newPostMediaType && { mediaUrl: newPostMediaUrl, mediaType: newPostMediaType }),
      };

      await push(postsListRef, postData);
      
      // Update spam protection data
      setLastPostTime(now);
      const updatedRecentPosts = [...cleanOldTimestamps(recentPosts), now];
      setRecentPosts(updatedRecentPosts);
      
      // Save to localStorage
      saveUserData();

      // Clear form
      setNewPostTitle('');
      setNewPostContent('');
      setNewPostCategory('general');
      setNewPostMediaUrl('');
      setNewPostMediaType('');
      setShowNewPostForm(false);
      setValidationErrors([]);
      
      alert('Post created successfully! 🎉');

    } catch (error: any) {
      console.error('Error creating post:', error);
      alert(`Failed to create post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleMediaUploaded = (mediaUrl: string, mediaType: 'image' | 'video') => {
    setNewPostMediaUrl(mediaUrl);
    setNewPostMediaType(mediaType);
  };

  const handleLikePost = async (postId: string) => {
    if (!currentUser?.uid) {
      console.warn("Cannot like post: User not logged in.");
      return;
    }

    try {
      const userId = currentUser.uid;
      const userLikeRef = ref(rtdb, `forumPosts/${postId}/likes/${userId}`);
      
      // Store like state in localStorage for immediate feedback
      const likeKey = `like_${postId}_${userId}`;
      const currentLikeState = localStorage.getItem(likeKey) === 'true';
      
      // Update localStorage immediately for instant UI feedback
      localStorage.setItem(likeKey, (!currentLikeState).toString());

      const snapshot = await get(userLikeRef);

      if (snapshot.exists()) {
        await remove(userLikeRef);
        localStorage.setItem(likeKey, 'false');
      } else {
        await set(userLikeRef, true);
        localStorage.setItem(likeKey, 'true');
      }
    } catch (error) {
      console.error('Error liking post:', error);
      // Revert localStorage on error
      const likeKey = `like_${postId}_${currentUser.uid}`;
      const currentState = localStorage.getItem(likeKey) === 'true';
      localStorage.setItem(likeKey, (!currentState).toString());
    }
  };

  const handleReply = async (postId: string) => {
    if (!currentUser?.uid || !replyContent.trim()) {
      console.warn("Cannot add reply: User not logged in or reply content empty.");
      return;
    }

    // Check reply spam limits
    const now = Date.now();
    const errors: string[] = [];
    
    if (now - lastReplyTime < SPAM_PROTECTION.REPLY_COOLDOWN) {
      const remaining = Math.ceil((SPAM_PROTECTION.REPLY_COOLDOWN - (now - lastReplyTime)) / 1000);
      errors.push(`Please wait ${remaining} seconds before replying again`);
    }
    
    const cleanRecentReplies = cleanOldTimestamps(recentReplies);
    if (cleanRecentReplies.length >= SPAM_PROTECTION.MAX_REPLIES_PER_HOUR) {
      errors.push(`You have reached the maximum of ${SPAM_PROTECTION.MAX_REPLIES_PER_HOUR} replies per hour`);
    }
    
    if (replyContent.trim().length < 5) {
      errors.push('Reply must be at least 5 characters long');
    }
    
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    try {
      const postRepliesRef = ref(rtdb, `forumPosts/${postId}/replies`);

      const newReplyData: Omit<Reply, 'id'> = {
        content: replyContent.trim(),
        author: currentUser.displayName || currentUser.email || 'Anonymous',
        authorId: currentUser.uid,
        createdAt: now,
        likes: {}
      };

      await push(postRepliesRef, newReplyData);
      
      // Update spam protection data
      setLastReplyTime(now);
      const updatedRecentReplies = [...cleanRecentReplies, now];
      setRecentReplies(updatedRecentReplies);
      
      // Save to localStorage
      saveUserData();

      setReplyContent('');

    } catch (error) {
      console.error('Error adding reply:', error);
      alert('Failed to add reply. Please try again.');
    }
  };

  // Helper functions
  const formatDate = (timestamp: number) => {
    if (!timestamp) return 'Just now';
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return 'Invalid date';
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getLikeCount = (likes?: { [userId: string]: boolean }) => {
    return likes ? Object.keys(likes).length : 0;
  };

  const hasUserLiked = (likes?: { [userId: string]: boolean }, userId?: string | null) => {
    if (!userId || !likes) return false;
    
    // Check localStorage first for immediate feedback
    const likeKey = `like_${selectedPostId || 'unknown'}_${userId}`;
    const localStorageState = localStorage.getItem(likeKey);
    if (localStorageState !== null) {
      return localStorageState === 'true';
    }
    
    return !!likes[userId];
  };

  const getReplyCount = (replies?: { [replyId: string]: Reply }) => {
    return replies ? Object.keys(replies).length : 0;
  };

  const getSortedRepliesArray = (replies?: { [replyId: string]: Reply }) => {
    if (!replies) return [];
    return Object.keys(replies)
      .map(replyId => ({ id: replyId, ...replies[replyId] }))
      .sort((a, b) => a.createdAt - b.createdAt);
  };

  const formatCooldownTime = (milliseconds: number) => {
    const seconds = Math.ceil(milliseconds / 1000);
    return `${seconds}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Forum - DogDays.ie</title>
        <meta name="description" content="Join the DogDays.ie community forum to discuss all things dog-related." />
      </Helmet>

      <BackToHomeButton />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">DogDays Forum</h1>
          <p className="text-lg text-gray-600">Connect with other dog lovers!</p>
        </div>

        {!currentUser ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-md shadow-sm flex items-center justify-between">
            <div className="flex items-center">
              <LogIn className="h-5 w-5 mr-3" />
              <p className="text-sm">
                Please <Link to="/login" className="font-medium underline hover:text-yellow-900">log in</Link> or <Link to="/signup" className="font-medium underline hover:text-yellow-900">sign up</Link> to participate in the forum.
              </p>
            </div>
            <div className="flex space-x-2">
              <Link to="/login" className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                <LogIn className="h-4 w-4 mr-2" /> Login
              </Link>
              <Link to="/signup" className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                <UserPlus className="h-4 w-4 mr-2" /> Sign Up
              </Link>
            </div>
          </div>
        ) : (
          <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {postCooldownRemaining > 0 && (
                <div className="flex items-center text-orange-600 text-sm">
                  <Timer className="h-4 w-4 mr-1" />
                  Post cooldown: {formatCooldownTime(postCooldownRemaining)}
                </div>
              )}
              {replyCooldownRemaining > 0 && (
                <div className="flex items-center text-blue-600 text-sm">
                  <Timer className="h-4 w-4 mr-1" />
                  Reply cooldown: {formatCooldownTime(replyCooldownRemaining)}
                </div>
              )}
            </div>
            <button
              onClick={() => setShowNewPostForm(!showNewPostForm)}
              disabled={postCooldownRemaining > 0}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                postCooldownRemaining > 0 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
              }`}
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" />
              {showNewPostForm ? 'Cancel New Post' : 'Create New Post'}
            </button>
          </div>
        )}

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-400 text-red-800 p-4 mb-6 rounded-md shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Please fix the following issues:</h3>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {validationErrors.map((error, index) => (
                <li key={index} className="text-sm">{error}</li>
              ))}
            </ul>
          </div>
        )}

        {showNewPostForm && currentUser && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Create New Post</h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700">
                  Title ({newPostTitle.length}/{SPAM_PROTECTION.MAX_TITLE_LENGTH})
                </label>
                <input
                  type="text"
                  id="postTitle"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your post title..."
                  maxLength={SPAM_PROTECTION.MAX_TITLE_LENGTH}
                  required
                />
              </div>

              <div>
                <label htmlFor="postCategory" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="postCategory"
                  value={newPostCategory}
                  onChange={(e) => setNewPostCategory(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="postContent" className="block text-sm font-medium text-gray-700">
                  Content ({newPostContent.length}/{SPAM_PROTECTION.MAX_POST_LENGTH})
                </label>
                <textarea
                  id="postContent"
                  rows={6}
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Share your thoughts..."
                  maxLength={SPAM_PROTECTION.MAX_POST_LENGTH}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum {SPAM_PROTECTION.MIN_POST_LENGTH} characters required
                </p>
              </div>

              <MediaUpload onMediaUploaded={handleMediaUploaded} />

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowNewPostForm(false);
                    setValidationErrors([]);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Post'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No posts yet</h3>
              <p className="mt-1 text-sm text-gray-500">Be the first to start a discussion!</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        {categories.find(cat => cat.value === post.category)?.label || post.category}
                      </span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{formatDate(post.createdAt)}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</p>
                    
                    {post.mediaUrl && (
                      <div className="mb-4">
                        {post.mediaType === 'image' ? (
                          <img src={post.mediaUrl} alt="Post media" className="max-w-full h-auto rounded-lg" />
                        ) : (
                          <video controls className="max-w-full h-auto rounded-lg">
                            <source src={post.mediaUrl} type="video/mp4" />
                          </video>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLikePost(post.id)}
                        disabled={!currentUser}
                        className={`flex items-center space-x-1 ${
                          hasUserLiked(post.likes, currentUser?.uid)
                            ? 'text-red-600'
                            : 'text-gray-500 hover:text-red-600'
                        } ${!currentUser ? 'cursor-not-allowed opacity-50' : ''}`}
                      >
                        <Heart className={`h-5 w-5 ${hasUserLiked(post.likes, currentUser?.uid) ? 'fill-current' : ''}`} />
                        <span>{getLikeCount(post.likes)}</span>
                      </button>
                      
                      <button
                        onClick={() => setSelectedPostId(selectedPostId === post.id ? null : post.id)}
                        className="flex items-center space-x-1 text-gray-500 hover:text-blue-600"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>{getReplyCount(post.replies)}</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>by {post.author}</span>
                    </div>
                  </div>
                </div>

                {/* Replies Section */}
                {selectedPostId === post.id && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Replies ({getReplyCount(post.replies)})
                    </h4>
                    
                    {/* Reply Form */}
                    {currentUser && (
                      <div className="mb-6">
                        <textarea
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          placeholder="Write a reply..."
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                          rows={3}
                          maxLength={1000}
                        />
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">
                            {replyContent.length}/1000 characters
                          </span>
                          <button
                            onClick={() => handleReply(post.id)}
                            disabled={!replyContent.trim() || replyCooldownRemaining > 0}
                            className={`px-4 py-2 text-sm font-medium rounded-md ${
                              !replyContent.trim() || replyCooldownRemaining > 0
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-orange-600 text-white hover:bg-orange-700'
                            }`}
                          >
                            {replyCooldownRemaining > 0 
                              ? `Wait ${formatCooldownTime(replyCooldownRemaining)}`
                              : 'Reply'
                            }
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Replies List */}
                    <div className="space-y-4">
                      {getSortedRepliesArray(post.replies).map((reply) => (
                        <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-gray-500" />
                              <span className="text-sm font-medium text-gray-900">{reply.author}</span>
                              <span className="text-xs text-gray-500">•</span>
                              <span className="text-xs text-gray-500">{formatDate(reply.createdAt)}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 whitespace-pre-wrap">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;

