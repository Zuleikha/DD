import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { rtdb } from '../config/firebase';
import { ref, onValue, off } from 'firebase/database';
import { 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Calendar,
  Activity,
  BarChart3,
  Shield,
  Clock,
  UserPlus
} from 'lucide-react';

// Admin email - only this user can access the dashboard
const ADMIN_EMAIL = 'zuleikhak@gmail.com';

interface DashboardStats {
  totalUsers: number;
  totalPosts: number;
  recentUsers: number;
  recentPosts: number;
  todayPosts: number;
  weeklyGrowth: number;
}

interface RecentActivity {
  id: string;
  type: 'post' | 'user';
  title: string;
  author: string;
  timestamp: number;
}

const AdminDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalPosts: 0,
    recentUsers: 0,
    recentPosts: 0,
    todayPosts: 0,
    weeklyGrowth: 0
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  // Security check - only allow admin access
  if (!currentUser || currentUser.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600">This area is restricted to administrators only.</p>
          {!currentUser && (
            <p className="text-sm text-gray-500 mt-2">Please sign in to continue.</p>
          )}
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get forum posts
        const postsRef = ref(rtdb, 'forumPosts');
        onValue(postsRef, (snapshot) => {
          const posts = snapshot.val() || {};
          const postArray = Object.entries(posts).map(([id, post]: [string, any]) => ({
            id,
            ...post
          }));

          const now = Date.now();
          const oneDayAgo = now - (24 * 60 * 60 * 1000);
          const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000);

          const todayPosts = postArray.filter(post => post.createdAt > oneDayAgo).length;
          const recentPosts = postArray.filter(post => post.createdAt > oneWeekAgo).length;

          // Get recent activity for feed
          const recentPostActivity: RecentActivity[] = postArray
            .filter(post => post.createdAt > oneWeekAgo)
            .sort((a, b) => b.createdAt - a.createdAt)
            .slice(0, 5)
            .map(post => ({
              id: post.id,
              type: 'post' as const,
              title: post.title,
              author: post.author,
              timestamp: post.createdAt
            }));

          setRecentActivity(recentPostActivity);

          setStats(prev => ({
            ...prev,
            totalPosts: postArray.length,
            recentPosts,
            todayPosts
          }));
        });

        // Get user registrations
        const usersRef = ref(rtdb, 'userRegistrations');
        onValue(usersRef, (snapshot) => {
          const users = snapshot.val() || {};
          const userArray = Object.entries(users).map(([id, user]: [string, any]) => ({
            id,
            ...user
          }));

          const now = Date.now();
          const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000);
          const twoWeeksAgo = now - (14 * 24 * 60 * 60 * 1000);

          const recentUsers = userArray.filter(user => user.createdAt > oneWeekAgo).length;
          const previousWeekUsers = userArray.filter(user => 
            user.createdAt > twoWeeksAgo && user.createdAt <= oneWeekAgo
          ).length;

          const weeklyGrowth = previousWeekUsers > 0 
            ? ((recentUsers - previousWeekUsers) / previousWeekUsers) * 100 
            : recentUsers > 0 ? 100 : 0;

          setStats(prev => ({
            ...prev,
            totalUsers: userArray.length,
            recentUsers,
            weeklyGrowth
          }));
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setLoading(false);
      }
    };

    fetchStats();

    // Cleanup listeners on unmount
    return () => {
      const postsRef = ref(rtdb, 'forumPosts');
      const usersRef = ref(rtdb, 'userRegistrations');
      off(postsRef);
      off(usersRef);
    };
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-IE', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-2" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">DogDays.ie Community Overview</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Admin: {currentUser.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Users */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </div>

          {/* Total Posts */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPosts}</p>
              </div>
            </div>
          </div>

          {/* Weekly Growth */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Weekly Growth</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.weeklyGrowth > 0 ? '+' : ''}{stats.weeklyGrowth.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          {/* Today's Posts */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Today's Posts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.todayPosts}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </h3>
            </div>
            <div className="p-6">
              {recentActivity.length > 0 ? (
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          by {activity.author} • {formatDate(activity.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No recent activity</p>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Quick Stats
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    New Users (7 days)
                  </span>
                  <span className="text-sm font-medium text-gray-900">{stats.recentUsers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    New Posts (7 days)
                  </span>
                  <span className="text-sm font-medium text-gray-900">{stats.recentPosts}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Posts Today
                  </span>
                  <span className="text-sm font-medium text-gray-900">{stats.todayPosts}</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">
                      {stats.totalUsers > 0 ? (stats.totalPosts / stats.totalUsers).toFixed(1) : '0'}
                    </p>
                    <p className="text-sm text-gray-500">Average posts per user</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Dashboard last updated: {new Date().toLocaleString('en-IE')}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

