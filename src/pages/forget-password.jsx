import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineAccountBook } from 'react-icons/ai'
import mailImg from '../assets/img/sendmail.png'
import { forgotPassword } from '../util/authService'

function ForgetPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const sendEmailVerify = async (event) => {
    event.preventDefault()
    try {
      setIsLoading(true)
      const response = await forgotPassword({ email: email })
      console.log(response);
      alert('Email sent successfully');
    } catch (error) {
      console.log('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
    finally {
      setIsLoading(false)
    }
  }
  return (
    <motion.div
      className='login-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div
        className='login-inner'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 50
        }}
      >
        <img src={mailImg} alt='mail receive' style={{width: 300}}/>
        <div className='login-input'>
          <label style={{ color: 'black' }}>Email</label>
          <input
            type='text'
            value={email}
            onChange={onEmailChange}
            placeholder='Enter email'
            required
            className='login-enter'
          />
        </div>
        <button onClick={sendEmailVerify} className='btn btn-primary' style={{ padding: 20, marginTop: 10 }} disabled={isLoading}>
          Verify Email
        </button>
        {/* <div style={{fontSize: 20, marginTop: 10}}>Something go wrong?</div>
        <button className='btn btn-secondary' style={{padding: 20, marginTop: 10, width: 200}}>Resend Email</button> */}
      </div>
    </motion.div>
  )
}

export default ForgetPassword
