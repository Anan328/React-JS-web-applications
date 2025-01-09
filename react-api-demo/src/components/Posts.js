import React, { useState, useEffect } from "react";
import { getPosts } from "../services/postservice";
import "../style.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((result) => {
        setPosts(result.data);
        console.log(result.data);
      })

      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
