import { Link } from 'react-router-dom'
import './navbar.scss'
import { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../../context/authContext/AuthContext'
import { handleLogout } from '../../context/authContext/apiCalls'

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [ham, setHam] = useState(false);

  function logout(){
    handleLogout(dispatch);
  }

  return (
    <div className='navbar'>
        <div className='container'>
            <Link to="/" className='link'>
              <div className='logo'>KB Blogs</div>
            </Link>
            <div className='links'>
                <Link to="/new-blog" className='link'>
                  <span>Create new Blog</span>
                </Link>
                <span>{user.username}</span>
                <span onClick={logout} style={{color: "red"}}>Logout</span>
            </div>
            <div className='mobile-menu' onClick={()=>setHam(prev=>!prev)}>
              <MenuIcon/>
              <div className={ham ? `mobile-menu-con`: `mobile-menu-con-hidden`}>
                <Link to="/new-blog" className='link'>
                  <span>Create new Blog</span>
                </Link>
                <span>{user.username}</span>
                <span onClick={logout} style={{color: "red"}}>Logout</span>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar