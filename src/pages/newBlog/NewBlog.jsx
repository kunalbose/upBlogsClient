import './newBlog.scss';

const NewBlog = () => {
  return (
    <div className='newBlog'>
        <form>
            <label for="title">Blog Title</label>
            <input type='text' placeholder='blog title...' id='title'/>
            <label for="content">Blog Content</label>
            <textarea type='text' placeholder='blog content...' id='content'/>
            <button type='submit'>Create New Blog</button>
        </form>
    </div>
  )
}

export default NewBlog