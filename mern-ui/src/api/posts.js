import axios from 'axios';

const url = "http://localhost:7700/posts";

export const getPosts = async() => {
    return axios.get(url);
}

export const createPost = async(newPost) => {
    return axios.post(url, newPost)
}

export const getPost = async (postId) => {
    return axios.get(`${url}/${postId}`);
}

export const updatePost = async (postId, postData) => {
    return axios.patch(`${url}/${postId}`, postData)
}