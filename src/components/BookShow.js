import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

const BookShow = ({ book }) => {
  const { updateBookById, deleteBookById } = useContext(BooksContext)
  const [isEdit, setIsEdit] = useState(false);
  const handleClickDelete = () => {
    deleteBookById(book.id);
  };
  const handleClickEdit = () => {
    setIsEdit(!isEdit);
  };
  const editBook = (title) => {
    updateBookById(book.id, title);
    setIsEdit(!isEdit);
  };
  let content = <h2>{book.title}</h2>;
  if (isEdit) {
    content = <BookEdit book={book} onEdit={editBook} />;
  }
  return (
    <div id={`book-id-${book.id}`} className="book-item">
      <div className="">
        <button className="edit" onClick={handleClickEdit}>
          edit
        </button>
        <button className="delete" onClick={handleClickDelete}>
          delete
        </button>
      </div>
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      <div> {content}</div>
    </div>
  );
};

export default BookShow;
