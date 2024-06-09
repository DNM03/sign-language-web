import React, { useState, useEffect, useRef } from 'react'
import userAvatar from '../assets/img/profile-icon.png'
import { motion } from 'framer-motion'
import { useAuth } from '../AuthContext'
import { useNavigate , useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { banUser, unbanUser } from '../util/authService'

function UserInfo() {
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const navigate = useNavigate()
  const {state: user} = useLocation()
  useEffect(() => {
    const handleScroll = () => {
      if (accountRef.current) {
        const rect = accountRef.current.getBoundingClientRect()
        setPosition({ x: rect.left, y: rect.bottom + window.scrollY })
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [openProfile])
  const banUserHandler = async(event) => {
    event.preventDefault()
    try {
      const response = await banUser({userId:user._id})
      console.log(response);
      alert("Ban user successfully")
      navigate('/user-confirm')
    } catch (error) {
      console.log('Error fetching words:', error);
      alert("Ban user failed")
    }
  }
  const unbanUserHandler = async(event) => {
    event.preventDefault()
    try {
      const response = await unbanUser({userId:user._id})
      console.log(response);
      alert("unban user successfully")
      navigate('/user-confirm')
    } catch (error) {
      console.log('Error fetching words:', error);
      alert("unban user failed")
    }
  }
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <section className='banner-area'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 banner-right'>
              <h1 className='text-white'>User Information</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/user-info'>User Information</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap'>
        <div className='info-container'>
          <div className='info-inner-left'>
            <img src={user ? user.avatar==""?userAvatar:user.avatar : userAvatar} alt='avatar of user' className='info-user-image' />
            
          </div>
          <div className='info-inner-right'>
            <div>
              <form>
                <label style={{ fontSize: 30 }} className='login-text'>
                  User Information
                </label>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Full Name</label>
                  <input
                    type='text'
                    placeholder='Enter Full Name'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={user ? user.fullname : ''}
                    readOnly
                  />
                </div>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Email Address</label>
                  <input
                    type='email'
                    placeholder='Enter Email Address'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={user ? user.email : ''}
                    readOnly
                  />
                </div>

                <div className='login-input'>
                  <label style={{ color: 'black' }}>Gender</label>
                  {/* <input type='text' placeholder='Gender' required className='login-enter' style={{ width: '850px' }} /> */}
                  <input
                    type='text'
                    placeholder='Gender'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={user ? user.gender =="1"?"Male":user.gender=="0"?"Female": 'Other':"Other"}
                    readOnly
                  />
                </div>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Account Status</label>
                  <input
                    type='tel'
                    placeholder='Enter Phone Number'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={user? user.verify == 1 ? 'Verified' : 'Not Verified':""}
                    readOnly
                  />
                </div>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Username</label>
                  <input
                    type='tel'
                    placeholder='Username'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={user? user.username:""}
                    readOnly
                  />
                </div>
                {/* <div className='login-input'>
                  <label style={{ color: 'black' }}>Bio</label>
                  <textarea
                    rows={4}
                    cols={10}
                    placeholder='Enter Bio'
                    required
                    className='login-enter'
                    style={{ width: '800px', height: '100px' }}
                  />
                </div> */}
                {user && user.status == 0 &&<button 
                  onClick={banUserHandler}
                  className='btn btn-outline-primary btn-lg'
                  style={{ float: 'right' }}
                >
                  Ban
                </button>}
                {user && user.status == 1 &&<button
                  className='btn btn-outline-primary btn-lg'
                  style={{ float: 'right' }}
                  onClick={unbanUserHandler}
                >
                  Unban
                </button>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default UserInfo
