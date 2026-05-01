"use client";

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

const AllbooksPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('/data/book.json');
                const data = await response.json();
                setBooks(data.books);
                
                // Extract unique categories
                const uniqueCategories = ['All', ...new Set(data.books.map(book => book.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching books:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    // Filter books using useMemo
    const filteredBooks = useMemo(() => {
        let filtered = books;

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(book => book.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            filtered = filtered.filter(book =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    }, [searchQuery, selectedCategory, books]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <p className="text-lumina-teal text-lg">Loading books...</p>
            </div>
        );
    }

    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Search Bar at Top */}
            <div className="sticky top-20 z-40 bg-slate-950/95 backdrop-blur-sm border-b border-white/10 py-6">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-white/5 blur-lg rounded-2xl group-focus-within:bg-lumina-teal/10 transition-colors" />
                            <div className="relative flex items-center">
                                <Search className="absolute left-4 text-lumina-teal w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by title or author..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 glass-card rounded-2xl focus:outline-none focus:border-lumina-teal/50 text-sm tracking-wide bg-white/5 text-white placeholder-slate-400"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 text-slate-400 hover:text-lumina-teal transition"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar - Categories */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-40 space-y-4">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                                                selectedCategory === category
                                                    ? 'bg-lumina-teal text-slate-950 shadow-lg shadow-lumina-teal/50'
                                                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                                            }`}
                                        >
                                            {category}
                                            {category !== 'All' && (
                                                <span className="ml-2 text-xs opacity-70">
                                                    ({books.filter(b => b.category === category).length})
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                                <p className="text-xs uppercase tracking-widest text-lumina-teal font-bold">Stats</p>
                                <div className="space-y-2 text-sm text-slate-300">
                                    <p>Total Books: <span className="text-lumina-teal font-semibold">{books.length}</span></p>
                                    <p>Showing: <span className="text-lumina-teal font-semibold">{filteredBooks.length}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Books Grid */}
                    <div className="lg:col-span-3">
                        <div className="mb-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal">
                                {selectedCategory === 'All' ? 'All Books' : selectedCategory}
                            </p>
                            <h2 className="text-3xl font-bold text-white mt-2">
                                {selectedCategory === 'All' ? 'Browse Our Collection' : selectedCategory + ' Books'}
                            </h2>
                        </div>

                        {filteredBooks.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredBooks.map((book, index) => (
                                    <motion.div
                                        key={book.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:bg-white/10"
                                    >
                                        <div className="mb-5 overflow-hidden rounded-[1.75rem] bg-slate-900">
                                            <img
                                                src={book.image_url}
                                                alt={`${book.title} cover`}
                                                className="h-48 w-full object-cover"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-lg font-semibold text-white line-clamp-2">{book.title}</div>
                                            <div className="mt-2 text-sm text-slate-300">{book.author}</div>
                                        </div>

                                        <div className="mb-5 min-h-[88px] text-sm leading-6 text-slate-300 line-clamp-4">
                                            {book.description}
                                        </div>

                                        <div className="mb-6 flex items-center justify-between text-sm text-slate-400">
                                            <span className="px-2 py-1 bg-lumina-teal/10 rounded-full text-lumina-teal text-xs font-semibold">
                                                {book.category}
                                            </span>
                                            <span className="font-semibold text-white">{book.available_quantity} available</span>
                                        </div>

                                        <Link
                                            href={`/books/${book.id}`}
                                            className="inline-flex w-full items-center justify-center rounded-full bg-lumina-teal px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-teal-300"
                                        >
                                            View Details
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-slate-400 text-lg">No books found matching your criteria.</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory('All');
                                    }}
                                    className="mt-6 px-6 py-3 bg-lumina-teal text-slate-950 font-semibold rounded-full hover:bg-teal-300 transition"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllbooksPage;