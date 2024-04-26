import React,{useState} from "react";

const BookEdit = ({book, onEdit}) => {
  
   const [title,setTitle] = useState(book.title);
   const handleChange = (event) => {
      setTitle(event.target.value)
   };
   const handleSubmit = (event) => {
      event.preventDefault();
      onEdit(title);
     
      
   }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input value={title} onChange={handleChange}/>
            <button>Save</button>
         </form>
      </div>
   )
}
export default BookEdit;