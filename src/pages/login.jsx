import React, { useState, useEffect } from 'react'
import headerimg from '../assets/img/header-img.png'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'
import logoImg from '../assets/img/logo3.png'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { loginToApp } from '../util/authService'
import { useAuth } from '../AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const loginSuccessHandler = (event) => {
    event.preventDefault()
    navigate('/')
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const changeUsername = (e) => {
    setUsername(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const { login } = useAuth()

  const loginHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    const data = {
      username: username,
      password: password
    }
    console.log(data)
    try {
      const response = await loginToApp(data)
      console.log(response)
      const { access_token, refresh_token } = response.result
      login({ accessToken: access_token, refreshToken: refresh_token })
      if (!rememberMe) {
        localStorage.setItem('userData', JSON.stringify({ username, password }))
      }
      loginSuccessHandler(event)
    } catch (error) {
      alert('Error logging in: Invalid username or password')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    const userData = localStorage.getItem('userData')
    if (userData) {
      const { username, password } = JSON.parse(userData)
      // Perform automatic login using stored credentials
      setUsername(username)
      setPassword(password)
    }
  }, [])

  return (
    <motion.div
      className='login-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className='login-inner'>
        <div className='login-left-image'>
          <img src={headerimg} alt='login image' />
        </div>
        <div className='login-form'>
          <label style={{ fontSize: 40, paddingTop: 60 }} className='login-text'>
            ASL Dictionary
          </label>
          <label style={{ fontSize: 40, paddingTop: 20, color: '#000000' }} className='login-text-2'>
            Nice to see you again
          </label>
          <form style={{ marginTop: 10 }} onSubmit={loginHandler}>
            <div className='login-input'>
              <label style={{ color: 'black' }}>Username</label>
              <input
                type='text'
                value={username}
                onChange={changeUsername}
                placeholder='Enter username'
                required
                className='login-enter'
              />
            </div>
            <div style={{ flexDirection: 'column', display: 'flex' }}>
              <label style={{ color: 'black' }}>Password</label>
              <input
                type='password'
                value={password}
                onChange={changePassword}
                placeholder='Enter password'
                required
                className='login-enter'
              />
            </div>
            <div>
              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                <input
                  type='checkbox'
                  id='rememberacc'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8, paddingLeft: 5 }}>
                  <label htmlFor='rememberacc'> Remember me</label>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Link to='/reset-password' style={{}}>
                    Forget password
                  </Link>
                </div>
              </div>
            </div>
            <div className='login-button' style={{ marginTop: 10 }}>
              <button className='genric-btn primary radius w-100' disabled={loading} onClick={loginHandler}>
                Sign in
              </button>
            </div>
            <hr></hr>
          </form>
          {/* <div className='login-button'>
            <button className='genric-btn danger radius w-100'>
              <AiFillGoogleCircle style={{width: '2em', height: '2em'}}/>
              <label style={{marginTop: 10 ,marginLeft: 20}}>Sign in with Google</label>
              </button>
          </div> */}
          <div style={{ marginTop: 'auto', paddingBottom: 20 }}>
            <label>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
