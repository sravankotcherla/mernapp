import {getPosts} from "../../api/posts";


//Action Creator
export const fetchAllPosts = () => {
    return async (dispatch) => {
        try {
            const allPostsResp = await getPosts();
            console.log(allPostsResp);
            const action= {
                type: 'FETCH_ALL',
                data: allPostsResp.data,
            }
            return dispatch(action)
        } catch (e) {
            console.log(e);
            return dispatch({type:'FETCH_ALL', data: e})
        }
    }
}