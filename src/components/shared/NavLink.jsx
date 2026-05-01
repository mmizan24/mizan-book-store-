import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
    return (
        <div>
            <Link href={href} className="text-slate-200 hover:text-white">
                {children}
            </Link>
        </div>
    );
};

export default NavLink;