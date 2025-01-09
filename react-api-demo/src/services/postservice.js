import axios from 'axios';

// service layer
const api  = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const getPosts = () => api.get("/posts");

export {getPosts} 