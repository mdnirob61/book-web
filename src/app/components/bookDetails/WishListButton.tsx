'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookstype';
import React, { useContext } from 'react';

const WishListButton = ({ book }: { book: IBook }) => {

    const { wishList, setWishList } = useContext(BooksContext);

    const handleWishListButton = () => {
        console.log("wishlist triggered", book);

        setWishList([...wishList, book]);
        alert(`You have added ${book.bookName} to your wishlist`)
    }

    return (
        <button className="btn btn-outline rounded-lg px-6"
            onClick={() => handleWishListButton()}>
            ♡ Wishlist
        </button>
    );
};

export default WishListButton;