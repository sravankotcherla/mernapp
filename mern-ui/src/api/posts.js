import axios from 'axios';

const url = "http://localhost:7700/posts";

export const getPosts = () => {
    axios.get(url);
}