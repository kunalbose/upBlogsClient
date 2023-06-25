import { useEffect, useState } from 'react';
import axios from "axios";
import Blog from '../../components/blog/Blog';
import './home.scss';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import { BASE_URL } from '../../utils/helper';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(()=>{
    async function getBlogs(){
      try{
        const blogs = await axios.get(`${BASE_URL}/blogs`);
        setBlogs(blogs.data);
      }catch(err){
        setError(true);
      }
    }
    getBlogs();
  }, [])

  return (
    <div className='home'>
        <div className='blogs'>
            {blogs.length === 0 ? <CircularProgress className='spinner'/> : blogs.map(blog=>{
              return <Blog blog={blog} key={blog._id}/>
            })}
        </div>
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
            <Alert severity="error">An Error occured. Please refresh the page.</Alert>
        </Snackbar>
    </div>
  )
}

export default Home