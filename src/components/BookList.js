import React, { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';
const BookList = () => {
   const { books } = useContext(BooksContext)
   const listItem = books.map((book) => {
      return <BookShow  key={book.id} book={book} />
   });
   return <div className="book-list">{listItem}</div>
}

export default BookList;