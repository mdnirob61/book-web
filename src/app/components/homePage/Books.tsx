import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/bookstype';

const getBooks = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching book data", error);
        return [];
    }
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
                    Explore Popular Books
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Find your next favorite book from our collection.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    booksData.slice(0, 6).map((book: IBook) => {
                        return <BookCard key={book.bookId} book={book} ></BookCard>
                    })}

            </div>
        </section >
    );
};

export default Books;
