import React,{useContext} from 'react'
import BooksContext from "../context/BooksContext"
import '../style.css'
import { useParams } from 'react-router-dom'


function BookDetails() {

    const {bookId} = useParams();
    const books = useContext(BooksContext);
    
    const book = books.find(b=>b.id === parseInt(bookId));

    // console.log(bookId);
    // console.log(book);
    
    if(book == null){
        return <div className='not-found'>Book not found</div>
    }
    
  return (
    <div>
        <h1>{book.title}</h1>
        <h3>Written by <u>{book.author}</u></h3>
        <p>{book.description}</p>
    </div>
  )
}

export default BookDetails