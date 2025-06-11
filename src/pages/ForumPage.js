import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { MessageSquare, Plus, User, Clock, Heart, MessageCircle, PawPrint, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToHomeButton from '../components/common/BackToHomeButton';
import MediaUpload from '../components/common/MediaUpload';
const ForumPage = () => {
    const { currentUser, logout } = useAuth();
    const [posts, setPosts] = useState([]);
    const [showNewPostForm, setShowNewPostForm] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostCategory, setNewPostCategory] = useState('general');
    const [loading, setLoading] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [replyContent, setReplyContent] = useState('');
    const [newPostMediaUrl, setNewPostMediaUrl] = useState('');
    const [newPostMediaType, setNewPostMediaType] = useState('');
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
            const postsData = [];
            querySnapshot.forEach((doc) => {
                postsData.push({ id: doc.id, ...doc.data() });
            });
            setPosts(postsData);
        });
        return () => unsubscribe();
    }, []);
    const handleCreatePost = async (e) => {
        e.preventDefault();
        if (!currentUser || !newPostTitle.trim() || !newPostContent.trim())
            return;
        setLoading(true);
        try {
            const postData = {
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
        }
        catch (error) {
            console.error('Error creating post:', error);
        }
        setLoading(false);
    };
    const handleMediaUploaded = (mediaUrl, mediaType) => {
        setNewPostMediaUrl(mediaUrl);
        setNewPostMediaType(mediaType);
    };
    const handleLikePost = async (postId) => {
        if (!currentUser)
            return;
        try {
            const postRef = doc(db, 'forumPosts', postId);
            const postDoc = await getDoc(postRef);
            const postData = postDoc.data();
            if (postData?.likes?.includes(currentUser.uid)) {
                // Unlike
                await updateDoc(postRef, {
                    likes: postData.likes.filter((uid) => uid !== currentUser.uid)
                });
            }
            else {
                // Like
                await updateDoc(postRef, {
                    likes: arrayUnion(currentUser.uid)
                });
            }
        }
        catch (error) {
            console.error('Error liking post:', error);
        }
    };
    const handleReply = async (postId) => {
        if (!currentUser || !replyContent.trim())
            return;
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
        }
        catch (error) {
            console.error('Error adding reply:', error);
        }
    };
    const formatDate = (timestamp) => {
        if (!timestamp)
            return 'Just now';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    const getCategoryColor = (category) => {
        const colors = {
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
        return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx(BackToHomeButton, {}), _jsx("div", { className: "max-w-2xl mx-auto text-center", children: _jsxs("div", { className: "bg-white rounded-lg shadow-md p-8", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "bg-orange-100 p-4 rounded-full", children: _jsx(MessageSquare, { className: "h-12 w-12 text-orange-600" }) }) }), _jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Join the DogDays.ie Community" }), _jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Connect with fellow dog lovers, share experiences, ask questions, and get advice from our amazing community." }), _jsxs("div", { className: "space-y-4", children: [_jsxs(Link, { to: "/login", className: "inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors", children: [_jsx(LogIn, { className: "h-5 w-5 mr-2" }), "Sign In"] }), _jsxs(Link, { to: "/signup", className: "inline-flex items-center justify-center w-full px-6 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition-colors", children: [_jsx(UserPlus, { className: "h-5 w-5 mr-2" }), "Create Account"] })] }), _jsxs("div", { className: "mt-8 pt-6 border-t border-gray-200", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "What you can do in our forum:" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(PawPrint, { className: "h-4 w-4 text-orange-500 mr-2" }), "Share your dog stories"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(PawPrint, { className: "h-4 w-4 text-orange-500 mr-2" }), "Get training advice"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(PawPrint, { className: "h-4 w-4 text-orange-500 mr-2" }), "Discuss health topics"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(PawPrint, { className: "h-4 w-4 text-orange-500 mr-2" }), "Find local events"] })] })] })] }) })] }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(BackToHomeButton, {}), _jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-gray-900 flex items-center", children: [_jsx(MessageSquare, { className: "h-8 w-8 text-orange-600 mr-3" }), "Community Forum"] }), _jsxs("p", { className: "text-gray-600", children: ["Welcome back, ", currentUser.displayName || currentUser.email, "!"] })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("button", { onClick: () => setShowNewPostForm(true), className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700", children: [_jsx(Plus, { className: "h-4 w-4 mr-2" }), "New Post"] }), _jsx("button", { onClick: logout, className: "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50", children: "Sign Out" })] })] }), showNewPostForm && (_jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-8", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Create New Post" }), _jsxs("form", { onSubmit: handleCreatePost, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Category" }), _jsx("select", { value: newPostCategory, onChange: (e) => setNewPostCategory(e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500", children: categories.map((category) => (_jsx("option", { value: category.value, children: category.label }, category.value))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Title" }), _jsx("input", { type: "text", value: newPostTitle, onChange: (e) => setNewPostTitle(e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500", placeholder: "What's your post about?", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Content" }), _jsx("textarea", { value: newPostContent, onChange: (e) => setNewPostContent(e.target.value), rows: 4, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500", placeholder: "Share your thoughts, questions, or experiences...", required: true })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Add Photo or Video (Optional)" }), _jsx(MediaUpload, { onMediaUploaded: handleMediaUploaded }), newPostMediaUrl && (_jsx("div", { className: "mt-2 p-2 bg-green-50 border border-green-200 rounded-md", children: _jsxs("p", { className: "text-sm text-green-700", children: ["\u2705 ", newPostMediaType === 'image' ? 'Image' : 'Video', " uploaded successfully!"] }) }))] }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx("button", { type: "button", onClick: () => setShowNewPostForm(false), className: "px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50", children: "Cancel" }), _jsx("button", { type: "submit", disabled: loading, className: "px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 disabled:opacity-50", children: loading ? 'Posting...' : 'Post' })] })] })] })), _jsxs("div", { className: "space-y-6", children: [posts.map((post) => (_jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [_jsx("div", { className: "flex justify-between items-start mb-4", children: _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "flex items-center space-x-2 mb-2", children: _jsx("span", { className: `px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`, children: categories.find(c => c.value === post.category)?.label || post.category }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: post.title }), _jsx("p", { className: "text-gray-700 mb-4", children: post.content }), post.mediaUrl && (_jsx("div", { className: "mb-4", children: post.mediaType === 'image' ? (_jsx("img", { src: post.mediaUrl, alt: "Post attachment", className: "max-w-full h-auto rounded-lg shadow-md max-h-96 object-cover" })) : (_jsx("video", { src: post.mediaUrl, controls: true, className: "max-w-full h-auto rounded-lg shadow-md max-h-96", children: "Your browser does not support the video tag." })) }))] }) }), _jsx("div", { className: "flex items-center justify-between text-sm text-gray-500 mb-4", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(User, { className: "h-4 w-4 mr-1" }), post.author] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), formatDate(post.createdAt)] })] }) }), _jsxs("div", { className: "flex items-center space-x-4 border-t pt-4", children: [_jsxs("button", { onClick: () => handleLikePost(post.id), className: `flex items-center space-x-1 px-3 py-1 rounded-md transition-colors ${post.likes?.includes(currentUser.uid)
                                                ? 'bg-red-100 text-red-600'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`, children: [_jsx(Heart, { className: "h-4 w-4" }), _jsx("span", { children: post.likes?.length || 0 })] }), _jsxs("button", { onClick: () => setSelectedPost(selectedPost?.id === post.id ? null : post), className: "flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors", children: [_jsx(MessageCircle, { className: "h-4 w-4" }), _jsxs("span", { children: [post.replies?.length || 0, " replies"] })] })] }), selectedPost?.id === post.id && (_jsxs("div", { className: "mt-6 border-t pt-6", children: [_jsx("h4", { className: "font-semibold mb-4", children: "Replies" }), _jsxs("div", { className: "mb-6", children: [_jsx("textarea", { value: replyContent, onChange: (e) => setReplyContent(e.target.value), rows: 3, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500", placeholder: "Write a reply..." }), _jsx("button", { onClick: () => handleReply(post.id), disabled: !replyContent.trim(), className: "mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 disabled:opacity-50", children: "Reply" })] }), _jsx("div", { className: "space-y-4", children: post.replies?.map((reply) => (_jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [_jsx("p", { className: "text-gray-700 mb-2", children: reply.content }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(User, { className: "h-4 w-4 mr-1" }), _jsx("span", { className: "mr-4", children: reply.author }), _jsx(Clock, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: formatDate(reply.createdAt) })] })] }, reply.id))) })] }))] }, post.id))), posts.length === 0 && (_jsxs("div", { className: "text-center py-12", children: [_jsx(MessageSquare, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No posts yet" }), _jsx("p", { className: "text-gray-600", children: "Be the first to start a discussion!" })] }))] })] }) }));
};
export default ForumPage;
