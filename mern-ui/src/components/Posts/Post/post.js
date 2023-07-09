import React from 'react'
import useStyles from './style'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'

const Post = (props) => {
    const { post, setCurrId } = props;
    const classes = useStyles();
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
                <Typography variant='body2' color='secondary' >{post.tags.map(item=>`#${item} `)} </Typography>
                <CardContent>
                <Typography variant='h5' className={classes.title} gutter='bottom'>{post.message} </Typography>
                </CardContent>
                <div className={classes.cardActionsContainer}>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' >
                        <ThumbUpAltIcon fontSize='small' />
                        Like
                        {post.LikeCount}
                    </Button>
                </CardActions>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' >
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