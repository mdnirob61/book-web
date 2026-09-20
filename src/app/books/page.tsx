import React from 'react';
import { IBook } from '@/types/bookstype';
import BookCard from '../components/shared/BookCard';

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-16 px-4">

            {/* Section Heading */}
            <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Our Collection
                </p>

                <h2 className="text-3xl font-bold text-slate-800">
                    Explore All Books
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Find your next favorite book from our collection.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    booksData.map((book: IBook) => {
                        return <BookCard key={book.bookId} book={book} ></BookCard>
                    })}

            </div>
        </section >
    );
};

export default Books;
