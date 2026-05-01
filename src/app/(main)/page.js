"use client";



import Link from "next/link";
import { motion } from "framer-motion";

const featuredBooks = [
  {
    id: 1,
    title: "The Silent Forest",
    author: "Elena Vance",
    category: "Story",
    price: "$12.99",
    description: "A gripping tale of a woman who discovers an ancient secret hidden deep within the woods of her childhood home.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Mastering React 18",
    author: "David Miller",
    category: "Tech",
    price: "$14.99",
    description: "A comprehensive guide to building scalable modern web applications using the latest features of React.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Cosmic Frontiers",
    author: "Dr. Sarah Jenkins",
    category: "Science",
    price: "$11.99",
    description: "An exploration of the most distant galaxies and the physics that governs the expansion of our universe.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    title: "Beneath the Neon Lights",
    author: "Kaito Tanaka",
    category: "Story",
    price: "$13.99",
    description: "A cyberpunk thriller set in a futuristic Tokyo where memory can be bought and sold on the black market.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[radial-gradient(circle_at_top,_rgba(78,205,196,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,107,107,0.12),transparent_30%)] px-6 py-5 sm:px-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="mb-1 px-4 py-1.5 rounded-full bg-lumina-teal/10 border border-lumina-teal/20 text-lumina-teal text-[10px] font-bold tracking-[0.2em] uppercase">
                Naira Book House
              </div>
              <h1 className="text-3xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tighter text-white">
                Find Your Next <br /> <span className="text-lumina-teal italic">Read.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#94a3b8] mb-10 max-w-xl mx-auto leading-relaxed font-medium">
                Access over 50,000 digital titles. Borrow instantly, read anywhere, and grow your digital shelf with Naira Book House.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Link
                  href="/allbooks"
                  className="px-10 py-5 bg-lumina-teal text-black font-bold rounded-2xl glow-teal hover:scale-105 transition-all text-sm uppercase tracking-widest"
                >
                  Browse Now
                </Link>
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 blur-lg rounded-2xl group-hover:bg-lumina-teal/10 transition-colors" />
                  {/* <input
                    type="text"
                    placeholder="Search by title..."
                    className="relative w-64 md:w-80 px-6 py-5 glass-card rounded-2xl focus:outline-none focus:border-lumina-teal/50 text-sm tracking-wide bg-white/5"
                  /> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-lumina-teal">Featured books</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">Top picks for your next read</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-5 overflow-hidden rounded-[1.75rem] bg-slate-900">
                  <img
                    src={book.image}
                    alt={`${book.title} cover`}
                    className="h-48 w-full object-cover"
                  />
                </div>

                <div className="mb-4">
                  <div className="text-lg font-semibold text-white">{book.title}</div>
                  <div className="mt-2 text-sm text-slate-300">{book.author}</div>
                </div>

                <div className="mb-5 min-h-[88px] text-sm leading-6 text-slate-300">{book.description}</div>
                <div className="mb-6 flex items-center justify-between text-sm text-slate-400">
                  <span>{book.category}</span>
                  <span className="font-semibold text-white">{book.price}</span>
                </div>

                <Link
                  href={`/books/${book.id}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-lumina-teal px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-teal-300"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
