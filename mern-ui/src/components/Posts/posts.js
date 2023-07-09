import React from 'react'
import Post from "./Post/post"
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import { useEffect } from 'react'


const Posts = (props) => {
    const { setCurrId } = props;
    const posts = useSelector((state)=> state.posts);
    const classes = useStyles();
    console.log(posts);

    if (!posts.length) {
        return <CircularProgress/>
    } else {
        return (
            <Grid className={classes.container} container alignItems='stretch' spacing='3'>
            {posts.map(postItem => (
                <Grid key={postItem.id} item xs={12} sm={6}>
                    <Post post={postItem} setCurrId={setCurrId}/>
                </Grid>
            ))}
        </Grid>
        )
    }
    
}
export default Posts