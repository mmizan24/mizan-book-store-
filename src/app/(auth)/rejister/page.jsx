"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateUrl = (value) => {
    return /^(https?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!$&'()*+,;=.]+$/.test(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !photoUrl.trim() || !password.trim()) {
      setError('All fields are required. Please fill in every field.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validateUrl(photoUrl)) {
      setError('Please enter a valid photo URL.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal font-bold">Create Account</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Register for Naira Bookstore</h1>
          <p className="mt-3 text-slate-400">Fill in the details below to create your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-3xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          )}

          <label className="block">
            <span className="text-sm font-medium text-slate-300">Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your full name"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-500 focus:border-lumina-teal focus:outline-none focus:ring-2 focus:ring-lumina-teal/20"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-300">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-500 focus:border-lumina-teal focus:outline-none focus:ring-2 focus:ring-lumina-teal/20"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-300">Photo URL</span>
            <input
              type="url"
              value={photoUrl}
              onChange={(event) => setPhotoUrl(event.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-500 focus:border-lumina-teal focus:outline-none focus:ring-2 focus:ring-lumina-teal/20"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-500 focus:border-lumina-teal focus:outline-none focus:ring-2 focus:ring-lumina-teal/20"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-lumina-teal px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-teal-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;