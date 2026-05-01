"use client";

import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const BooksDetailsPage = ({ params }) => {
  const router = useRouter();
  const { id } = use(params);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borrowMessage, setBorrowMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.replace(`/login?from=protected&next=/books/${id}`);
      return;
    }

    const loadBook = async () => {
      try {
        const response = await fetch('/data/book.json');
        if (!response.ok) {
          throw new Error(`Failed to load book data: ${response.status}`);
        }
        const data = await response.json();
        const foundBook = data.books.find((item) => String(item.id) === String(id));
        if (!foundBook) {
          setError('Book not found.');
          setLoading(false);
          return;
        }
        setBook(foundBook);
      } catch (fetchError) {
        setError('Unable to load book details.');
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, [id, router]);

  const handleBorrow = () => {
    setBorrowMessage('Borrow request confirmed. Enjoy your next read!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-slate-200 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          Loading book details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">
        <div className="rounded-3xl border border-rose-500/40 bg-rose-500/10 px-8 py-6 text-rose-200 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          {error}
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-slate-200 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          Unable to load the selected book.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-14 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-[2rem] bg-white/5 p-8 shadow-[0_40px_80px_rgba(0,0,0,0.25)] border border-white/10 backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal">Book Details</p>
          <h1 className="mt-4 text-4xl font-bold text-white">{book.title}</h1>
          <p className="mt-3 text-slate-400">Explore this title and borrow it if you're ready to read.</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            <img
              src={book.image_url}
              alt={`${book.title} cover`}
              className="h-[560px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
          >
            <div className="space-y-4">
              <div>
                <span className="text-sm uppercase tracking-[0.35em] text-lumina-teal">Author</span>
                <p className="mt-2 text-3xl font-semibold text-white">{book.author}</p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal">Available</p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {book.available_quantity} {book.available_quantity === 1 ? 'copy' : 'copies'} left
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal">Description</p>
                <p className="mt-3 text-slate-300 leading-8">{book.description}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal">Category</p>
                <p className="mt-2 text-white font-semibold">{book.category}</p>
              </div>
            </div>

            <button
              onClick={handleBorrow}
              className="w-full rounded-full bg-lumina-teal px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-teal-300"
            >
              Borrow this book
            </button>

            {borrowMessage && (
              <div className="rounded-[1.75rem] border border-lumina-teal/30 bg-lumina-teal/10 px-5 py-4 text-sm text-lumina-teal">
                {borrowMessage}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;