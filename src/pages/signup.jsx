import React, {useState} from 'react'
import headerimg from '../assets/img/header-img.png'
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../util/authService';

export default function SignUp() {
  const navigate = useNavigate()
  const registerSuccessHandler = (event) => {
    event.preventDefault()
    navigate('/login')
  }
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const changeUsername = (e) => {
    setUsername(e.target.value);
  }
  const changeEmail = (e) => {
    setEmail(e.target.value);
  }
  const changePassword = (e) => {
    setPassword(e.target.value);
  }
  const changeRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  }

  const registerHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      username: username,
      email: email,
      password: password,
      confirm_password: repeatPassword
    }
    try{
      const response = await register(data);
      console.log(response);
      alert('User registered successfully');
      registerSuccessHandler(event);
    }catch(error){
      if(error.response){
        if(error.response.data.errors.email){
          alert('Email already exists');
        }
        else if(error.response.data.errors.password){
          alert(error.response.data.errors.password.msg);
        }
        else if(error.response.data.errors.confirm_password){
          alert(error.response.data.errors.confirm_password.msg);
        }
        else{
          alert('Username already exists');
        }
        console.log('Error registering user: ' + error.response.data.errors);
      }
    }finally{
      setLoading(false);
    }
  }

  return (
    <motion.div className='login-container'
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: {duration: 0.1} }}
    >
      <div className='login-inner'>
        <div className='login-left-image'>
          <img src={headerimg} alt='login image' />
        </div>
        <div className='login-form'>
          {/* <label style={{ fontSize: 40, paddingTop: 60}} className='login-text'>ASL Dictionary</label> */}
          <label style={{ fontSize: 40, paddingTop: 50, color: '#000000'}}  className='login-text'>Create new account</label>
          <form style={{ marginTop: 10}} onSubmit={registerHandler}>
            <div className='login-input' >
              <label style={{ color: 'black' }}>Username</label>
              <input type='text' onChange={changeUsername} value={username} placeholder='Enter username' required className='login-enter' />
            </div>
            <div className='login-input' >
              <label style={{ color: 'black' }}>Email Address</label>
              <input type='email' onChange={changeEmail} value={email} placeholder='Enter email address' required className='login-enter' />
            </div>
            <div style={{ flexDirection: 'column', display: 'flex', marginBottom: 20 }}>
              <label style={{ color: 'black' }}>Password</label>
              <input type='password' onChange={changePassword} value={password} placeholder='Enter password' required className='login-enter' />
            </div>
            <div style={{ flexDirection: 'column', display: 'flex', marginBottom: 20  }}>
              <label style={{ color: 'black' }}>Repeat Password</label>
              <input type='password' onChange={changeRepeatPassword} value={repeatPassword} placeholder='Re-Enter password' required className='login-enter' />
            </div>
            <div className='login-button' style={{ marginTop: 30 }}>
              <button disabled={loading} className='genric-btn primary radius w-100'>Sign up</button>
            </div>
            <hr></hr>
          </form>
          {/* <div className='login-button'>
            <button className='genric-btn danger radius w-100'>
              <AiFillGoogleCircle style={{width: '2em', height: '2em'}}/>
              <label style={{marginTop: 10 ,marginLeft: 20}}>Sign in with Google</label>
              </button>
          </div> */}
          <div style={{marginTop: 'auto', paddingBottom:20}}>
            <label>Already have an account? <Link to='/login'>Login</Link></label>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
