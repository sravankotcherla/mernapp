import React from 'react'
import useStyles from './style'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {deletePost, likePost} from '../../../redux/actions'

const Post = (props) => {
    const { post, setCurrId } = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDeletePost = () => {
        dispatch(deletePost(post._id));
    }

    const handleLikePost = () => {
        dispatch(likePost(post._id))
    }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={ post.selectedFile}/>
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator} </Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()} </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size='small' onClick={() => {
                    setCurrId(post._id);
                 }} >
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='secondary' >{post.tags.map(item => `#${item} `)} </Typography>
                <Typography variant='h5' className={classes.title} gutterBottom={true}>{post.title} </Typography>
                
                <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>{post.message} </Typography>
                </CardContent>
                <div className={classes.cardActionsContainer}>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' onClick={handleLikePost} >
                        <ThumbUpAltIcon fontSize='small' />
                        Like
                        <span style={{'margin-left': '4px'}}>{post.likeCount}</span>
                    </Button>
                </CardActions>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' onClick={handleDeletePost} >
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                </CardActions>  
                </div>
            </div>
       </Card>
    )
}
export default Post