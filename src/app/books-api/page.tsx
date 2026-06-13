"use client";

import React, { useState, useEffect } from 'react';
import UserCard from '../../components/UserCard';
import SearchBox from '../../components/SearchBox';

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

export default function BooksApiPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Books API Directory
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover a curated list of professionals fetched directly from our cloud synchronized API endpoint.
          </p>
        </div>

        {/* Search Section */}
        <SearchBox value={searchQuery} onChange={setSearchQuery} />

        {/* Content Section */}
        <div className="relative min-h-[400px]">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="h-12 w-12 border-4 border-blue-500/20 border-t-blue-600 rounded-full animate-spin" />
              <p className="text-zinc-500 font-medium animate-pulse text-lg">Synchronizing data...</p>
            </div>
          )}

          {error && (
            <div className="max-w-md mx-auto bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 p-6 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-red-800 dark:text-red-200 mb-1">API Fetch Error</h2>
              <p className="text-red-600 dark:text-red-400 text-sm mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Retry Request
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              {filteredUsers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                  {filteredUsers.map((user) => (
                    <UserCard 
                      key={user.id} 
                      name={user.name} 
                      email={user.email} 
                      website={user.website} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">No matches found</h3>
                  <p className="text-zinc-500">Try adjusting your search query for "{searchQuery}"</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer / Stats Section */}
        {!loading && !error && filteredUsers.length > 0 && (
          <div className="text-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-400 text-sm font-medium">
              Showing {filteredUsers.length} of {users.length} results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
