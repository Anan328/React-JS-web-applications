import React, { useState } from 'react';
import "../style.css";
import { createPost } from "../services/postservice";
function PostForm() {
    
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    const clearForm = ()=>{
        setTitle("");
        setBody("");
    }
    const formHandler = (e)=>{
        e.preventDefault();
        const newPost = {title,body};
        // console.log(newPost);

        createPost(newPost)
        .then((result) => {
            clearForm();
            console.log(result);
            
        }).catch((err) => {
            console.error(err);
            
        });
    }
  return (
    <div>
        <h1>Add a new post</h1>
        <form onClick={formHandler} className="form-container">
        <label className="form-label">Title</label>
        <input type='text' className="form-input" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <label className="form-label">Body</label>
        <input type='text' className="form-input"  value={body} onChange={(e)=> setBody(e.target.value)}/>
        <button className="submit-btn">Submit</button>
    </form>
    </div>
    
  )
}

export default PostForm