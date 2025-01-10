import React,{useContext} from 'react'
import BooksContext from "../context/BooksContext"
import '../style.css'
import { Link } from 'react-router-dom';


function Books() {

    const books = useContext(BooksContext);

  return (
    <div className='container'>
        <h1>All Books</h1>
        <ul>
            {
                books.map(book=>(
                    <li key={book.id}>
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        {book.description.length > 50 ? `${book.description.substring(0, 50)}...` : book.description} <Link className='readmore' to={`/books/${book.id}`}>readmore</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Books