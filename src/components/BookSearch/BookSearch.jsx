import React, { useState } from 'react';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for books..."
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book.id} className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h3>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
              alt={book.volumeInfo.title}
              className="w-full h-auto mb-2"
            />
            <p className="text-sm">{book.volumeInfo.authors?.join(', ')}</p>
            <p className="text-sm">{book.volumeInfo.publishedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
