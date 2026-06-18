import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* 1. Profile Header Card */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-inner">
            JD
          </div>
          <div className="text-center md:text-left space-y-1 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-3xl font-extrabold tracking-tight">John Doe</h1>
              <span className="inline-fit w-fit px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200 self-center md:self-start">
                ID: {userId}
              </span>
            </div>
            <p className="text-slate-500 font-medium">Full Stack Developer</p>
            <p className="text-sm text-slate-400">Member since January 2026</p>
          </div>
          <div>
            <button className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition-colors duration-200 text-sm shadow-sm">
              Edit Profile
            </button>
          </div>
        </section>

        {/* 2. Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-1">12</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Active Projects</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-1">1,240</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Code Commits</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-1">48</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Tasks Completed</div>
          </div>
        </section>

        {/* 3. Account Details & Activity Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Information Block */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold tracking-tight border-b border-slate-100 pb-3">Personal Info</h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                <span className="text-slate-700 font-medium">john.doe@example.com</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</span>
                <span className="text-slate-700 font-medium">San Francisco, CA</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Role Permission</span>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md border border-emerald-200">Administrator</span>
              </div>
            </div>
          </section>

          {/* Activity Log Block */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold tracking-tight border-b border-slate-100 pb-3">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-sm">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-slate-800 font-medium">Pushed 4 commits to <span className="font-semibold text-slate-900">main-branch</span></p>
                  <span className="text-xs text-slate-400">2 hours ago</span>
                </div>
              </div>
              <div className="flex items-start gap-4 text-sm">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-slate-800 font-medium">Created a new project layout wrapper template</p>
                  <span className="text-xs text-slate-400">Yesterday</span>
                </div>
              </div>
              <div className="flex items-start gap-4 text-sm">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-slate-800 font-medium">Updated security protocols on account access</p>
                  <span className="text-xs text-slate-400">3 days ago</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default User;
