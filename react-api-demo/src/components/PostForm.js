import React, { useEffect, useState } from "react";
import "../style.css";
import { v4 as uuidv4 } from "uuid";
import { createPost, editPost } from "../services/postservice";

function PostForm({ posts, setPosts, isEdit, editPostId,setIsEdit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  let newPost;

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  useEffect(() => {
    if (isEdit && editPostId) {
      const editPostData = posts.find((post) => post.id === editPostId);
      if (editPostData) {
        setTitle(editPostData.title);
        setBody(editPostData.body);
      }
    }
  }, [editPostId, isEdit, posts]);


  const formHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      const editPostData = posts.find((post) => post.id === editPostId);
       newPost = { userId: editPostData.userId, id: editPostData.id, title, body };
        editPost(editPostId, newPost)
          .then((result) => {
            clearForm();
            setShowPopup(true);
            setPosts((prev) =>
              prev.map((post) => (post.id === editPostId ? newPost : post))
            );
            setIsEdit(false)
            setTimeout(() => setShowPopup(false), 3000);
          })
          .catch((err) => {
            console.error(err);
          });
      }
     else {
      newPost = { userId: uuidv4(), id: uuidv4(), title, body };
      createPost(newPost)
        .then((result) => {
          clearForm();
          setShowPopup(true);
          setPosts((prev) => [...prev, newPost]);
          setTimeout(() => setShowPopup(false), 3000);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div>
      <h1>{isEdit ? "Edit Post" : "Add a New Post"}</h1>
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
