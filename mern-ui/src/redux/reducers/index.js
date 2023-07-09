import { combineReducers } from "redux";

import posts from "./posts"
import postToEdit from "./form"

export default combineReducers({ posts, postToEdit });