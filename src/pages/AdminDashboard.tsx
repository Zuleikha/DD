import React from 'react';
import { Users, Settings, BarChart, FileText, Bell } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#2C3E50] text-white hidden md:block">
          <div className="p-6">
            <h2 className="text-xl font-bold">Admin Dashboard</h2>
          </div>
          <nav className="mt-6">
            <a href="/admin" className="flex items-center px-6 py-3 bg-[#4A90E2] text-white">
              <BarChart className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </a>
            <a href="/admin/users" className="flex items-center px-6 py-3 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200">
              <Users className="w-5 h-5 mr-3" />
              <span>Users</span>
            </a>
            <a href="/admin/content" className="flex items-center px-6 py-3 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200">
              <FileText className="w-5 h-5 mr-3" />
              <span>Content</span>
            </a>
            <a href="/admin/notifications" className="flex items-center px-6 py-3 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200">
              <Bell className="w-5 h-5 mr-3" />
              <span>Notifications</span>
            </a>
            <a href="/admin/settings" className="flex items-center px-6 py-3 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200">
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-grow bg-gray-100 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome to the DogDays.ie admin dashboard</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                <Users className="w-8 h-8 text-[#4A90E2]" />
              </div>
              <div className="flex items-baseline">
                <p className="text-3xl font-semibold text-gray-800">1,248</p>
                <p className="ml-2 text-green-500 text-sm font-medium">+12%</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">Compared to last month</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Page Views</h3>
                <BarChart className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="flex items-baseline">
                <p className="text-3xl font-semibold text-gray-800">54,321</p>
                <p className="ml-2 text-green-500 text-sm font-medium">+24%</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">Compared to last month</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Listings</h3>
                <FileText className="w-8 h-8 text-[#7ED321]" />
              </div>
              <div className="flex items-baseline">
                <p className="text-3xl font-semibold text-gray-800">876</p>
                <p className="ml-2 text-green-500 text-sm font-medium">+8%</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">Compared to last month</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Forum Posts</h3>
                <Bell className="w-8 h-8 text-[#9B59B6]" />
              </div>
              <div className="flex items-baseline">
                <p className="text-3xl font-semibold text-gray-800">432</p>
                <p className="ml-2 text-green-500 text-sm font-medium">+16%</p>
              </div>
              <p className="mt-1 text-xs text-gray-500">Compared to last month</p>
            </div>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">User Growth</h3>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">User Growth Chart Placeholder</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic Sources</h3>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Traffic Sources Chart Placeholder</p>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">JD</div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">John Doe</div>
                          <div className="text-sm text-gray-500">john@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Added new listing</div>
                      <div className="text-sm text-gray-500">Dog-friendly café in Dublin</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">May 19, 2025</div>
                      <div className="text-sm text-gray-500">10:30 AM</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Approved
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">JS</div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                          <div className="text-sm text-gray-500">jane@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Posted in forum</div>
                      <div className="text-sm text-gray-500">Training tips for puppies</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">May 18, 2025</div>
                      <div className="text-sm text-gray-500">3:45 PM</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Published
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">RJ</div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Robert Johnson</div>
                          <div className="text-sm text-gray-500">robert@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Marketplace listing</div>
                      <div className="text-sm text-gray-500">Dog crate for sale</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">May 17, 2025</div>
                      <div className="text-sm text-gray-500">9:15 AM</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
