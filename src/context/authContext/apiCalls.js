import axios from "axios";
import { BASE_URL } from "../../utils/helper";
import {loginStart, loginSuccess, loginFailure, logout} from "./AuthActions";

export const login = async (user, dispatch) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post(`${BASE_URL}/auth/login`, user);
        dispatch(loginSuccess(res.data));
        return res.status;
    }catch(err){
        dispatch(loginFailure())
    }
} 

export const checkUserName = async (username) => {
    const res = await axios.post(`${BASE_URL}/auth/username-check`, {username});
    return {data: res.data, status: res.status};
} 
export const checkEmail = async (email) => {
    const res = await axios.post(`${BASE_URL}/auth/email-check`, {email});
    return {data: res.data, status: res.status};
} 

export const register = async (user)=>{
    const res = await axios.post(`${BASE_URL}/auth/register`, user);
    return {data: res.data, status: res.status};
}

export const handleLogout = (dispatch) =>{
    dispatch(logout());
} 