import BookCreate from "./components/BookCreate";
import React from "react";
import {useEffect,useContext } from "react";
import Booklist from "./components/BookList";
import BooksContext from "./context/books";
import "./style.css";


const App = () => {
  const{fetchBooks} =useContext(BooksContext)
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Booklist />
      <BookCreate  />
    </div>
  );
};

export default App;
