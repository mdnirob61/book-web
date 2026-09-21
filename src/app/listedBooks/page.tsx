'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookstype';
import React, { useContext, useState } from 'react';
import ListedBooksCard from '../components/shared/ListedBooksCard';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext);
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

    // console.log(readBooks, wishList, "wish");
    // console.log(sortBy, "sortBy");

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishList = sortBooks(wishList);

    return (
        <div className='container mx-auto py-10'>
            <h2 className='font-bold text-4xl bg-slate-100 py-10 rounded-3xl text-center text-green-600'>
                Listed Books
            </h2>

            <div className='text-center m-10'>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                    defaultValue="Pick a Runtime" className="select select-success bg-green-400">
                    <div className='bg-slate-200'>
                        <option disabled={true}>Sort By</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"pages"}>Number of Pages</option>
                        <option value={"year"}>Published Year</option>
                    </div>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift my-10">
                <input type="radio"
                    name="my_tabs_3"
                    className="tab font-semibold text-[1rem]" aria-label={`Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedReadBooks.length > 0 ?
                            sortedReadBooks.map((book: IBook) => {
                                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                            }) : <div className='font-bold py-6 text-center text-3xl'>
                                No Read Books Found
                            </div>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab font-semibold text-[1rem]" aria-label={`Wishlist Books (${wishList.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWishList.length > 0 ?
                            sortedWishList.map((book: IBook) => {
                                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                            }) : <div className='font-bold py-6 text-center text-3xl'>
                                No Wishlist Books Found
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;