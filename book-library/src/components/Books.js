import React,{useContext} from 'react'
import BooksContext from "../context/BooksContext"
import '../style.css'


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
                        <p>{book.description}</p>

                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Books