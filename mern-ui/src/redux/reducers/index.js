import { combineReducers } from "redux";

import posts from "./posts"
import postToEdit from "./form"
import authData  from "./auth";

export default combineReducers({ posts, postToEdit, authData});