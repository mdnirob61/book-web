import { IBook } from '@/types/bookstype';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({ book }: { book: IBook }) => {
    return (
        <div className="flex w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:shadow-lg">

            {/* Image */}
            <div className="relative h-[auto] w-70 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="160px"
                    className="object-contain p-2"
                />
            </div>

            {/* Information */}
            <div className="ml-6 flex flex-1 flex-col">

                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-4">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            {book.bookName}
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            By <span className="font-medium text-slate-700">
                                {book.author}
                            </span>
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-semibold text-slate-700">
                            {book.rating}
                        </span>
                    </div>

                </div>

                <div className="my-3 border-t border-slate-100" />

                {/* Category */}
                <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    {book.category}
                </span>

                {/* Review */}
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-auto flex items-end justify-between pt-4">

                    <div className="flex gap-6 text-xs text-slate-500">
                        <div>
                            <span className="block text-slate-400">
                                Pages
                            </span>
                            <span className="font-semibold text-slate-700">
                                {book.totalPages}
                            </span>
                        </div>

                        <div>
                            <span className="block text-slate-400">
                                Published
                            </span>
                            <span className="font-semibold text-slate-700">
                                {book.yearOfPublishing}
                            </span>
                        </div>

                        <div>
                            <span className="block text-slate-400">
                                Publisher
                            </span>
                            <span className="font-semibold text-slate-700">
                                {book.publisher}
                            </span>
                        </div>
                    </div>

                    <Link href={`/books/${book.bookId}`}>
                        <button className="btn btn-sm btn-success rounded-lg px-5 text-white">
                            View Details →
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default ListedBooksCard;