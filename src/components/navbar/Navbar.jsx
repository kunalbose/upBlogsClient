import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <Link to="/" className='link'>
              <div className='logo'>UpForce Blogs</div>
            </Link>
            <div className='links'>
                <span>My Blogs</span>
                <Link to="/new-blog" className='link'>
                  <span>Create new Blog</span>
                </Link>
                <span>Username</span>
                <img src='' alt='profile-pic'/>
            </div>

        </div>
    </div>
  )
}

export default Navbar