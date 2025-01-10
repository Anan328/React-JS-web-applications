import React, { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";
import "../style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Books() {
  const [searchParam, setsearchParam] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || "";
  const books = useContext(BooksContext);
  const navigate = useNavigate();

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (title) => {
    // console.log(filteredBooks)
    // console.log(title);

    navigate(`/?search=${title}`);
  };
  const Home = () => {
    navigate("/");
    setsearchParam("");
  };
  return (
    <div className="container">
      <h1>All Books</h1>
      <div className="field">
        <input
          className="search"
          value={searchParam}
          onChange={(e) => setsearchParam(e.target.value)}
          placeholder="Search books by title or Author"
        />
        <button className="field-button green" onClick={() => handleSearch(searchParam)}>Search</button>
        <button className="field-button red" onClick={() => Home()}>Home</button>
      </div>

      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              {book.description.length > 50
                ? `${book.description.substring(0, 50)}...`
                : book.description}{" "}
              <Link className="readmore" to={`/books/${book.id}`}>
                readmore
              </Link>
            </li>
          ))
        ) : (
          <li>No matches found</li>
        )}
      </ul>
    </div>
  );
}

export default Books;
