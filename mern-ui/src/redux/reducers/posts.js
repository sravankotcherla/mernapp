export default function (posts=[], action) {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.data;
        case 'CREATE':
            return posts
        default:
            debugger;
            return posts
    }
}