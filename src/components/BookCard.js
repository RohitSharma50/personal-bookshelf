// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name?.join(', ')}</p>
            <button className="card-btn" onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
        </div>
    );
};

export default BookCard;
