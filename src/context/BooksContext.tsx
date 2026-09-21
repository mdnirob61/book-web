'use client';
import { IBook } from '@/types/bookstype';
import React, { createContext, ReactNode, useState } from 'react';

interface IBookContext {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBookContext>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishList: () => {}
});

const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishList, setWishList] = useState<IBook[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    }

    return (
        <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;