import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import ReactPlayer from 'react-player'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { getWordDetail, updateWord } from '../util/wordService'
import Loading from '../components/Loading'
import { useAuth } from '../AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { createFavoriteWord } from '../util/favoriteWordService'

export default function WordDetail() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const { state: data } = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [wordDetail, setWordDetail] = useState(null)
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  console.log(data)
  const fetchDetail = async () => {
    try {
      setIsLoading(true)
      const response = await getWordDetail(data.wordData._id)
      console.log(response)
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

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const rateAndBack = (event) => {
    event.preventDefault()
    // Rate word
    // Go back
    if (isAuthenticated) {
      // Rate word
      try {
        const rate = wordDetail.rating == 0 ? rating : (wordDetail.rating + rating) / 2
        const response = updateWord(data.wordData._id, { rating: rate })
        console.log(response)
        alert('Rated word successfully')
      } catch (error) {
        alert('Error rating word')
        throw error
      }
    }
    navigate('/word-page/' + data.topic._id, { state: data.topic })
  }
  const addToFavorite = async (event) => {
    event.preventDefault()
    try {
      const response = await createFavoriteWord(data.wordData._id)
      console.log(response)
      alert('Added to favorite')
    } catch (error) {
      alert('Error adding to favorite')
      throw error
    }
  }
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
              <h1 className='text-white'>Word Detail</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/word-detail'>Word Details</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap' style={{ paddingTop: 20 }}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='info-container'>
            <div className='word-detail-inner-left'>
              <h2>
                <span className='login-text'>{wordDetail ? wordDetail.name : ''}</span> in American Sign Language
              </h2>
              <ReactPlayer height='600px' width='100%' url={wordDetail ? wordDetail.videos[0] : ''} controls />
              <p style={{ fontSize: 20, color: 'black', marginTop: 20 }}>
                <span style={{ fontWeight: 'bold' }}>Description:</span> {wordDetail ? wordDetail.description : ''}
              </p>
              <div className='statistic-chart-card' style={{ height: 300, overflowY: 'auto', maxHeight: 300 }}>
                <h4>Example:</h4>
                {/* Change to a list of examples */}
                {wordDetail
                  ? wordDetail.example.map((example, index) => {
                      return (
                        <p key={index} style={{ fontSize: 15, marginTop: 5, marginBottom: 0 }}>
                          {example}
                        </p>
                      )
                    })
                  : null}
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ marginRight: 20, color: 'black', fontSize: 20 }}>Rating: </p>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                      <label key={i}>
                        {ratingValue <= (wordDetail ? wordDetail.rating : 0) ? (
                          <FaStar color='#ffc107' size={20} style={{ marginRight: 5, cursor: 'pointer' }} />
                        ) : ratingValue - 0.5 <= (wordDetail ? wordDetail.rating : 0) ? (
                          <FaStarHalfAlt color='#ffc107' size={20} style={{ marginRight: 5, cursor: 'pointer' }} />
                        ) : (
                          <FaStar color='#e4e5e9' size={20} style={{ marginRight: 5, cursor: 'pointer' }} />
                        )}
                      </label>
                    )
                  })}
                </div>
                <div style={{ marginLeft: 100, color: 'black', fontSize: 20 }}>
                  <p>
                    View:{' '}
                    <span className='login-text' style={{ margin: 0, padding: 0 }}>
                      {wordDetail ? wordDetail.viewers : 0}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='word-detail-inner-right' style={{ paddingTop: 10 }}>
              <h4>
                Topic:{' '}
                <span className='login-text'>{data ? (data.topic.name ? data.topic.name : data.topic) : ''}</span>
              </h4>
              <div
                className='statistic-chart-card'
                style={{
                  height: 300,
                  overflowY: 'auto',
                  maxHeight: 300,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <h5 className='login-text'>Related Words</h5>
                {wordDetail
                  ? wordDetail.relativeWords.map((word, index) => {
                      return (
                        <p key={index} style={{ fontSize: 15, marginTop: 5, marginBottom: 0 }}>
                          {word.name}
                        </p>
                      )
                    })
                  : null}
              </div>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row' }}>
                <p style={{ marginRight: 'auto', color: 'black', fontSize: 20 }}>Rating: </p>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1
                  return (
                    <label key={i}>
                      <input
                        type='radio'
                        name='rating'
                        value={ratingValue}
                        style={{ display: 'none' }}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                        size={20}
                        style={{ marginRight: 5, cursor: 'pointer' }}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                      />
                    </label>
                  )
                })}
              </div>
              {isAuthenticated ? (
                <button onClick={addToFavorite} className='btn btn-danger'>
                  Add to favorite
                </button>
              ) : (
                <button className='btn btn-danger' disabled>
                  Add to favorite
                </button>
              )}
              <button onClick={() => rateAndBack(event)} className='btn btn-outline-primary' style={{ marginTop: 30 }}>
                {isAuthenticated && <span>Rate word and </span>}Go back
              </button>
            </div>
          </div>
        )}
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
