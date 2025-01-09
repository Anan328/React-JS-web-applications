import React, { useState, useEffect } from "react";
import { getPosts, deletePost } from "../services/postservice";
import "../style.css";
import PostForm from "./PostForm";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((result) => {
        setPosts(result.data);
        // console.log(result.data);
      })

      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);
  const handleDelete = (id) =>{
    deletePost(id)
    .then(response=>{
      // console.log(result);
      setPosts(posts.filter(post=> post.id !== id));
    })
    .catch(err=>{
      console.error(err);
      
    })
  }
  return (
    <div>
      <PostForm posts={posts} setPosts={setPosts}/>
      <h1>Posts</h1>
      <ul>
        {posts
        // .slice(0,10)
        .map((post) => (
          <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button className="deletebtn" onClick={()=>handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
