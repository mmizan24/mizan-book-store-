import React from 'react';

import Marquee from "react-fast-marquee";

const newbooks=[

  
    { "id": 1, "title": "The Great Gatsby" },
    { "id": 2, "title": "To Kill a Mockingbird" },
    { "id": 3, "title": "1984" },
    { "id": 4, "title": "The Catcher in the Rye" },
    { "id": 5, "title": "The Hobbit" },
    { "id": 6, "title": "Fahrenheit 451" },
    { "id": 7, "title": "Pride and Prejudice" },
    { "id": 8, "title": "The Book Thief" },
    { "id": 9, "title": "Animal Farm" },
    { "id": 10, "title": "Brave New World" },
    { "id": 11, "title": "The Lord of the Rings" },
    { "id": 12, "title": "The Alchemist" },
    { "id": 13, "title": "The Chronicles of Narnia" },
    { "id": 14, "title": "The Kite Runner" },
    { "id": 15, "title": "Life of Pi" },
    { "id": 16, "title": "The Picture of Dorian Gray" },
    { "id": 17, "title": "Frankenstein" },
    { "id": 18, "title": "The Little Prince" },
    { "id": 19, "title": "Wuthering Heights" },
    { "id": 20, "title": "Moby Dick" }
  ]




const BooksList = () => {
    return (
        <div className='container mx-auto flex flex-col gap-4 px-10 py-4 sm:flex-row sm:items-center sm:justify-between'>
            <button className='new-arrival-btn btn rounded-full bg-blue-800 px-6 py-3 text-white'>New Arrival</button>
            <Marquee pauseOnHover={true} speed={50} gradient={false} className="flex gap-4" >
                {newbooks.map((book) => (
                    <div key={book.id} className="mx-4 px-4 py-2 bg-white/5 rounded-lg shadow-md text-sm text-slate-300">
                        {book.title}
                    </div>
                ))}

            </Marquee>
        </div>
    );
};

export default BooksList;