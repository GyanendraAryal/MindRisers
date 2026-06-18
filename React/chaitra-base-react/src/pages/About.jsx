import React from 'react';

const About = () => {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center border-b border-gray-100">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight sm:text-7xl">
          About Us
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto md:text-2xl">
          We are a passionate team dedicated to building simple, clean, and efficient web applications.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto md:text-2xl">
          Our core mission is to deliver high-quality digital experiences using modern technologies.
        </p>
      </section>

      {/* Stats Banner Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div className="p-4">
            <div className="text-5xl font-extrabold text-indigo-600 mb-2">50+</div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Projects Delivered</div>
          </div>
          <div className="p-4">
            <div className="text-5xl font-extrabold text-indigo-600 mb-2">15M+</div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Global Users</div>
          </div>
          <div className="p-4">
            <div className="text-5xl font-extrabold text-indigo-600 mb-2">99.9%</div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Uptime Guaranteed</div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 tracking-tight sm:text-4xl">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Member 1 */}
          <div className="text-center group">
            <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 shadow-inner transition-transform group-hover:scale-105 duration-200"></div>
            <h3 className="text-xl font-bold text-gray-900">Alex Rivers</h3>
            <p className="text-indigo-600 font-medium text-sm mb-2">CEO & Founder</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">Visionary strategist driving technological scaling and product design.</p>
          </div>
          {/* Member 2 */}
          <div className="text-center group">
            <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 shadow-inner transition-transform group-hover:scale-105 duration-200"></div>
            <h3 className="text-xl font-bold text-gray-900">Sarah Chen</h3>
            <p className="text-indigo-600 font-medium text-sm mb-2">Chief Architect</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">Infrastructure engineer focused on system optimization and clean code architecture.</p>
          </div>
          {/* Member 3 */}
          <div className="text-center group">
            <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 shadow-inner transition-transform group-hover:scale-105 duration-200"></div>
            <h3 className="text-xl font-bold text-gray-900">Marcus Vance</h3>
            <p className="text-indigo-600 font-medium text-sm mb-2">Head of Design</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">Creative specialist crafting intuitive user journeys and accessibility patterns.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
