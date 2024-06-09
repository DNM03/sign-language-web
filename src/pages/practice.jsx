import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import ReactCardFlip from 'react-card-flip'
import ReactPlayer from 'react-player'
import CircleProgressBar from '../components/CircleProgressBar'
import { motion } from 'framer-motion'
import Loading from '../components/Loading'
import { useAuth } from '../AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { createLearnedWord, getLearnedWords, updateProcess } from '../util/learnedWordService'
import { getWordDetail } from '../util/wordService'

export default function Practice() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)

  const { state: data } = useLocation()
  console.log(data)
  const [learnedWords, setLearnedWords] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { UserProfile } = useAuth()

  const navigate = useNavigate()

  const fetchLearnedWords = async () => {
    try {
      setIsLoading(true)
      const response = await getLearnedWords({ page: 1, limit: 100 })
      console.log('result' + response)
      const exsitingWord = response.result.learned_words.find((word) => word.idWord === currentWord._id)
      if (exsitingWord) {
        setCurrentPercentage(exsitingWord.process)
      }
      console.log(response)
      setLearnedWords(response.result.learned_words)
    } catch (error) {
      console.error('Error fetching learned words:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchLearnedWords()
  }, [])

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

  const [isFlipped, setIsFlipped] = useState(false)
  const flip = () => {
    setIsFlipped(!isFlipped)
  }

  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(data.wordData[currentWordIndex])
  const [currentPercentage, setCurrentPercentage] = useState(0)

  const nextHanlder = async (event) => {
    event.preventDefault()
    try {
      setIsLoading(true)
      const exsitingWord = learnedWords.find((word) => word.idWord === currentWord._id)
      if (exsitingWord) {
        console.log('exist')

        const response = await updateProcess(exsitingWord._id, { process: 25 })
        console.log(response)
      } else {
        console.log('not exist')

        const response = await createLearnedWord({ idUser: UserProfile._id, idWord: currentWord._id })
        console.log(response)
      }
      if (currentWordIndex < data.wordData.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1)
        setCurrentWord(data.wordData[currentWordIndex + 1])
      } else {
        navigate('/finish-practice')
      }
    } catch (error) {
      console.log('Error:', error.response.data.errors.process.msg)
      if (error.response.data.errors.process.msg == 'This word is finished learning') {
        if (currentWordIndex < data.wordData.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1)
          setCurrentWord(data.wordData[currentWordIndex + 1])
        } else {
          navigate('/finish-practice')
        }
      }
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  const [wordDetail, setWordDetail] = useState(null)

  const fetchDetail = async () => {
    try {
      setIsLoading(true)
      const response = await getWordDetail(currentWord._id)
      console.log(response.result)
      setWordDetail(response.result)
    } catch (error) {
      console.error('Error fetching word detail:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDetail()
  }, [])

  useEffect(() => {
    fetchDetail()
    const exsitingWord = learnedWords.find((word) => word.idWord === currentWord._id)
    console.log('exist word' + exsitingWord)
    if (exsitingWord) {
      setCurrentPercentage(exsitingWord.process)
    } else {
      setCurrentPercentage(0)
    }
  }, [currentWord])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
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
              <h1 className='text-white'>Practice</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/pratice'>Practice</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap'>
        <div className='info-container'>
          <div className='practice-inner-left'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
              <div className='practice-card-front'>
                <ReactPlayer height='540px' width='900px' url={wordDetail ? wordDetail.videos[0] : ''} controls />
              </div>
              <div
                onClick={flip}
                className='practice-card-back'
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
              >
                <h1 style={{ color: 'white', marginBottom: 20, fontSize: 80 }}>{wordDetail ? wordDetail.name : ''}</h1>
                <h3 style={{ color: 'white', marginBottom: 20, fontSize: 30 }}>
                  Topic: {data ? (data.topic ? data.topic.name : currentWord.topic) : ''}
                </h3>
                <p style={{ color: 'white', fontSize: 20 }}>Example: {wordDetail ? wordDetail.example[0] : ''}</p>
              </div>
            </ReactCardFlip>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className='btn btn-dark' onClick={flip} style={{ width: 200 }}>
                  Flip card
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={nextHanlder} className='btn btn-primary' style={{ width: 200 }}>
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className='practice-inner-right'>
            <div>
              <CircleProgressBar percentage={currentPercentage} circleWidth='200' />
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
