export default function (postToEdit=null, action) {
    switch (action.type) {
        case 'POST_TO_EDIT':
            return action.data;
        default:
            return postToEdit;
    }
}