import { useContext } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import BlogPage from './pages/Blog/BlogPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NewBlog from './pages/newBlog/NewBlog';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from './context/authContext/AuthContext';
import UpdateBlog from './pages/updateBlog/UpdateBlog';

function App(){
  const {user: currentUser} = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: currentUser?<><Navbar/><Home/></>:<Navigate to={"/login"} replace={true}></Navigate>
    },
    {
      path: "/new-blog",
      element: currentUser?<><Navbar/><NewBlog/></>:<Navigate to={"/login"} replace={true}></Navigate>
    },
    {
      path: "/update-blog/:id",
      element: currentUser?<><Navbar/><UpdateBlog/></>:<Navigate to={"/login"} replace={true}></Navigate>
    },
    {
      path: "/blog/:id",
      element: currentUser?<><Navbar/><BlogPage/></>:<Navigate to={"/login"} replace={true}></Navigate>
    },
    {
      path: "/login",
      element: !currentUser?<Login/>:<Navigate to={"/"} replace={true}></Navigate>,
    },
    {
      path: "/register",
      element: !currentUser?<Register/>:<Navigate to={"/"} replace={true}></Navigate>,
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
