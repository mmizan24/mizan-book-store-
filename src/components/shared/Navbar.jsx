"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="   mx-auto flex border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(78,205,196,0.14),transparent_35%) py-3 text-sm text-slate-200 backdrop-blur-xl sm:px-10 gap-4 mt-10">
            <div className="flex justify-between items-center w-full">
                <div></div>
                <ul className="flex gap-4">
                    <li>
                        <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/allbooks"}>All books</NavLink>
                    </li>
                </ul>
                <div className="flex gap-4">
                    {isLoggedIn ? (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                        <NavLink href={"/login"} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Login
                        </NavLink>
                    )}
                    <NavLink href={"/rejister"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        My Profile
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;