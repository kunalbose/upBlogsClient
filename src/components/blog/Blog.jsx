import { useNavigate } from 'react-router-dom';
import './blog.scss';
import { formatDate, fromNowTime } from '../../utils/formatDate';
import { Tooltip } from '@mui/material';

const Blog = ({blog}) => {
  const navigate = useNavigate();
  function handleBlogClick(){
    navigate(`/blog/${blog._id}`);
  } 

  return (
    <div className='blog'>
      <h1>{blog?.title}</h1>
      <div className='blogInfo'>
      <Tooltip title={formatDate(blog?.createdAt)}>
        <p className='time'>{fromNowTime(blog?.createdAt)}</p>
      </Tooltip>
      </div>
      <p>
        {blog?.content.slice(0, 25)+`...`}
      </p>
      <button onClick={handleBlogClick}>Read More</button>
    </div>
  )
}

export default Blog