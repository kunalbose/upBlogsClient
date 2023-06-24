import { useContext, useEffect, useState } from 'react';
import './updateBlog.scss';
import { validate } from '../../utils/newBlogValidation';
import { Alert, Snackbar } from '@mui/material';
import { AuthContext } from '../../context/authContext/AuthContext';
import { updateBlog } from '../../context/BlogContext/apiCalls';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateBlog = () => {

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  const idRef = window.location.pathname.split('/')[2];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    async function getBlogData(id){
        try{
            const res = await axios.get(`http://localhost:8000/blogs/${id}`);
            setTitle(res.data.title);
            setContent(res.data.content);
        }catch(err){
            setError(true);
            setErrMsg("An Error occured. Please refresh the page.");
        }
    }
    getBlogData(idRef);
  }, [idRef])


  function handleUpdateBlog(e){
    e.preventDefault();
    if(
      !validate({value: title, isRequired: true, minLength: 10, maxLength: 100}) ||
      !validate({value: content, isRequired: true, minLength: 50, maxLength: 5000})
    ){
        setError(true);
        setErrMsg("");
        return;
    }
    updateBlog(idRef, title, content, user.id).then(res=>{
        if(res.status === 201){
            setSuccess(true);
            setTimeout(()=>{
                navigate(`/blog/${idRef}`);
            }, 2000)
        }else{
            setError(true);
            setErrMsg("Could not Update Blog. Please try again");
        }
    }).catch(err=>{
        setError(true);
        setErrMsg("Could not Update Blog. Please try again");
    })
  }
  

  return (
    <div className='updateBlog'>
        <h1>Update Blog</h1>
        <form onSubmit={handleUpdateBlog}>
            <label htmlFor="title">Blog Title</label>
            <input type='text' placeholder='blog title...' id='title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <label htmlFor="content">Blog Content</label>
            <textarea type='text' placeholder='blog content...' id='content' onChange={(e)=>setContent(e.target.value)} value={content}/>
            <button type='submit'>Update Blog</button>
        </form>
        <Snackbar
            open={error}
            autoHideDuration={2000}
            onClose={()=>{
                setTimeout(()=>{
                  setError(false);
                }, 2000)
            }}
            anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
            <Alert severity="error">{errMsg ? errMsg :`Required Length for title - 10 to 100 char, for content - 50 to 1000 char`}</Alert>
        </Snackbar>
        <Snackbar
            open={success}
            autoHideDuration={2000}
            onClose={()=>{
                setTimeout(()=>{
                  setSuccess(false);
                }, 2000)
            }}
            anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
            <Alert severity="success">Blog has been Updated.</Alert>
        </Snackbar>
    </div>
  )
}

export default UpdateBlog;