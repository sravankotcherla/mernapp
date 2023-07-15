import {getPosts, createPost as createThePost, getPost, updatePost as _updatePost, deletePostById, likePostById} from "../../api/posts";
import { SignInService, SignUpService } from "../../api/users";


//Action Creator
export const fetchAllPosts = () => async (dispatch) => {
    try {
        const resp = await getPosts();
        const action= {
            type: 'FETCH_ALL',
            data: resp.data,
        }
        return dispatch(action)
    } catch (e) {
        console.log(e);
    }
}

export const createPost = (newPost) => {
    return async (dispatch) => {
        try {
            const { data } = await createThePost(newPost);
            return dispatch({type: 'CREATE', data: data})
        } catch (e) {
            console.log(e);
        }
    }
}

export const fetchPost = (postId) => async (dispatch) => {
    try {
        const { data } = await getPost(postId);
        return dispatch({type: 'POST_TO_EDIT', data: data})
    } catch (e) {
        console.log(e);
    }
}

export const updatePost = (postId,postData) => async (dispatch) => {
    try {
        const { data } = await _updatePost(postId, postData);
        return dispatch({type: 'UPDATE', data: data})
    } catch (e) {
        console.log(e);
    }
}

export const deletePost = (postId) => async (dispatch)=>{
    try {
        const { data } = await deletePostById(postId);
        return dispatch({ type: 'DELETE', data: data });
    } catch (e) {
        console.log(e);
    }
}

export const likePost = (postId) => async (dispatch) => {
    try {
        const { data } = await likePostById(postId);
        return dispatch({type:'UPDATE', data: data})
    } catch (e) {
        console.log(e);
    }
}

export const signUp = (userInfo,navigate) => async (dispatch) => {
    try {
        const { data } = await SignUpService(userInfo);
        dispatch({ type: 'AUTH', data: data })
        navigate("/")
    } catch (e) {
        console.log(e);
    }
}

export const signIn = (userInfo, navigate) => async (dispatch) => {
    try {
        const { data } = await SignInService(userInfo);
        dispatch({ type: 'AUTH', data: data });
        navigate("/")
    } catch (e) {
        console.log(e);
    }
}