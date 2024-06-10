// src/pages/BookshelfPage.js
import React, { useState, useEffect } from 'react';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        setBookshelf(JSON.parse(localStorage.getItem('bookshelf')) || []);
    }, []);

    return (
        <div className="search-container">
            <h1>My Bookshelf</h1>
           <div className="div-btn"> <button className="main-btn" onClick={() => window.location.href = '/'}>
                Back to Search
            </button> </div>
            <div className="book-list">
                {bookshelf.map((book, index) => (
                    <div key={index} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author_name?.join(', ')}</p>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default BookshelfPage;
