import axios from "axios";

export async function createNewBlog(title, content, userId){
    const res = await axios.post("http://localhost:8000/blogs", {userId, title, content});
    return {data: res.data, status: res.status};
}

export async function deleteBlog(blogId, userId){
    const res = await axios.delete(`http://localhost:8000/blogs/${blogId}`, {
        headers: {
            userId
        }
    });
    return {data: res.data, status: res.status};
}

export async function updateBlog(blogId, title, content, userId){
    const res = await axios.patch(`http://localhost:8000/blogs/${blogId}`, {title, content, userId});
    return {data: res.data, status: res.status};
}