"use client";

import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
  website: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, website }) => {
  return (
    <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
      
      <div className="relative z-10 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Professional Profile</p>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400">
            <svg className="h-5 w-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium truncate">{email}</span>
          </div>

          <div className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400">
            <svg className="h-5 w-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a 
              href={`https://${website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 transition-colors"
            >
              {website}
            </a>
          </div>
        </div>

        <button className="w-full mt-4 py-2 px-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all active:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;
