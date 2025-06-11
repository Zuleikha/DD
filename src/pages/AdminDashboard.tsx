import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot,
  where,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  Eye,
  UserPlus,
  Activity
} from 'lucide-react';
import BackToHomeButton from '../components/common/BackToHomeButton';

interface UserStats {
  totalUsers: number;
  newUsersToday: number;
  newUsersThisWeek: number;
  newUsersThisMonth: number;
}

interface ForumStats {
  totalPosts: number;
  postsToday: number;
  totalReplies: number;
}

interface UserRegistration {
  id: string;
  email: string;
  displayName: string;
  createdAt: any;
  uid: string;
}

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  createdAt: any;
  likes: string[];
  replies: any[];
  category: string;
}

const AdminDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [userStats, setUserStats] = useState<UserStats>({
    totalUsers: 0,
    newUsersToday: 0,
    newUsersThisWeek: 0,
    newUsersThisMonth: 0
  });
  const [forumStats, setForumStats] = useState<ForumStats>({
    totalPosts: 0,
    postsToday: 0,
    totalReplies: 0
  });
  const [recentUsers, setRecentUsers] = useState<UserRegistration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    // Listen to forum posts for stats
    const postsQuery = query(collection(db, 'forumPosts'), orderBy('createdAt', 'desc'));
    const unsubscribePosts = onSnapshot(postsQuery, (querySnapshot) => {
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ForumPost));
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const postsToday = posts.filter(post => {
        if (!post.createdAt) return false;
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
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as UserRegistration));
      
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

      const newUsersToday = users.filter(user => {
        if (!user.createdAt) return false;
        const userDate = user.createdAt.toDate();
        return userDate >= today;
      }).length;

      const newUsersThisWeek = users.filter(user => {
        if (!user.createdAt) return false;
        const userDate = user.createdAt.toDate();
        return userDate >= weekAgo;
      }).length;

      const newUsersThisMonth = users.filter(user => {
        if (!user.createdAt) return false;
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

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-IE') + ' at ' + date.toLocaleTimeString('en-IE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You must be logged in to view the admin dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <BackToHomeButton />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Activity className="h-8 w-8 text-orange-600 mr-3" />
                User Analytics Dashboard
              </h1>
              <p className="text-gray-600">Monitor user signups and forum activity</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading analytics...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* User Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{userStats.totalUsers}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserPlus className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">New Today</p>
                    <p className="text-2xl font-bold text-gray-900">{userStats.newUsersToday}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">This Week</p>
                    <p className="text-2xl font-bold text-gray-900">{userStats.newUsersThisWeek}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Calendar className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">{userStats.newUsersThisMonth}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Forum Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Posts</p>
                    <p className="text-2xl font-bold text-gray-900">{forumStats.totalPosts}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Eye className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Posts Today</p>
                    <p className="text-2xl font-bold text-gray-900">{forumStats.postsToday}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Replies</p>
                    <p className="text-2xl font-bold text-gray-900">{forumStats.totalReplies}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Users Table */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent User Registrations</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Registration Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentUsers.length > 0 ? (
                      recentUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                                  <Users className="h-5 w-5 text-orange-600" />
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {user.displayName || 'Anonymous User'}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(user.createdAt)}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                          No user registrations yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                📊 How to Monitor User Signups
              </h3>
              <div className="text-blue-800 space-y-2">
                <p><strong>Real-time Updates:</strong> This dashboard updates automatically when users sign up.</p>
                <p><strong>Firebase Console:</strong> For more detailed analytics, visit your Firebase project console → Authentication → Users.</p>
                <p><strong>Export Data:</strong> In Firebase Console, you can export user data for further analysis.</p>
                <p><strong>Email Notifications:</strong> Set up Firebase Cloud Functions to get email alerts for new signups.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

