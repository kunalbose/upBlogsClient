import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

function App(){
  const currentUser = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: currentUser?<Home/>:<Navigate to={"/login"} replace={true}></Navigate>
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
