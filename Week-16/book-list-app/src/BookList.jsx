import React from 'react';

const BookList = () => {
  const books = [
    { title: 'Dune', author: 'Frank Herbert', year: 1965 },
    { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 },
    { title: 'The Secret', author: 'Rhonda Byrne', year: 2006 },
    
  ];

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title}<br />
            <strong>Author:</strong> {book.author}<br />
            <strong>Year:</strong> {book.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
