"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className=" mx-auto flex border-b border-white/10 bg-white/5 py-3 text-sm text-slate-200 backdrop-blur-xl sm:px-10 gap-4">
            <div className="flex justify-between items-center w-full">
                <div></div>
                <ul className="flex gap-4">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/allbooks"}>All books</Link>
                    </li>
                </ul>
                <div className="flex gap-4">
                    {isLoggedIn ? (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                        <Link href={"/login"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </Link>
                    )}
                    <Link href={"/rejister"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Registration
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;