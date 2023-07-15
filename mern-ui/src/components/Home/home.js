import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/posts";
import Post from "../Posts/Post/post";
import Form from "../Form/form";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../redux/actions";


const  Home = () => {
  const dispatch = useDispatch();

    const [currId, setCurrId] = useState(null);
    
    useEffect(() => {
        dispatch(fetchAllPosts());
      }, []);

    return (
        <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrId={setCurrId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currId={currId} setCurrId={setCurrId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home