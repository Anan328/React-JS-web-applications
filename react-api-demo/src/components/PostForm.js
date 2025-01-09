import React, { useState } from "react";
import "../style.css";
import { v4 as uuidv4 } from 'uuid';

import { createPost } from "../services/postservice";


function PostForm({posts,setPosts}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const clearForm = () => {
    setTitle("");
    setBody("");
  };
  const formHandler = (e) => {
    e.preventDefault();
    const newPost = { userId: uuidv4(),id: uuidv4(),title, body };
    // console.log(newPost);

    // console.log(newPost);

    createPost(newPost)
      .then((result) => {
        clearForm();
        // console.log(result);
        setShowPopup(true);
        setPosts((prev)=> [...prev,newPost]);
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h1>Add a new post</h1>
      <form onSubmit={formHandler} className="form-container">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="form-label">Body</label>
        <input
          type="text"
          className="form-input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button className="submit-btn">Submit</button>
      </form>
      {showPopup && (
        <div className="popup">
          <p>Post Submitted Successfully!</p>
        </div>
      )}
    </div>
  );
}

export default PostForm;
