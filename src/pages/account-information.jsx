import React, { useState, useEffect, useRef } from 'react'
import logoImg from '../assets/img/logo3.png'
import UserProfile from '../components/UserProfile'
import userAvatar from '../assets/img/profile-icon.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useAuth } from '../AuthContext'
import { changePassword, resendVerificationEmail, updateMyProfile, userLogout } from '../util/authService'
import Dropdown from '../components/Dropdown'
import DropdownItem from '../components/DropdownItem'
import { useNavigate, Link } from 'react-router-dom'
import { uploadImage } from '../util/imageService'

export default function AccountInformation() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const { UserProfile, setUserProfile, logout } = useAuth()
  const navigate = useNavigate()

  const [genderValue, setGenderValue] = useState(['Male', 'Female', 'Other'])

  const [fullName, setFullName] = useState(UserProfile ? UserProfile.fullName : '')
  const [email, setEmail] = useState(UserProfile ? UserProfile.email : '')
  const [accountStatus, setAccountStatus] = useState(UserProfile ? UserProfile.verify : '')
  const [gender, setGender] = useState(
    UserProfile ? (UserProfile.gender === '1' ? 'Male' : UserProfile.gender === '0' ? 'Female' : 'Other') : ''
  )
  const [userName, setUserName] = useState(UserProfile ? UserProfile.username : '')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [avatar, setAvatar] = useState(UserProfile ? UserProfile.avatar : '')
  const [oldPassword, setOldPassword] = useState('')
  const fileInputRef = useRef(null)
  const [avatarFile, setAvatarFile] = useState(null)

  const handleChooseImage = (event) => {
    event.preventDefault()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
      setAvatarFile(file);
    }
  }

  const onfullNameChange = (event) => {
    setFullName(event.target.value)
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const selectGenderHandler = (value) => {
    setGender(value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const onRepasswordChange = (event) => {
    setRepassword(event.target.value)
  }
  const onOldPasswordChange = (event) => {
    setOldPassword(event.target.value)
  }

  const changeInformation = async (event) => {
    event.preventDefault()

    
    try {
      const response1 = await uploadImage(avatarFile)
      console.log(response1);
      const data = {
        fullName: fullName,
        gender: gender == 'Male' ? '1' : gender == 'Female' ? '0' : '2',
        avatar: response1
      }
      const response = await updateMyProfile(data)
      console.log(response)
      setUserProfile(response.result)
      alert('Update information successfully')
    } catch (error) {
      console.error('Error updating information:', error.response)
      alert('Error updating information')
    }
  }

  const updatePassword = async (event) => {
    event.preventDefault()
    const data = {
      old_password: oldPassword,
      new_password: password,
      confirm_password: repassword
    }
    try {
      const response = await changePassword(data)
      console.log(response)
      alert('Change password successfully')
    } catch (error) {
      console.error('Error changing password:', error.response)
      alert('Error changing password')
    }
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

  const verifyAccount = async (event) => {
    event.preventDefault()
    try {
      const response = await resendVerificationEmail()
      console.log(response)
      alert('Send verify email successfully')
      await logout()
      navigate('/')
    } catch (error) {
      console.error('Error verifying account:', error.response)
      alert('Error verifying account')
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
              <h1 className='text-white'>Account Information</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link href='/account-information'>Account Information</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap'>
        <div className='info-container'>
          <div className='info-inner-left'>
            <img src={avatar == '' ? userAvatar : avatar} alt='avatar of user' className='info-user-image' />
            <button onClick={handleChooseImage} className='btn btn-outline-primary btn-lg' style={{ marginTop: 30 }}>
              Select Image
            </button>
            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
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
                    value={fullName}
                    onChange={onfullNameChange}
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
                    value={email}
                    onChange={onEmailChange}
                    readOnly
                  />
                </div>

                <div className='login-input'>
                  <label style={{ color: 'black' }}>Gender</label>
                  {/* <input type='text' placeholder='Gender' required className='login-enter' style={{ width: '850px' }} /> */}
                  <div style={{}}>
                    <Dropdown
                      buttonText={gender}
                      content={
                        <>
                          {genderValue.map((ge, index) => (
                            <DropdownItem
                              key={index}
                              onClick={() => {
                                selectGenderHandler(ge)
                              }}
                            >
                              {`${ge}`}
                            </DropdownItem>
                          ))}
                        </>
                      }
                    />
                  </div>
                </div>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Account Status</label>
                  <input
                    type='tel'
                    placeholder='Enter Phone Number'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={accountStatus == 1 ? 'Verified' : 'Not Verified'}
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
                <button
                  onClick={changeInformation}
                  className='btn btn-outline-primary btn-lg'
                  style={{ float: 'right' }}
                >
                  Save
                </button>
              </form>
            </div>
            <div>
              <form>
                <label className='login-text' style={{ fontSize: 30, marginTop: 30 }}>
                  User Account
                </label>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Username</label>
                  <input
                    type='text'
                    placeholder='Enter Full Name'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={userName}
                    readOnly
                  />
                </div>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Old Password</label>
                  <input
                    type='password'
                    placeholder='Enter Old Password'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={oldPassword}
                    onChange={onOldPasswordChange}
                  />
                </div>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>New Password</label>
                  <input
                    type='password'
                    placeholder='Enter New Password'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={password}
                    onChange={onPasswordChange}
                  />
                </div>
                <div className='login-input'>
                  <label style={{ color: 'black' }}>Repeat-Password</label>
                  <input
                    type='password'
                    placeholder='Re-enter New Password'
                    required
                    className='login-enter'
                    style={{ width: '800px' }}
                    value={repassword}
                    onChange={onRepasswordChange}
                  />
                </div>
                <div>
                  <button onClick={verifyAccount} className='btn btn-outline-success btn-lg'>
                    Verify Account
                  </button>
                  <button
                    onClick={updatePassword}
                    className='btn btn-outline-primary btn-lg'
                    style={{ float: 'right' }}
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
