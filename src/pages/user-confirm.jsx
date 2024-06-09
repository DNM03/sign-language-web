import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { getAllUsers } from '../util/authService'
import { Link } from 'react-router-dom'

function UserConfirm() {
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
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
  const [user, setUser] = useState([])
  const [bannedUser, setBannedUser] = useState([])

  const fetchUser = async () => {
    try {
      const response = await getAllUsers({ page: 1, limit: 100 })
      console.log(response)
      setUser(response.result.users.filter((user) => user.status == 0 && user.role != 1))
      setBannedUser(response.result.users.filter((user) => user.status == 1 && user.role != 1))
    } catch (error) {
      console.log('Error fetching words:', error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const chooseUserHandler = (event,user) => {
    event.preventDefault()
    navigate(`/user-info`, { state: user })
  }

  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {/* <Header
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        accountRef={accountRef}
        toggleProfile={toggleProfile}
      />
      {openProfile && (
        <UserProfile
          closeHandler={closeProfile}
          customStyle={{ position: 'absolute', top: position.y, left: position.x }}
        />
      )} */}
      <section className='banner-area'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 banner-right'>
              <h1 className='text-white'>Manage User</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/user-confirm'>Manage User</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap'>
        <div className='info-container'>
          <div className='contribute-inner-left'>
            <h2 className='login-text'>User</h2>
            <div>
              {user.map((user, index) => (
                <div key={index} className='contribute-item' onClick={() => chooseUserHandler(event, user)}>
                  <p style={{ color: 'black', fontSize: 20, marginBottom: 0 }}>{user.username}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='contribute-inner-right'>
            <h2 className='login-text'>Banned User</h2>
            <div>
              {bannedUser.map((user, index) => (
                <div key={index} className='contribute-item' onClick={() => chooseUserHandler(event, user)}>
                  <p style={{ color: 'black', fontSize: 20, marginBottom: 0 }}>{user.username}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}

export default UserConfirm
