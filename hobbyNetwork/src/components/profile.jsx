import React from 'react';
import { Settings, Edit, MapPin, Calendar, Award } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <div className="px-6 py-4 relative">
          <div className="absolute -top-16 left-6">
            <div className="w-32 h-32 bg-white rounded-full p-1">
              <div className="w-full h-full bg-indigo-100 rounded-full flex items-center justify-center text-4xl font-bold text-indigo-600">
                J
              </div>
            </div>
          </div>
          <div className="ml-40">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className="space-x-3">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Edit Profile
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Passionate photographer and urban gardening enthusiast. Love capturing nature's beauty and growing my own food.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Sidebar */}
        <div className="space-y-6">
          {/* Hobbies */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">My Hobbies</h2>
            <div className="space-y-3">
              {['Photography', 'Urban Gardening', 'Cooking', 'Hiking'].map((hobby) => (
                <div key={hobby} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span>{hobby}</span>
                  <span className="text-sm text-indigo-600">Advanced</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Badges</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((badge) => (
                <div key={badge} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <span className="text-xs mt-2 text-center">Achievement {badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Gallery */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Gallery</h2>
              <button className="text-indigo-600 hover:text-indigo-700">View All</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1493514789931-586cb221d7a7',
                'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
              ].map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { type: 'post', content: 'Shared a new photo', time: '2 hours ago' },
                { type: 'event', content: 'Joined Photography Workshop', time: '1 day ago' },
                { type: 'badge', content: 'Earned Nature Photographer Badge', time: '3 days ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">{activity.content}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;