'use client'
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const {readBooks} = useContext(BooksContext)
    console.log(readBooks)
    return (
        <div>
            listed books
        </div>
    );
};

export default ListedBooks;