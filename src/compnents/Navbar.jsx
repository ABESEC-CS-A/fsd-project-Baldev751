import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      pathname === path ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-500 hover:text-white'
    }`;

  return (
    <nav className="bg-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-white text-xl font-bold tracking-wide">LectureApp</Link>
          <div className="flex space-x-2">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/login" className={linkClass('/login')}>Login</Link>
            <Link to="/register" className={linkClass('/register')}>Register</Link>
            <Link to="/dashboard" className={linkClass('/dashboard')}>Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
