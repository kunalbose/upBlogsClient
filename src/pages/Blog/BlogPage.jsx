import './blogPage.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { deleteBlog } from '../../context/BlogContext/apiCalls';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

const BlogPage = () => {
    const { user } = useContext(AuthContext);
    const idRef = window.location.pathname.split('/')[2];
    const [blogData, setBlogData] = useState(null);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const navigate = useNavigate();
    
    useEffect(()=>{
        async function getBlogDetails(id){
            try{
                const res = await axios.get(`http://localhost:8000/blogs/${id}`);
                setBlogData(res.data);
            }catch(err){
                setError(true);
                setErrorMsg("An Error occured. Please refresh the page.")
            }
        }
        getBlogDetails(idRef);
    }, [idRef])

    function handleDeleteBlog(){
        deleteBlog(blogData._id, user.id).then(res=>{
            if(res.status === 201){
                setSuccess(true);
                setSuccessMsg("Blog Deleted successfully");
                setTimeout(()=>{
                    navigate('/');
                }, 2000);
            }else{
                setError(true);
                setErrorMsg("Error while deleting blog. Please retry");
            }
        }).catch(err=>{
            setError(true);
            setErrorMsg("Error while deleting blog. Please retry");
        })
    }

    function handleEditContent(){
        navigate(`/update-blog/${idRef}`);
    }

  return (
    <div className='blogpage'>
        {!blogData ? <CircularProgress className='spinner'/>: 
            <div className='container'>
                <div className='header'>
                    <div className='userInfo'>
                        <p className='time'>{formatDate(blogData.createdAt)}</p>
                    </div>
                    <div className='icons'>
                        {user.id === blogData.author ?
                        <>
                            <DeleteIcon className='deleteIcon' onClick={handleDeleteBlog}/>
                            <EditIcon className='icon' onClick={handleEditContent}/>
                        </>: <></>    
                        }
                    </div>
                </div>
                <div className='body'>
                    <h1>{blogData.title}</h1>
                    <p>
                        {blogData.content}
                    </p>
                </div>
            </div>
        }
        
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
            <Alert severity="error">{errorMsg}</Alert>
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
            <Alert severity="success">{successMsg}</Alert>
        </Snackbar>
    </div>
  )
}

export default BlogPage