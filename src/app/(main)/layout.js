import BooksList from '@/components/shared/BooksList';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import Home from './page';

const MainLaout = ({ children }) => {
    return (
        <>
        <header className='sticky top-0 z-50 bg-[radial-gradient(circle_at_top,_rgba(78,205,196,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,107,107,0.12),transparent_30%)] backdrop-blur-xl'>

              
            
           
            <Navbar />
             <BooksList />
            </header>
        
      

            {children}
            

            
        </>
    );
};

export default MainLaout;