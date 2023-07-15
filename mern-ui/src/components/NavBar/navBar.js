import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import memories from "../../images/memories.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')));
    debugger;
    console.log(user);

    useEffect(() => {
        if (!user) {
            setUser(JSON.parse(localStorage.getItem('userProfile')));
        }
    },[location])
    
    const onLogout = () => {
        setUser(null);
        dispatch({ type: 'LOGOUT', data: null });
    }
    
    return (
        <AppBar position="static" color="white" className={classes.appBar}>
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    variant="h2"
                    align="center"
                    className={classes.heading}
                >
                    Memories
                </Typography>
                <img
                    src={memories}
                    alt="Memories"
                    height="60"
                    className={classes.image}
                ></img>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            src={user.result.imageUrl}
                            alt={user.result.name}
                        >
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                            onClick={onLogout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant="contained" color="primary">
                        SignIn
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
