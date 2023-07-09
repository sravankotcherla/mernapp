import {getPosts, createPost as createThePost, getPost, updatePost as _updatePost} from "../../api/posts";


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