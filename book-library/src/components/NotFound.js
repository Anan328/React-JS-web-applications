import React from 'react';
import '../NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-box">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
        <button className="not-found-button"> <Link to={"/books"} className="error">Go Back Home</Link></button>
      </div>
    </div>
  );
}

export default NotFound;
