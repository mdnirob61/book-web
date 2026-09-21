'use client'
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const {readBooks, wishList} = useContext(BooksContext)
    console.log(readBooks, wishList, "wish")
    return (
        <div>
            listed books
        </div>
    );
};

export default ListedBooks;