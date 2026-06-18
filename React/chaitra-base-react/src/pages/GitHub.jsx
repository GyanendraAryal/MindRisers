import React, { useState, useEffect } from 'react';

const GitHub = () => {
  const [username, setUsername] = useState('octocat');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGitHubUser = async (targetUser) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${targetUser}`);
      if (!response.ok) {
        throw new Error('User profile not found');
      }
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  // Run initial fetch on component mount
  useEffect(() => {
    fetchGitHubUser(username);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchGitHubUser(username);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-6">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* 1. Search Control Input Box */}
        <form onSubmit={handleSubmit} className="flex gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-sm"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition-colors duration-200 text-sm shadow-sm"
          >
            Search
          </button>
        </form>

        {/* 2. Loading State */}
        {loading && (
          <div className="text-center py-12 text-slate-500 font-medium animate-pulse">
            Fetching profile statistics...
          </div>
        )}

        {/* 3. Error Interface Alert */}
        {error && (
          <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold rounded-xl text-center">
            ❌ Error: {error}
          </div>
        )}

        {/* 4. Main Profile Card Content Area */}
        {profile && !loading && (
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header Identity Block */}
            <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row items-center gap-6">
              <img
                src={profile.avatar_url}
                alt={profile.name || profile.login}
                className="w-24 h-24 rounded-full border-2 border-slate-100 shadow-sm object-cover"
              />
              <div className="text-center sm:text-left space-y-1 flex-1">
                <h1 className="text-2xl font-extrabold tracking-tight">{profile.name || 'No Name Provided'}</h1>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 font-medium text-sm hover:underline block"
                >
                  @{profile.login}
                </a>
                <p className="text-sm text-slate-500 max-w-xs leading-relaxed pt-1">
                  {profile.bio || 'This profile has no bio description.'}
                </p>
              </div>
            </div>

            {/* Profile Statistics Segment */}
            <div className="grid grid-cols-3 bg-slate-50 text-center divide-x divide-slate-100 border-b border-slate-100">
              <div className="py-4">
                <span className="block text-xl font-bold text-slate-900">{profile.public_repos}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Repos</span>
              </div>
              <div className="py-4">
                <span className="block text-xl font-bold text-slate-900">{profile.followers}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Followers</span>
              </div>
              <div className="py-4">
                <span className="block text-xl font-bold text-slate-900">{profile.following}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Following</span>
              </div>
            </div>

            {/* Miscellaneous Information Meta Footer */}
            <div className="p-6 space-y-3 text-sm text-slate-600 bg-white">
              {profile.location && (
                <p className="flex items-center gap-2">
                  <span>📍</span> <span className="font-medium text-slate-700">{profile.location}</span>
                </p>
              )}
              {profile.blog && (
                <p className="flex items-center gap-2 truncate">
                  <span>🔗</span>
                  <a href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-medium">
                    {profile.blog}
                  </a>
                </p>
              )}
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-50">
                Account created on: {new Date(profile.created_at).toLocaleDateString()}
              </p>
            </div>
          </section>
        )}

      </div>
    </main>
  );
};

export default GitHub;
