import React, { useState } from 'react'
import headerimg from '../assets/img/header-img.png'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import mailImg from '../assets/img/mail.png'
import { useSearchParams, useParams} from 'react-router-dom';
import { verifyEmail } from '../util/authService'

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const { email_verify_token } = useParams();
  const emailVerifyToken = searchParams.get('email-verify-token');
  const navigate = useNavigate();
  const verifyHandler = async (event) => {
    event.preventDefault();
    try{
      console.log(emailVerifyToken);
      const response = await verifyEmail({email_verify_token: emailVerifyToken});
      console.log(response);
      navigate('/login');
    }catch(error){
      alert("Error verifying email:", error);
    
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
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }}
      >
        <img src={mailImg} alt='mail receive' />
        <div style={{color: 'black', fontSize: 20,display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <span className='login-text' style={{fontSize: 35}}>Thank you for signing up.</span> 
          Please verify your email by clicking the button below to finish the verification process.
        </div>
        <button onClick={verifyHandler} className='btn btn-primary' style={{padding: 20, marginTop: 10}}>Verify Email</button>
        {/* <div style={{fontSize: 20, marginTop: 10}}>Something go wrong?</div>
        <button className='btn btn-secondary' style={{padding: 20, marginTop: 10, width: 200}}>Resend Email</button> */}
      </div>
    </motion.div>
  )
}

export default VerifyEmail;
