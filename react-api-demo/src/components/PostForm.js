import React, { useEffect, useState } from "react";
import "../style.css";
import { v4 as uuidv4 } from "uuid";
import { createPost, editPost } from "../services/postservice";

function PostForm({ posts, setPosts, isEdit, editPostId, setIsEdit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  useEffect(() => {
    if (isEdit && editPostId) {
      const editPostData = posts.find((post) => post.id === editPostId);
      // console.log(editPostId);
      if (editPostData) {
        setTitle(editPostData.title);
        setBody(editPostData.body);
      }
    }
  }, [editPostId, isEdit, posts]);

  const formHandler = (e) => {
    e.preventDefault();
    clearForm();
    if (isEdit) {
      editPostHandle();
    } else {
      addPostHandle();
    }
  };

  const addPostHandle = () => {
    createPost({ userId: uuidv4(), title, body })
      .then((response) => {
        setShowPopup(true);
        setPosts((prev) => [...prev, response.data]); // setPosts([...posts,response.data])
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const editPostHandle = () => {
    const editPostData = posts.find((post) => post.id === editPostId);
    // console.log(editPostId);
    editPost(editPostId, { userId: editPostData.userId, title, body })
      .then((response) => {
        setShowPopup(true);
        setPosts((prev) =>
          prev.map((post) => (post.id === editPostId ? response.data : post))
        );
        setIsEdit(false);
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>{isEdit ? "Edit Post" : "Add a New Post"}</h1>
      <form onSubmit={formHandler} className="form-container">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-input"
          spellCheck="false"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="form-label">Body</label>
        <textarea
          type="text"
          spellCheck="false"
          className="form-area"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button className="submit-btn">{isEdit ? "Edit" : "Submit"}</button>
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
