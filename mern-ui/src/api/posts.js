import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:7700" })

api.interceptors.request.use((req) => {
    debugger;
    if (localStorage.getItem('userProfile')) {
        req.headers.Authorization = `Basic ${JSON.parse(localStorage.getItem('userProfile')).token}`;
    }
    return req;
})

export const getPosts = async() => {
    return api.get("/posts");
}

export const createPost = async(newPost) => {
    return api.post("/posts", newPost)
}

export const getPost = async (postId) => {
    return api.get(`/posts/${postId}`);
}

export const updatePost = async (postId, postData) => {
    return api.patch(`/posts/${postId}`, postData)
}

export const deletePostById = async (postId) => {
    return api.delete(`/posts/${postId}`);
}

export const likePostById = async (postId) => {
    return api.patch(`posts/${postId}/likePost`);
}