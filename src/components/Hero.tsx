import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm
              <span className="block text-blue-600">Anoop Kulkarni</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate professional dedicated to creating innovative solutions and driving meaningful impact through technology and expertise.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/public/avatar.png"
                  alt="Professional Avatar"
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button
            onClick={scrollToAbout}
            className="text-gray-500 hover:text-gray-700 transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
