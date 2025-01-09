import axios from 'axios';

// service layer
const api  = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

const getPosts = () => api.get("/posts");

export {getPosts} 