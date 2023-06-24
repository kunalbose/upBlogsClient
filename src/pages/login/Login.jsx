import { Link } from 'react-router-dom';
import './login.scss';
import { login } from '../../context/authContext/apiCalls';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { Alert, Snackbar } from '@mui/material';

const Login = () => {

    const {dispatch} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleLogin(e){
        e.preventDefault();
        login({email, password}, dispatch).then((res)=>{
            if(res === 200){
                setSuccess(true);
            }else{
                setError(true);
            }
        }).catch(err=>{
            setError(true);
        });
    }

  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1>Welcome Back</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                    alias totam numquam ipsa exercitationem dignissimos, error nam,
                    consequatur.
                </p>
                <span>Don't have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <button type='submit'>Login</button>
                </form>
                <div className='mobile-register-jump'>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>
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
            <Alert severity="success">Login Success</Alert>
        </Snackbar>
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
            <Alert severity="error">Login Failed.Please try again.</Alert>
        </Snackbar>
    </div>
  )
}

export default Login