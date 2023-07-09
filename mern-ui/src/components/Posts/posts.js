import React from 'react'
import Post from "./Post/post"
import useStyles from './styles'
import { useSelector } from 'react-redux'


const Posts = () => {
    const postsSelector = useSelector((state)=> state.posts);
    const classes = useStyles();

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post/>
        </>
    )
}
export default Posts