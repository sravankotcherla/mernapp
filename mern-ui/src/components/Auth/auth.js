import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import LockIcon from "@mui/icons-material/Lock";
import Input from "./input";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../redux/actions";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData]= useState({firstName:"", lastName:"", email: "", password:"", repeatPassword:""})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };

  const googleSuccess = async (res) => {
    const decoded_JWT = jwt_decode(res.credential)
    const user = {
      name: decoded_JWT.name,
      email: decoded_JWT.email,
      imageUrl: decoded_JWT.picture,
      id: decoded_JWT.sub
    }
    dispatch({ type: 'AUTH', data: { result: user, token: res.credential } });
    navigate("/");
  };
  const googleFailure = () => {
    console.log("Google Sign IN was unsuccessful. Try again later", 'Google Sing In error');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="h5">
          {" "}
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid type="container" spacing={2} className={classes.formGrid}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => {   setFormData((prevState=>({...prevState, firstName: e.target.value})))}}
                  autoFocus={true}
                  half={true}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => {  setFormData((prevState=>({...prevState, lastName: e.target.value})))}}
                  half={true}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Addres"
              value={formData.email}
              onChange={(e) => {   setFormData((prevState=>({...prevState, email: e.target.value})))}}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              value={formData.password}
              onChange={(e) => {  setFormData((prevState=>({...prevState, password: e.target.value})))}}
              type={showPassword ? "text" : "password"}
              handleShowPassword={() =>
                setShowPassword((prevState) => !prevState)
              }
            />
            {isSignUp && (
              <Input
                name="repeatPassword"
                label="Confirm Password"
                value={formData.repeatPassword}
              onChange={(e) => { setFormData((prevState=>({...prevState, repeatPassword: e.target.value})))}}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth={true}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin width='365' onSuccess={googleSuccess} onFailure={googleFailure} auto_select={false}/>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                onClick={() => {
                  setIsSignUp((prevState) => !prevState);
                }}
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an accoutn? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
