import React, { useState, useEffect, useRef } from 'react'
import logoImg from '../assets/img/logo3.png'
import UserProfile from '../components/UserProfile'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useAuth } from '../AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { createFeedBack } from '../util/feedBackService'

export default function Contact() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const firstNameHandler = (event) => {
    setFirstName(event.target.value)
  }
  const lastNameHandler = (event) => {
    setLastName(event.target.value)
  }
  const emailHandler = (event) => {
    setEmail(event.target.value)
  }
  const messageHandler = (event) => {
    setMessage(event.target.value)
  }

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
  const toggleProfile = (event) => {
    event.preventDefault()
    setOpenProfile(!openProfile)
  }
  const closeProfile = () => {
    setOpenProfile(false)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    if (!isAuthenticated) {
      navigate('/login')
    } else {
      console.log(firstName, lastName, email, message)
      try {
        setLoading(true)
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message
        }
        const response = await createFeedBack(data)
        console.log(response)
        alert('Your feedback has been sent successfully!')
      } catch (error) {
        alert('Failed to send feedback!')
      } finally {
        setLoading(false)
      }
    }
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      {/* <!-- ================ Start Header Area ================= --> */}
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
              <h1 className='text-white'>Contact Us</h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
              </p>
              <div className='link-nav'>
                <span className='box'>
                  <Link href='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link href='/contact'>Contact Us</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End banner Area ================= -->

	<!-- ================ Start contact-page Area  ================= --> */}
      <section className='contact-page-area section-gap'>
        <div className='container'>
          <div className='row'>
            <div className='' style={{ width: '100%' }} id='map'></div>
            <div className='col-lg-4 d-flex flex-column address-wrap'>
              <div className='single-contact-address d-flex flex-row'>
                <div className='icon'>
                  <span className='lnr lnr-home'></span>
                </div>
                <div className='contact-details'>
                  <h5>Thu Duc, Ho Chi Minh City</h5>
                  <p>Han Thuyen Street</p>
                </div>
              </div>
              <div className='single-contact-address d-flex flex-row'>
                <div className='icon'>
                  <span className='lnr lnr-phone-handset'></span>
                </div>
                <div className='contact-details'>
                  <h5>00 (958) 9865 562</h5>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className='single-contact-address d-flex flex-row'>
                <div className='icon'>
                  <span className='lnr lnr-envelope'></span>
                </div>
                <div className='contact-details'>
                  <h5>support@colorlib.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <form className='form-area contact-form text-right' onSubmit={submitHandler}>
                <div className='row'>
                  <div className='col-lg-6 form-group'>
                    <input
                      name='firstname'
                      placeholder='Enter your first name'
                      onFocus={(e) => {
                        e.target.placeholder = ''
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = 'Enter your first name'
                      }}
                      className='login-enter mb-20 rounded'
                      required
                      type='text'
                      value={firstName}
                      onChange={firstNameHandler}
                    />
                    <input
                      name='lastname'
                      placeholder='Enter your last name'
                      onFocus={(e) => {
                        e.target.placeholder = ''
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = 'Enter your last name'
                      }}
                      className='login-enter mb-20 rounded'
                      required
                      type='text'
                      value={lastName}
                      onChange={lastNameHandler}
                    />

                    <input
                      name='email'
                      placeholder='Enter email address'
                      pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$'
                      onFocus={(e) => {
                        e.target.placeholder = ''
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = 'Enter email address'
                      }}
                      className='login-enter mb-20 rounded'
                      required
                      type='email'
                      value={email}
                      onChange={emailHandler}
                    />

                    {/* <input
                      name='subject'
                      placeholder='Enter subject'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Enter subject'; }}
                      className='login-enter rounded'
                      required=''
                      type='text'
                      value={message}
                      onChange={messageHandler}
                    /> */}
                  </div>
                  <div className='col-lg-6 form-group'>
                    <textarea
                      className='login-enter rounded'
                      name='message'
                      placeholder='Enter Messege'
                      onFocus={(e) => {
                        e.target.placeholder = ''
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = 'Enter message'
                      }}
                      required
                      value={message}
                      onChange={messageHandler}
                    ></textarea>
                  </div>
                  <div className='col-lg-12'>
                    <div className='alert-msg' style={{ textAlign: 'left' }}></div>
                    <button className='btn rounded' style={{ float: 'right' }} disabled={loading}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End contact-page Area ================= -->

	<!-- ================ start footer Area ================= --> */}
      {/* <Footer /> */}
      {/* <!-- ================ End footer Area ================= --> */}
    </motion.div>
  )
}
