import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  doc,
  updateDoc,
  arrayUnion,
  getDoc
} from 'firebase/firestore';
import { db } from '../config/firebase';
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
  Video
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
  createdAt: any;
  likes: string[];
  replies: Reply[];
  category: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
}

interface Reply {
  id: string;
  content: string;
  author: string;
  authorId: string;
  createdAt: any;
  likes: string[];
}

const ForumPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('general');
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [newPostMediaUrl, setNewPostMediaUrl] = useState('');
  const [newPostMediaType, setNewPostMediaType] = useState<'image' | 'video' | ''>('');

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

  useEffect(() => {
    const q = query(collection(db, 'forumPosts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData: ForumPost[] = [];
      querySnapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() } as ForumPost);
      });
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !newPostTitle.trim() || !newPostContent.trim()) return;

    setLoading(true);
    try {
      const postData: any = {
        title: newPostTitle,
        content: newPostContent,
        category: newPostCategory,
        author: currentUser.displayName || currentUser.email,
        authorId: currentUser.uid,
        createdAt: serverTimestamp(),
        likes: [],
        replies: []
      };

      // Add media if uploaded
      if (newPostMediaUrl && newPostMediaType) {
        postData.mediaUrl = newPostMediaUrl;
        postData.mediaType = newPostMediaType;
      }

      await addDoc(collection(db, 'forumPosts'), postData);

      setNewPostTitle('');
      setNewPostContent('');
      setNewPostCategory('general');
      setNewPostMediaUrl('');
      setNewPostMediaType('');
      setShowNewPostForm(false);
    } catch (error) {
      console.error('Error creating post:', error);
    }
    setLoading(false);
  };

  const handleMediaUploaded = (mediaUrl: string, mediaType: 'image' | 'video') => {
    setNewPostMediaUrl(mediaUrl);
    setNewPostMediaType(mediaType);
  };

  const handleLikePost = async (postId: string) => {
    if (!currentUser) return;

    try {
      const postRef = doc(db, 'forumPosts', postId);
      const postDoc = await getDoc(postRef);
      const postData = postDoc.data();
      
      if (postData?.likes?.includes(currentUser.uid)) {
        // Unlike
        await updateDoc(postRef, {
          likes: postData.likes.filter((uid: string) => uid !== currentUser.uid)
        });
      } else {
        // Like
        await updateDoc(postRef, {
          likes: arrayUnion(currentUser.uid)
        });
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleReply = async (postId: string) => {
    if (!currentUser || !replyContent.trim()) return;

    try {
      const postRef = doc(db, 'forumPosts', postId);
      const newReply = {
        id: Date.now().toString(),
        content: replyContent,
        author: currentUser.displayName || currentUser.email,
        authorId: currentUser.uid,
        createdAt: new Date(),
        likes: []
      };

      await updateDoc(postRef, {
        replies: arrayUnion(newReply)
      });

      setReplyContent('');
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      general: 'bg-gray-100 text-gray-800',
      health: 'bg-red-100 text-red-800',
      training: 'bg-blue-100 text-blue-800',
      nutrition: 'bg-green-100 text-green-800',
      breeds: 'bg-purple-100 text-purple-800',
      adoption: 'bg-pink-100 text-pink-800',
      events: 'bg-yellow-100 text-yellow-800',
      photos: 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || colors.general;
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <BackToHomeButton />
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full">
                  <MessageSquare className="h-12 w-12 text-orange-600" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Join the DogDays.ie Community
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Connect with fellow dog lovers, share experiences, ask questions, and get advice from our amazing community.
              </p>
              
              <div className="space-y-4">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign In
                </Link>
                
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition-colors"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Create Account
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What you can do in our forum:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <PawPrint className="h-4 w-4 text-orange-500 mr-2" />
                    Share your dog stories
                  </div>
                  <div className="flex items-center">
                    <PawPrint className="h-4 w-4 text-orange-500 mr-2" />
                    Get training advice
                  </div>
                  <div className="flex items-center">
                    <PawPrint className="h-4 w-4 text-orange-500 mr-2" />
                    Discuss health topics
                  </div>
                  <div className="flex items-center">
                    <PawPrint className="h-4 w-4 text-orange-500 mr-2" />
                    Find local events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <BackToHomeButton />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <MessageSquare className="h-8 w-8 text-orange-600 mr-3" />
                Community Forum
              </h1>
              <p className="text-gray-600">Welcome back, {currentUser.displayName || currentUser.email}!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowNewPostForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </button>
            
            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* New Post Form */}
        {showNewPostForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newPostCategory}
                  onChange={(e) => setNewPostCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="What's your post about?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Share your thoughts, questions, or experiences..."
                  required
                />
              </div>

              {/* Media Upload Section */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add Photo or Video (Optional)
                </label>
                <MediaUpload onMediaUploaded={handleMediaUploaded} />
                {newPostMediaUrl && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-sm text-green-700">
                      ✅ {newPostMediaType === 'image' ? 'Image' : 'Video'} uploaded successfully!
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewPostForm(false)}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 disabled:opacity-50"
                >
                  {loading ? 'Posting...' : 'Post'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.value === post.category)?.label || post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  {/* Display uploaded media */}
                  {post.mediaUrl && (
                    <div className="mb-4">
                      {post.mediaType === 'image' ? (
                        <img 
                          src={post.mediaUrl} 
                          alt="Post attachment" 
                          className="max-w-full h-auto rounded-lg shadow-md max-h-96 object-cover"
                        />
                      ) : (
                        <video 
                          src={post.mediaUrl} 
                          controls 
                          className="max-w-full h-auto rounded-lg shadow-md max-h-96"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {formatDate(post.createdAt)}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 border-t pt-4">
                <button
                  onClick={() => handleLikePost(post.id)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-md transition-colors ${
                    post.likes?.includes(currentUser.uid)
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className="h-4 w-4" />
                  <span>{post.likes?.length || 0}</span>
                </button>
                
                <button
                  onClick={() => setSelectedPost(selectedPost?.id === post.id ? null : post)}
                  className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.replies?.length || 0} replies</span>
                </button>
              </div>
              
              {/* Replies Section */}
              {selectedPost?.id === post.id && (
                <div className="mt-6 border-t pt-6">
                  <h4 className="font-semibold mb-4">Replies</h4>
                  
                  {/* Reply Form */}
                  <div className="mb-6">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Write a reply..."
                    />
                    <button
                      onClick={() => handleReply(post.id)}
                      disabled={!replyContent.trim()}
                      className="mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 disabled:opacity-50"
                    >
                      Reply
                    </button>
                  </div>
                  
                  {/* Replies List */}
                  <div className="space-y-4">
                    {post.replies?.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 mb-2">{reply.content}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          <span className="mr-4">{reply.author}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{formatDate(reply.createdAt)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600">Be the first to start a discussion!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;

