import ReadButton from '@/app/components/bookDetails/ReadButton';
import { IBook } from '@/types/bookstype';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string
    }>;
}

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;

    const booksData = await getBooks();

    const book: IBook = booksData.find(
        (book: IBook) => String(book.bookId) === String(id)
    );

    // console.log("book", book);

    return (
        <div className="container mx-auto my-12 px-4">

            <div className="card card-side overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:shadow-xl">

                {/* Book Image */}
                <figure className="w-1/3 min-w-80 bg-slate-100 p-6">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        height={400}
                        width={300}
                        className="h-120 w-full rounded-xl object-cover shadow-lg"
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body p-8">

                    {/* Category + Rating */}
                    <div className="flex items-center justify-between">

                        <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                            {book.category}
                        </span>

                        <div className="flex items-center gap-1">
                            <span className="text-xl text-yellow-400">★</span>
                            <span className="font-bold text-slate-800">
                                {book.rating}
                            </span>
                            <span className="text-sm text-slate-400">
                                / 5
                            </span>
                        </div>

                    </div>

                    {/* Title */}
                    <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-base text-slate-500">
                        by <span className="font-semibold text-slate-700">
                            {book.author}
                        </span>
                    </p>

                    {/* Review */}
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Information */}
                    <div className="mt-5 grid grid-cols-3 gap-4 rounded-xl bg-slate-50 p-4">

                        <div>
                            <p className="text-xs text-slate-400">
                                Pages
                            </p>
                            <p className="mt-1 font-semibold text-slate-700">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">
                                Publisher
                            </p>
                            <p className="mt-1 font-semibold text-slate-700">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">
                                Published
                            </p>
                            <p className="mt-1 font-semibold text-slate-700">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="card-actions mt-6 justify-end gap-3">

                        <ReadButton book={book}></ReadButton>

                        <button className="btn btn-outline rounded-lg px-6">
                            ♡ Wishlist
                        </button>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default BookDetailsPage;