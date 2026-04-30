import React from 'react';

import Marquee from "react-fast-marquee";

const BooksList = () => {
    return (
        <div className=' container mx-auto flex justify-between gap-4 items-center  px-10 py-4'>
            <button className='btn bg-lumina-teal text-white'>Latest Books</button>
            <Marquee>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit autem ullam quam corrupti voluptatibus iusto, animi, laborum iure tenetur delectus. Tempore facere excepturi culpa natus iusto, ipsum dolor quidem.

            </Marquee>

            
        </div>
    );
};

export default BooksList;