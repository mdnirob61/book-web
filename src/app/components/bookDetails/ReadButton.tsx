'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookstype';
import React, { useContext } from 'react';

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadBook = () => {
        console.log("triggered", book);

        setReadBooks([...readBooks, book]);
        alert(`You have read ${book.bookName}`)
    }

    return (
        <button className="btn btn-success rounded-lg px-7 text-white" onClick={() => handleReadBook()}>
            Read →
        </button>
    );
};

export default ReadButton;