"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BookRequestPage() {
  const [requests, setRequests] = useState([]);
  
  // Using individual state variables for better stability
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookName, setBookName] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Load data from Local Storage on mount
  useEffect(() => {
    const savedRequests = localStorage.getItem('bookRequests');
    if (savedRequests) {
      try {
        setRequests(JSON.parse(savedRequests));
      } catch (e) {
        console.error("Failed to parse requests", e);
      }
    }
  }, []);

  // Save data to Local Storage whenever requests change
  useEffect(() => {
    localStorage.setItem('bookRequests', JSON.stringify(requests));
  }, [requests]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !bookName.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingId !== null) {
      // Update existing request
      setRequests((prev) =>
        prev.map((req) => (req.id === editingId ? { name: name.trim(), email: email.trim(), bookName: bookName.trim(), id: editingId } : req))
      );
      setEditingId(null);
    } else {
      // Add new request
      const newRequest = {
        name: name.trim(),
        email: email.trim(),
        bookName: bookName.trim(),
        id: Date.now()
      };
      setRequests((prev) => [...prev, newRequest]);
    }

    // Reset form
    setName('');
    setEmail('');
    setBookName('');
    
    // Optional: provide visual feedback
    alert("Book request submitted successfully!");
  };

  const handleEdit = (req) => {
    setName(req.name);
    setEmail(req.email);
    setBookName(req.bookName);
    setEditingId(req.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Request a <span className="text-blue-600">Book</span>
          </h1>
          <p className="text-xl text-gray-600">Can't find what you're looking for? Let us know!</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 mb-16 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {editingId ? 'Edit Your Request' : 'New Book Request'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Book Title</label>
                <input
                  type="text"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  placeholder="Which book are you looking for?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2"
            >
              {editingId ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Update Request
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Submit Request
                </>
              )}
            </button>
            
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setName('');
                  setEmail('');
                  setBookName('');
                }}
                className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* Requests List Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-100 pb-4">
            Recent Requests ({requests.length})
          </h2>
          
          {requests.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg italic">No requests yet. Be the first to ask for a book!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requests.map((req) => (
                <div key={req.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {req.bookName}
                      </h3>
                      <p className="text-sm text-gray-500">Requested by {req.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(req)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit Request"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(req.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Request"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {req.email}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
