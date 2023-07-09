import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from "./images/memories.png"
import Posts from './components/Posts/posts'
import Form from './components/Form/form'
import useStyles from './styles'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchAllPosts} from './redux/actions/posts'


const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchAllPosts());
    })

    return (
        <Container maxWidth="lg" >
            <AppBar position='static' color='white' className={classes.appBar}>
                <Typography variant='h2' align="center" className={classes.heading}>
                    Memories
                </Typography>
                <img src={memories} alt="Memories" height="60" className={classes.image}></img>
            </AppBar>
            <Grow in>
                <Grid container justify='space-between' alignItems='stretch' spacing='3'>
                    <Grid item xs={12} sm={7} >
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Form/>
                    </Grid>
                </Grid>
            </Grow>
       </Container>
    )
}

export default App;