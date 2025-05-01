// src/pages/Home.jsx
import React from 'react';
import Navbar from '../compnents/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      <div className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to LectureApp 📚</h1>
        <p className="text-gray-700 text-lg">Stay informed with real-time class updates and announcements.</p>
        <img src="/lecture-illustration.svg" alt="Lecture Illustration" className="mt-8 mx-auto w-2/3" />
      </div>
    </div>
  );
}
