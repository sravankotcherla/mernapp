export default function (posts=[], action) {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.data;
        case 'CREATE':
            return [...posts, action.data];
        case 'UPDATE':
            return posts.map(item => {
                if (item._id === action.data._id) {
                    return action.data;
                }
                return item;
            })
        case 'DELETE':
            return posts.filter(item => item._id !== action.data._id);
        default:
            return posts
    }
}