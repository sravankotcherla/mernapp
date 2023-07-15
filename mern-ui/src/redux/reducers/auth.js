
export default function (authData=null, action){
    switch (action.type) {
        case 'AUTH':
            debugger;
            localStorage.setItem('userProfile', JSON.stringify(action.data));
            return action.data;
        case 'LOGOUT':
            localStorage.clear();
            return action.data;
        default:
            return authData
    }
}
