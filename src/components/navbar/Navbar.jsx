import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>UpForce Blogs</div>
            <div className='links'>
                <span>My Blogs</span>
                <span>Create new Blog</span>
                <span>Username</span>
                <img src='' alt='profile-pic'/>
            </div>

        </div>
    </div>
  )
}

export default Navbar