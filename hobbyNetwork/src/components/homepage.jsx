import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-200">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        Hobby Network Platform
      </header>
      
      {/* Main Content */}
      <main className="flex-grow p-6">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Connect, Share, and Grow Your Hobbies</h2>
          <p className="text-gray-700 mt-2">Join communities, share projects, and participate in challenges.</p>
        </section>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 Hobby Network Platform. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-blue-400 text-xl"><Facebook /></a>
          <a href="#" className="hover:text-blue-400 text-xl"><Twitter /></a>
          <a href="#" className="hover:text-blue-400 text-xl"><Instagram /></a>
          <a href="#" className="hover:text-blue-400 text-xl"><Linkedin /></a>
        </div>
      </footer>
    </div>
  );
};

const features = [
  { title: "User Authentication & Profiles", description: "Secure login, detailed profiles, and badges for achievements." },
  { title: "Hobby Communities", description: "Join discussions and interact with like-minded people." },
  { title: "Content Sharing", description: "Share ideas, projects, and collaborate with others." },
  { title: "Hobby Challenges", description: "Earn points and badges for completing challenges." },
  { title: "Workshops & Events", description: "Attend live workshops hosted by experts." },
  { title: "Skill-Based Connections", description: "Connect with users based on complementary skills." },
];

export default Home;
