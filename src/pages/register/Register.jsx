import { Link } from 'react-router-dom';
import './register.scss';
import { useContext, useState } from 'react';
import { checkEmail, checkUserName, login, register } from '../../context/authContext/apiCalls';
import { Alert, Snackbar } from '@mui/material';
import { AuthContext } from '../../context/authContext/AuthContext';

const Register = () => {

    const { dispatch } = useContext(AuthContext);

    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    function handleUsernameChange(e){
        setUsername(e.target.value);
        checkUserName(e.target.value).then(res=>{
            if(res.status === 200){
                setInvalidUsername(false);
            }else{
                setInvalidUsername(true);
            }
        }).catch(err=>{
            setInvalidUsername(true);
        })
    }

    function ValidateEmail(input) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return input.match(validRegex);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
        const result = ValidateEmail(e.target.value);
        if(result){
            checkEmail(e.target.value).then(res=>{
                if(res.status === 200){
                    setInvalidEmail(false);
                }else{
                    setInvalidEmail(true);
                }
            }).catch(err=>setInvalidEmail(true));
        }else{
            setInvalidEmail(true);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        register({username, email, password}).then(res=>{
            if(res.status === 201){
                setSuccess(true);
                login({email, password}, dispatch);
            }else{
                setError(true);
            }
        }).catch(err=>{
            setError(true);
        })
    }

  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1>Up Blogs</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                    alias totam numquam ipsa exercitationem dignissimos, error nam,
                    consequatur.
                </p>
                <span>Already have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            <div className='right'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username' onChange={handleUsernameChange} value={username}/>
                    {invalidUsername && <span className='warning'>Username already taken.</span>}
                    <input type='email' placeholder='Email' onChange={handleEmailChange} value={email}/>
                    {invalidEmail && <span className='warning'>Invalid Email/Email Already taken.</span>}
                    <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <button type='submit'>Register</button>
                </form>
                <div className='sm-login-button'>
                    <span>Already have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
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
            <Alert severity="success">Register Success</Alert>
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
            <Alert severity="error">Registration Failed.Please try again.</Alert>
        </Snackbar>
    </div>
  )
}

export default Register