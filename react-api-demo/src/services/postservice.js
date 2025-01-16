import axios from 'axios';

// service layer
const api  = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

const getPosts = () => api.get("/posts");

const deletePost = (id) => api.delete(`/posts/${id}`)

const createPost = (post) => api.post("/posts",post);

const editPost = (id,post) => api.put(`/posts/${id}`,post);

export {getPosts,deletePost,createPost,editPost};
