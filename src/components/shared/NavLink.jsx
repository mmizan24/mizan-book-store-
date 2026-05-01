import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
    return (
        <div>
            <Link href={href} className="text-slate-200 hover:text-white bg-blue-800 hover:bg-blue-700 rounded-4xl px-3 py-1 transition-colors">
                {children}
            </Link>
        </div>
    );
};

export default NavLink;