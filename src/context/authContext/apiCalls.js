import axios from "axios";
import {loginStart, loginSuccess, loginFailure, logout} from "./AuthActions";

export const login = async (user, dispatch) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post("http://localhost:8000/auth/login", user);
        dispatch(loginSuccess(res.data));
        return res.status;
    }catch(err){
        dispatch(loginFailure())
    }
} 

export const checkUserName = async (username) => {
    const res = await axios.post("http://localhost:8000/auth/username-check", {username});
    return {data: res.data, status: res.status};
} 
export const checkEmail = async (email) => {
    const res = await axios.post("http://localhost:8000/auth/email-check", {email});
    return {data: res.data, status: res.status};
} 

export const register = async (user)=>{
    const res = await axios.post("http://localhost:8000/auth/register", user);
    return {data: res.data, status: res.status};
}

export const handleLogout = (dispatch) =>{
    dispatch(logout());
} 