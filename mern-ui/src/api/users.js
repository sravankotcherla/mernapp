
import axios from 'axios';


const url = "http://localhost:7700/users";

export const SignInService = (userInfo) => {
    return axios.post(`${url}/signIn`, userInfo);
}

export const SignUpService = (userInfo) => {
    return axios.post(`${url}/signUp`, userInfo);
}