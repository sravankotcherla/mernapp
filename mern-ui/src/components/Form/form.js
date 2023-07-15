import React, { useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { createPost, fetchPost, updatePost } from "../../redux/actions";
import { useSelector } from "react-redux";

const emptyPostData={
    creator: "",
    message: "",
    title: "",
    tags:[],
    selectedFile: "",
  }

const Form = (props) => {
    const { currId, setCurrId } = props;
    const dispatch = useDispatch();
    const postToEdit= useSelector(state=> state.postToEdit)
    const [postData, setPostData] = useState(emptyPostData);
    const [isEditMode, setIsEditMode] = useState(false);
    
    useEffect(() => {
        if (currId) {
            dispatch(fetchPost(currId));
        }
    }, [currId]);

    useEffect(() => {
        if (postToEdit) {
            setIsEditMode(true);
            setPostData(postToEdit);
        } else {
            setPostData(emptyPostData)
        }
    }, [postToEdit])

  const classes = useStyles();

    const handleSubmit = (ev) => { 
        ev.preventDefault();
        if (isEditMode) {
            dispatch(updatePost(currId,postData));
        } else {
            dispatch(createPost(postData));
        }
        handleClear();
    };
    const handleClear = () => {
        setIsEditMode(false);
        setCurrId(null)
      setPostData(emptyPostData)
  };
    
  console.log(postData, 'inside form');
  return (
    <Paper className={`${classes.root} ${classes.paper}`}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
              <Typography variant="h6">{isEditMode ? "Editing a Memory": "Creating a memory" }</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          value={postData.tags.reduce((accum,curr)=>{return accum === '' ? accum+curr :( accum+','+curr)}, '')}
          onChange={(e) => {
            debugger;
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
              </div>
              <Button variant='contained' color='primary' type='submit' size='large' fullWidth={true}> { isEditMode ? "Update" : "Submit"}</Button>
              <Button variant='contained' color='secondary' size='small' fullWidth={true} onClick={handleClear} > Clear</Button>
      </form>
    </Paper>
  );
};
export default Form;
