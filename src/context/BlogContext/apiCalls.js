import axios from "axios";
import { BASE_URL } from "../../utils/helper";

export async function createNewBlog(title, content, userId){
    const res = await axios.post(`${BASE_URL}/blogs`, {userId, title, content});
    return {data: res.data, status: res.status};
}

export async function deleteBlog(blogId, userId){
    const res = await axios.delete(`${BASE_URL}/blogs/${blogId}`, {
        headers: {
            userId
        }
    });
    return {data: res.data, status: res.status};
}

export async function updateBlog(blogId, title, content, userId){
    const res = await axios.patch(`${BASE_URL}/blogs/${blogId}`, {title, content, userId});
    return {data: res.data, status: res.status};
}