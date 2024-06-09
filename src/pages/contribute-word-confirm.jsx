import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import { motion } from 'framer-motion'
import { getAllNewWords, updateNewWordStatus } from '../util/newWordService'
import { useNavigate, Link } from 'react-router-dom'

export default function ContributeWordConfirm() {
  const [openSearch, setOpenSearch] = useState(false)
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
  const toggleProfile = (event) => {
    event.preventDefault()
    setOpenProfile(!openProfile)
  }
  const closeProfile = () => {
    setOpenProfile(false)
  }
  
  const [untrainedWords, setUntrainedWords] = useState([])
  
  const [trainedWords, setTrainedWords] = useState([])

  const fetchWords = async () => {
    try {
      setIsLoading(true)
      const response = await getAllNewWords({ page: 1, limit: 100 })
      console.log(response.result.newWords)
      setUntrainedWords(response.result.newWords.filter((word) => word.status == 0))
      setTrainedWords(
        response.result.newWords.filter((word) => word.status == 1 || word.status == 2 || word.status == 3)
      )

      console.log('Success fetching words')
    } catch (error) {
      console.log('Error fetching words:', error)
      alert('Error fetching words')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWords()
  }, [])

  const changeStatusToPublish = async (event) => {
    event.preventDefault()
    try {
      const response = await updateNewWordStatus({ id: event.target.id, status: 1 })
      console.log(response)
      alert('Success changing status')
    } catch (error) {
      console.log('Error changing status:', error)
      alert('Error changing status')
    }
  }
  const changeStatusToAccept = async (event) => {
    event.preventDefault()
    try {
      const response = await updateNewWordStatus({ id: event.target.id, status: 2 })
      console.log(response)
      alert('Success changing status')
    } catch (error) {
      console.log('Error changing status:', error)
      alert('Error changing status')
    }
  }
  const changeStatusToReject = async (event) => {
    event.preventDefault()
    try {
      const response = await updateNewWordStatus({ id: event.target.id, status: 3 })
      console.log(response)
      alert('Success changing status')
    } catch (error) {
      console.log('Error changing status:', error)
      alert('Error changing status')
    }
  }

  const onChooseWord = (word) => {
    event.preventDefault()
    console.log(word)
    navigate(`/contribute-word`, { state: word })
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
              <h1 className='text-white'>Confirm Word</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/contribute-word-confirm'>Confirm Word</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap'>
        <div className='info-container'>
          <div className='contribute-inner-left'>
            <h2 className='login-text'>Untrained Words</h2>
            <div>
              {untrainedWords.map((word, index) => (
                <div key={index} className='contribute-item' onClick={() => onChooseWord(word)}>
                  <p style={{ color: 'black', fontSize: 20, marginBottom: 0 }}>{word.name}</p>
                  <div
                    className='contribute-tag'
                    style={{
                      backgroundColor: word.status === 0 ? '#d4cb1e' : word.status === 1 ? '#1b57c4' : '#c44747'
                    }}
                  >
                    {word.status == 0 ? 'Pending' : word.status == 1 ? 'Publishing' : 'Denied'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='contribute-inner-right'>
            <h2 className='login-text'>Trained Words</h2>
            <div>
              {trainedWords.map((word, index) => (
                <div key={index} className='contribute-item' onClick={() => onChooseWord(word)}>
                  <p style={{ color: 'black', fontSize: 20, marginBottom: 0 }}>{word.name}</p>
                  <div
                    className='contribute-tag'
                    style={{
                      backgroundColor: word.status == 1 ? '#1b57c4' : word.status == 2 ? '#19cf65' : '#c44747'
                    }}
                  >
                    {word.status == 1 ? 'Publishing' : word.status == 2 ? 'Accepted' : 'Denied'}
                  </div>
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
