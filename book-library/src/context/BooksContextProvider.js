import React, { useState,useEffect } from "react";
import BooksContext from "./BooksContext";

function BooksContextProvider({children}) {
    
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("/books.json")
        .then(response=> response.json())
        .then(data=>setBooks(data))
        .catch(err=>{
            console.error(err);       
        })
    },[]);

  return (
    <BooksContext.Provider value={books}>
        {children}
    </BooksContext.Provider>
  )
  
}

export default BooksContextProvider;