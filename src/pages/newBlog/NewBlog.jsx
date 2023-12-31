import { useContext, useState } from 'react';
import './newBlog.scss';
import { validate } from '../../utils/newBlogValidation';
import { Alert, Snackbar } from '@mui/material';
import { AuthContext } from '../../context/authContext/AuthContext';
import { createNewBlog } from '../../context/BlogContext/apiCalls';

const NewBlog = () => {

  const {user} = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


  function handleCreateBlog(e){
    e.preventDefault();
    if(
      !validate({value: title, isRequired: true, minLength: 10, maxLength: 100}) ||
      !validate({value: content, isRequired: true, minLength: 50, maxLength: 5000})
      ){
        setError(true);
        setErrMsg("");
        return;
      }
      createNewBlog(title, content, user.id).then(res=>{
        if(res.status === 201){
          setSuccess(true);
          setTitle("");
          setContent("");
        }else{
          setError(true);
          setErrMsg("Could not save blog.Please retry")
        }
      }).catch(err=>{
        setError(true);
        setErrMsg("Could not save blog.Please retry")
      })

  }
  

  return (
    <div className='newBlog'>
        <form onSubmit={handleCreateBlog}>
            <label htmlFor="title">Blog Title</label>
            <input type='text' placeholder='blog title...' id='title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <label htmlFor="content">Blog Content</label>
            <textarea type='text' placeholder='blog content...' id='content' onChange={(e)=>setContent(e.target.value)} value={content}/>
            <button type='submit'>Create New Blog</button>
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
            <Alert severity="success">Blog has been created.</Alert>
        </Snackbar>
    </div>
  )
}

export default NewBlog