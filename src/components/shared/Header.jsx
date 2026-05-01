import React from 'react';

const Header = () => {
    return (
        <div className="  relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(78,205,196,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,107,107,0.12),transparent_30%)] px-6 py-5 sm:px-10 ">
            <div className="mx-auto ">
                <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-[0_35px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-10">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[rgba(78,205,196,0.16)] text-[var(--color-lumina-teal)] shadow-[0_10px_30px_rgba(78,205,196,0.14)]">
                            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                                <path d="M4 6.75C4 5.78 4.78 5 5.75 5h12.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 18.25V6.75Zm2.5-.25v12.5h9V6.5h-9Zm1.5 1h6v1.5h-6V7.5Zm0 3h6v1.5h-6V10.5Z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl uppercase tracking-[0.35em] text-slate-300" >NiaraBook <span className="text-blue-500 font-bold )]">House</span></p>
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                                Discover books that feel like home
                            </h1>
                        </div>
                    </div>

                    <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                        Explore a beautifully curated library of top stories, timeless must-reads, and genre-packed collections. Every cover hides a new adventure — start browsing now.
                    </p>

                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                        <a href={"/allbooks"} className="inline-flex items-center justify-center rounded-full bg-[var(--color-lumina-teal)] px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300">
                            Explore Books
                        </a>
                        {/* <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-lumina-teal)] hover:text-[var(--color-lumina-teal)]">
                            Browse Genres
                        </a> */}
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Header;