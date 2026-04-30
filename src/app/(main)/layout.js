import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLaout = ({ children }) => {
    return (
        <>
        <header>
            <Header />
            <Navbar />
        </header>

            {children}
        </>
    );
};

export default MainLaout;