import React, { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Element from './pages/element'
import Courses from './pages/courses'
import CoursesDetail from './pages/courses-detail'
import Contact from './pages/contact'
import BlogSingle from './pages/blog-single'
import BlogHome from './pages/blog-home'
import About from './pages/about'
import Login from './pages/login'
import SignUp from './pages/signup'
import AccountInformation from './pages/account-information'
import ContributeWordConfirm from './pages/contribute-word-confirm'
import Statistic from './pages/statistic'
import Practice from './pages/practice'
import WordDetail from './pages/word-detail'
import ContributeWord from './pages/contribute-word'
import TopicPage from './pages/topic-page'
import CreateWord from './pages/create-word'
import WordPage from './pages/word-page'
import FavoriteWordPage from './pages/favorite-word'
import MyWordPage from './pages/my-word-page'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import UserProfile from '../src/components/UserProfile'
import VerifyEmail from './pages/verify-email'
import FinishPractice from './pages/finish-practice'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from './AuthContext'
import Detection from './pages/detection'
import ForgetPassword from './pages/forget-password'
import ResetPassword from './pages/reset-password'
import UserConfirm from './pages/user-confirm'
import UserInfo from './pages/user-info'

function App() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  //const [count, setCount] = useState(0)

  // return <home/>;
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)

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
  return (
    <>
      {location.pathname !== '/login' &&
        location.pathname !== '/signup' &&
        location.pathname !== '/verify-email' &&
        location.pathname !== '/finish-practice' && 
        location.pathname !== '/forgot-password' && 
        location.pathname !== '/reset-password' &&(
          <>
            <Header
              openSearch={openSearch}
              setOpenSearch={setOpenSearch}
              accountRef={accountRef}
              toggleProfile={toggleProfile}
            />
            {isAuthenticated && openProfile && (
              <UserProfile
                closeHandler={closeProfile}
                customStyle={{ position: 'absolute', top: position.y, left: position.x }}
              />
            )}
          </>
        )}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account-information' element={<AccountInformation />} />
          <Route path='/contribute-word-confirm' element={<ContributeWordConfirm />} />
          <Route path='/statistic' element={<Statistic />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/word-detail/:id' element={<WordDetail />} />
          <Route path='/contribute-word' element={<ContributeWord />} />
          <Route path='/topic-page' element={<TopicPage />} />
          <Route path='/create-word' element={<CreateWord />} />
          <Route path='/word-page/:id' element={<WordPage />} />
          <Route path='/word-page' element={<WordPage />} />
          <Route path='/favorite-word' element={<FavoriteWordPage />} />
          <Route path='/my-word-page' element={<MyWordPage />} />
          <Route path='/verify-email' element={<VerifyEmail />}>
            <Route path=':email_verify_token' element={<VerifyEmail />} />
          </Route>
          <Route path='/finish-practice' element={<FinishPractice />} />
          <Route path='/detection' element={<Detection />} />
          <Route path='/reset-password' element={<ForgetPassword />} />
          <Route path='/forgot-password' element={<ResetPassword />} >
            <Route path=':reset_password_token' element={<ResetPassword />} />
          </Route>
          <Route path='/user-confirm' element={<UserConfirm />} />
          <Route path='/user-info' element={<UserInfo />} />
        </Routes>
      </AnimatePresence>
      {/* <VerifyEmail /> */}
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Login /> */}
      {/* <SignUp/> */}
      {/* <AccountInformation /> */}
      {/* <ContributeWordConfirm /> */}
      {/* <Statistic /> */}
      {/* <Practice /> */}
      {/* <WordDetail /> */}
      {/* <ContributeWord /> */}
      {/* <TopicPage /> */}
      {/* <CreateWord /> */}
      {/* <WordPage /> */}
      {/* <FavoriteWordPage /> */}
      {/* <MyWordPage /> */}
      {location.pathname !== '/login' &&
        location.pathname !== '/signup' &&
        location.pathname !== '/verify-email' &&
        location.pathname !== '/finish-practice' && 
        location.pathname !== '/forgot-password' && location.pathname !== '/reset-password' &&<Footer />}
    </>
  )
}

export default App
