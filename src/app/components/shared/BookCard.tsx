import { IBook } from '@/types/bookstype';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book: IBook
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="object-cover transition duration-500 group-hover:scale-105"
                ></Image>

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                    {book.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h3 className="line-clamp-1 text-xl font-bold text-slate-800">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-slate-500">
                    by <span className="font-medium text-slate-700">
                        {book.author}
                    </span>
                </p>

                {/* Rating + Pages */}
                <div className="mt-4 flex items-center justify-between">

                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-slate-700">
                            {book.rating}
                        </span>
                        <span className="text-sm text-slate-400">
                            / 5
                        </span>
                    </div>

                    <span className="text-sm text-slate-500">
                        {book.totalPages} pages
                    </span>

                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                    <div>
                        <p className="text-xs text-slate-400">
                            Published
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-slate-400">
                            Publisher
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                            {book.publisher}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="btn btn-success mt-5 w-full rounded-lg text-white">
                        View Details →
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default BookCard;