import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const BookSearchPage = () => {
    const [query, setQuery] = useState(''); 
    const [books, setBooks] = useState([]);
    const [bookshelf, setBookshelf] = useState(() => {
        return JSON.parse(localStorage.getItem('bookshelf')) || [];
    });

    useEffect(() => {
        
        const defaultSearch = async () => {
            const response = await axios.get(`https://openlibrary.org/search.json?q=javascript&limit=10&page=1`);
            setBooks(response.data.docs);
        };

        defaultSearch();
    }, []);

    const searchBooks = async (e) => {
        const q = e.target.value;
        setQuery(q);

        if (q.length > 2) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
            setBooks(response.data.docs);
        } else {
            setBooks([]);
        }
    };

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div>
           <h1> <span className="h0ighlight">Book Search</span></h1>
            <input
                type="text"
                value={query}
                onChange={searchBooks}
                placeholder="Search for books..." 

            />
           <div className="div-btn">
             <button className="main-btn" onClick={() => window.location.href = '/bookshelf'}>
                Go to My Bookshelf
            </button>
            </div>
            <div className="book-list">
                {books.map((book) => (
                    <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
                ))}
            </div>
            
        </div>
    );
};

export default BookSearchPage;
