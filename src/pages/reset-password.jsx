import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchParams, useParams} from 'react-router-dom';
import { resetPassword } from '../util/authService';
import resetpassword from '../assets/img/resetpassword.png'

function ResetPassword() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate()
  const resetPassToken = searchParams.get('forgot-password-token');

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const newPasswordHandler = (event) => {
    setNewPassword(event.target.value)
  }
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value)
  }
  const resetPasswordHandler = async (event) => {
    event.preventDefault();
    const data = {
      'forgot_password_token': resetPassToken,
      password: newPassword,
      'confirm_password': confirmPassword
    }
    console.log(data);
    try {
      setIsLoading(true)
      const response = await resetPassword(data);
      console.log(response);
      alert('Password reset successfully');
      navigate('/login');
    } catch (error) {
      console.log('Error resetting password:', error);
      alert('Error resetting password');
    }
    finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
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
          <img src={resetpassword} alt='reset password image' style={{width: 200}}/>
          <div className='login-input'>
            <label style={{ color: 'black' }}>New Password</label>
            <input
              type='password'
              placeholder='Enter new password'
              required
              className='login-enter'
              onChange={newPasswordHandler}
            />
          </div>
          <div className='login-input'>
            <label style={{ color: 'black' }}>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm new password'
              required
              className='login-enter'
              onChange={confirmPasswordHandler}
            />
          </div>
          <button onClick={resetPasswordHandler} className='btn btn-primary' style={{ padding: 20, marginTop: 10 }} disabled={isLoading}>
            Reset Password
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ResetPassword