import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { useNavigate } from 'react-router-dom'
import trophy from '../assets/img/trophy.png'

function FinishPractice() {
  const navigate = useNavigate()
  const handleGoBack = (event) => {
    event.preventDefault();
    navigate('/topic-page')
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
        <img src={trophy} alt='mail receive' style={{width: 300}}/>
        <div style={{color: 'black', fontSize: 20,display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <span className='login-text' style={{fontSize: 35}}>Congratulations on completing this topic</span> 
          Let's continue for a more amazing topic.
        </div>
        <button onClick={handleGoBack} className='btn btn-primary' style={{padding: 20, marginTop: 10}}>Go Back To Topic Page</button>
       
      </div>
    </motion.div>
  )
}

export default FinishPractice