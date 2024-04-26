import { createContext } from "react";
import axios from "axios";
import React,{useState} from "react";
const BooksContext = createContext();

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const ValueToShare = {
        books,
        createBook: async (title) => {
            const response = await axios.post("http://localhost:3001/books", {
                title,
            });

            const updatedBooks = [...books, response.data];
            setBooks(updatedBooks);
        },
        updateBookById: async (id, title) => {
            const response = await axios.put(`http://localhost:3001/books/${id}`, {
                title,
            });
            const updatedBooks = books.map((book) => {
                if (book.id === id) return { id: book.id, title };
                else return book;
            });
            setBooks(updatedBooks);
        },

        deleteBookById: async (id) => {
            await axios.delete(`http://localhost:3001/books/${id}`);
            const updatedBooks = books.filter((book) => book.id !== id);
            setBooks(updatedBooks);
        },
        fetchBooks: async () => {
            console.log("test");
            const response = await axios.get("http://localhost:3001/books");
            setBooks(response.data);
        }
    }
    return(
        <BooksContext.Provider value={ ValueToShare } >
            { children }
        </BooksContext.Provider >
    );
    

}
export {Provider}
export default BooksContext;