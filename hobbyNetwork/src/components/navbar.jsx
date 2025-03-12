import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Home, UserCircle, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8" />
            <span className="font-bold text-xl">HobbyNetwork</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/home" className="flex items-center space-x-1 hover:text-indigo-200">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-indigo-200">
              <UserCircle className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;