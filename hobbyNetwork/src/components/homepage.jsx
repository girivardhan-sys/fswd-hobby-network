import React from 'react';
import { Search, Filter, Bookmark, MessageSquare, Heart, Share2 } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filter */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search hobbies, events, or people..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feed */}
        <div className="lg:col-span-2 space-y-6">
          <FeedPost
            username="Sarah Chen"
            hobby="Urban Gardening"
            content="Just finished setting up my vertical herb garden! Anyone have tips for maintaining basil indoors?"
            image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          />
          <FeedPost
            username="Mike Johnson"
            hobby="Photography"
            content="Captured this amazing sunset at the beach yesterday. Shot with my new 50mm lens."
            image="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Hobbies */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Trending Hobbies</h3>
            <div className="space-y-3">
              {['Photography', 'Urban Gardening', 'Cooking', 'Digital Art'].map((hobby) => (
                <div key={hobby} className="flex items-center justify-between">
                  <span>{hobby}</span>
                  <span className="text-sm text-gray-500">2.5k posts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              <EventCard
                title="Photography Workshop"
                date="Mar 15, 2024"
                attendees="24"
              />
              <EventCard
                title="Cooking Masterclass"
                date="Mar 18, 2024"
                attendees="42"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedPost = ({ username, hobby, content, image }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
        {username.charAt(0)}
      </div>
      <div className="ml-3">
        <h4 className="font-semibold">{username}</h4>
        <p className="text-sm text-gray-500">{hobby}</p>
      </div>
    </div>
    <p className="mb-4">{content}</p>
    {image && (
      <img src={image} alt="" className="rounded-lg mb-4 w-full h-64 object-cover" />
    )}
    <div className="flex items-center space-x-4 text-gray-500">
      <button className="flex items-center space-x-1">
        <Heart className="h-5 w-5" />
        <span>24</span>
      </button>
      <button className="flex items-center space-x-1">
        <MessageSquare className="h-5 w-5" />
        <span>12</span>
      </button>
      <button className="flex items-center space-x-1">
        <Share2 className="h-5 w-5" />
      </button>
      <button className="flex items-center space-x-1 ml-auto">
        <Bookmark className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const EventCard = ({ title, date, attendees }) => (
  <div className="border rounded-lg p-3">
    <h4 className="font-semibold mb-1">{title}</h4>
    <div className="flex items-center justify-between text-sm text-gray-500">
      <span>{date}</span>
      <span>{attendees} attending</span>
    </div>
  </div>
);

export default HomePage;