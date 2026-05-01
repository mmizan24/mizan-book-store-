"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal font-bold">Welcome Back</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Login to Your Account</h1>
          <p className="mt-3 text-slate-400">Enter your login details to access the bookstore.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-3xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          )}

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
            <span className="text-sm font-medium text-slate-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-500 focus:border-lumina-teal focus:outline-none focus:ring-2 focus:ring-lumina-teal/20"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-lumina-teal px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-teal-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;