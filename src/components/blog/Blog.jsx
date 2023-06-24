import { useNavigate } from 'react-router-dom';
import './blog.scss';

const Blog = ({blog}) => {
  const navigate = useNavigate();
  function handleBlogClick(){
    navigate(`/blog/${blog._id}`);
  } 

  return (
    <div className='blog' onClick={handleBlogClick}>
      <h1>{blog?.title}</h1>
      <div className='blogInfo'>
        <p className='time'>{blog?.createdAt}</p>
      </div>
      <p>
        {blog?.content.slice(0, 25)+`...`}
      </p>
      <button onClick={handleBlogClick}>Read More</button>
    </div>
  )
}

export default Blog