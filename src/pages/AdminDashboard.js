import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Users, MessageSquare, TrendingUp, Calendar, Eye, UserPlus, Activity } from 'lucide-react';
import BackToHomeButton from '../components/common/BackToHomeButton';
const AdminDashboard = () => {
    const { currentUser } = useAuth();
    const [userStats, setUserStats] = useState({
        totalUsers: 0,
        newUsersToday: 0,
        newUsersThisWeek: 0,
        newUsersThisMonth: 0
    });
    const [forumStats, setForumStats] = useState({
        totalPosts: 0,
        postsToday: 0,
        totalReplies: 0
    });
    const [recentUsers, setRecentUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!currentUser)
            return;
        // Listen to forum posts for stats
        const postsQuery = query(collection(db, 'forumPosts'), orderBy('createdAt', 'desc'));
        const unsubscribePosts = onSnapshot(postsQuery, (querySnapshot) => {
            const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const postsToday = posts.filter(post => {
                if (!post.createdAt)
                    return false;
                const postDate = post.createdAt.toDate();
                return postDate >= today;
            }).length;
            const totalReplies = posts.reduce((total, post) => {
                return total + (post.replies?.length || 0);
            }, 0);
            setForumStats({
                totalPosts: posts.length,
                postsToday,
                totalReplies
            });
        });
        // Listen to user registrations (stored in a separate collection)
        const usersQuery = query(collection(db, 'userRegistrations'), orderBy('createdAt', 'desc'));
        const unsubscribeUsers = onSnapshot(usersQuery, (querySnapshot) => {
            const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
            const newUsersToday = users.filter(user => {
                if (!user.createdAt)
                    return false;
                const userDate = user.createdAt.toDate();
                return userDate >= today;
            }).length;
            const newUsersThisWeek = users.filter(user => {
                if (!user.createdAt)
                    return false;
                const userDate = user.createdAt.toDate();
                return userDate >= weekAgo;
            }).length;
            const newUsersThisMonth = users.filter(user => {
                if (!user.createdAt)
                    return false;
                const userDate = user.createdAt.toDate();
                return userDate >= monthAgo;
            }).length;
            setUserStats({
                totalUsers: users.length,
                newUsersToday,
                newUsersThisWeek,
                newUsersThisMonth
            });
            setRecentUsers(users.slice(0, 10)); // Show last 10 users
            setLoading(false);
        });
        return () => {
            unsubscribePosts();
            unsubscribeUsers();
        };
    }, [currentUser]);
    const formatDate = (timestamp) => {
        if (!timestamp)
            return 'Unknown';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-IE') + ' at ' + date.toLocaleTimeString('en-IE', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    if (!currentUser) {
        return (_jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Access Denied" }), _jsx("p", { className: "text-gray-600", children: "You must be logged in to view the admin dashboard." })] }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("div", { className: "flex items-center justify-between mb-8", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(BackToHomeButton, {}), _jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-gray-900 flex items-center", children: [_jsx(Activity, { className: "h-8 w-8 text-orange-600 mr-3" }), "User Analytics Dashboard"] }), _jsx("p", { className: "text-gray-600", children: "Monitor user signups and forum activity" })] })] }) }), loading ? (_jsxs("div", { className: "text-center py-12", children: [_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto" }), _jsx("p", { className: "mt-4 text-gray-600", children: "Loading analytics..." })] })) : (_jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx("div", { className: "bg-white rounded-lg shadow-md p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(Users, { className: "h-8 w-8 text-blue-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Total Users" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: userStats.totalUsers })] })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(UserPlus, { className: "h-8 w-8 text-green-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "New Today" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: userStats.newUsersToday })] })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(TrendingUp, { className: "h-8 w-8 text-purple-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "This Week" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: userStats.newUsersThisWeek })] })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(Calendar, { className: "h-8 w-8 text-orange-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "This Month" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: userStats.newUsersThisMonth })] })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx("div", { className: "bg-white rounded-lg shadow-md p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(MessageSquare, { className: "h-8 w-8 text-indigo-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Total Posts" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: forumStats.totalPosts })] })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(Eye, { className: "h-8 w-8 text-teal-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Posts Today" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: forumStats.postsToday })] })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(MessageSquare, { className: "h-8 w-8 text-pink-600" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("p", { className: "text-sm font-medium text-gray-500", children: "Total Replies" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: forumStats.totalReplies })] })] }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md", children: [_jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: _jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Recent User Registrations" }) }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "User" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Email" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Registration Date" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: recentUsers.length > 0 ? (recentUsers.map((user) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0 h-10 w-10", children: _jsx("div", { className: "h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center", children: _jsx(Users, { className: "h-5 w-5 text-orange-600" }) }) }), _jsx("div", { className: "ml-4", children: _jsx("div", { className: "text-sm font-medium text-gray-900", children: user.displayName || 'Anonymous User' }) })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-900", children: user.email }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: formatDate(user.createdAt) })] }, user.id)))) : (_jsx("tr", { children: _jsx("td", { colSpan: 3, className: "px-6 py-4 text-center text-gray-500", children: "No user registrations yet" }) })) })] }) })] }), _jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-blue-900 mb-2", children: "\uD83D\uDCCA How to Monitor User Signups" }), _jsxs("div", { className: "text-blue-800 space-y-2", children: [_jsxs("p", { children: [_jsx("strong", { children: "Real-time Updates:" }), " This dashboard updates automatically when users sign up."] }), _jsxs("p", { children: [_jsx("strong", { children: "Firebase Console:" }), " For more detailed analytics, visit your Firebase project console \u2192 Authentication \u2192 Users."] }), _jsxs("p", { children: [_jsx("strong", { children: "Export Data:" }), " In Firebase Console, you can export user data for further analysis."] }), _jsxs("p", { children: [_jsx("strong", { children: "Email Notifications:" }), " Set up Firebase Cloud Functions to get email alerts for new signups."] })] })] })] }))] }) }));
};
export default AdminDashboard;
