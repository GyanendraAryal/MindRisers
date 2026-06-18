import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div>
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
