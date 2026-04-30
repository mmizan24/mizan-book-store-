import React from 'react';

const Navbar = () => {
    return (
        <nav className="mx-auto flex  flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/5 py-5 text-sm text-slate-200 backdrop-blur-xl sm:px-10">
            <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    Book Explorer
                </span>
                <a href="#books" className="transition hover:text-white">Home </a>
                <a href="#features" className="transition hover:text-white">All Books </a>
               <button className="transition hover:text-white">Login  </button>
               
                <button className="transition hover:text-white">Logout </button>
               
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
            <button className="transition hover:text-white cursor-pointer">Registration</button>
            </div>
        </nav>
    );
};

export default Navbar;