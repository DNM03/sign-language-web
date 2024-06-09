import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { deleteWord, getWordDetail, updateNewWordStatus } from '../util/newWordService'
import { getAllTopics } from '../util/topicService'
import { useNavigate, Link } from 'react-router-dom'
import { getAllUsers } from '../util/authService'

export default function ContributeWord() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const { state: word } = useLocation()
  const { isAdmin } = useAuth()
  const navigate = useNavigate()
  console.log(word)
  console.log(isAdmin)

  const [wordDetail, setWordDetail] = useState(null)
  const [topic, setTopic] = useState(null)
  const [contributor, setContributor] = useState(null)

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getWordDetail(word._id)
        console.log(response)
        const resUser = await getAllUsers({ page: 1, limit: 100 })
        const foundUser = resUser.result.users.find((user) => user._id === response.result.idUser)
        setContributor(foundUser)
        setWordDetail(response.result)
      } catch (error) {
        console.error('Error fetching word detail:', error)
      }
    }
    fetchDetail()

    const fetchTopic = async () => {
      try {
        const response = await getAllTopics({ page: 1, limit: 100 })
        const foundTopic = response.result.topics.find((topic) => topic._id === word.topic)
        console.log(foundTopic)
        setTopic(foundTopic)
      } catch (error) {
        console.error('Error fetching word detail:', error)
      }
    }
    fetchTopic()
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
  const onDelete = async (event) => {
    event.preventDefault()
    if (wordDetail.status != 3) {
      alert('You cannot delete this word')
    } else {
      try {
        const response = await deleteWord(word._id)
        console.log(response)
        alert('Deleted word successfully')
        navigate('/my-word-page')
      } catch (error) {
        console.log('Error deleting word:', error)
        alert('Error deleting word')
      }
    }
  }

  const publishWord = async (event) => {
    event.preventDefault()
    try {
      const response = await updateNewWordStatus(wordDetail._id, { status: 1 })
      console.log(response)
      alert('Published word successfully')
      navigate('/contribute-word-confirm')
    } catch (error) {
      console.log('Error publishing word:', error.response)
      alert('Error publishing word')
    }
  }
  const acceptWord = async (event) => {
    event.preventDefault()
    try {
      const response = await updateNewWordStatus(wordDetail._id, { status: 2 })
      console.log(response)
      alert('Accepted word successfully')
      navigate('/contribute-word-confirm')
    } catch (error) {
      console.log('Error accepting word:', error)
      alert('Error accepting word')
    }
  }
  const rejectWord = async (event) => {
    event.preventDefault()
    try {
      const response = await updateNewWordStatus(wordDetail._id, { status: 3 })
      console.log(response)
      alert('Rejected word successfully')
      navigate('/contribute-word-confirm')
    } catch (error) {
      console.log('Error rejecting word:', error)
      alert('Error rejecting word')
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
              <h1 className='text-white'>Contribute Word</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/contribute-word'>Contribute Word</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap' style={{ paddingTop: 20 }}>
        <div className='info-container'>
          <div className='word-detail-inner-left'>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <h2>
                <span className='login-text'>{word ? word.name : ''}</span>
              </h2>
              <div
                style={{
                  backgroundColor: wordDetail
                    ? wordDetail.status == 0
                      ? '#d4cb1e'
                      : wordDetail.status == 1
                        ? '#1b57c4'
                        : wordDetail.status == 2
                          ? '#19cf65'
                          : '#c44747'
                    : '',
                  color: 'white',
                  padding: 10,
                  marginLeft: 20,
                  borderRadius: 10
                }}
              >
                {wordDetail
                  ? wordDetail.status == 0
                    ? 'Pending'
                    : wordDetail.status == 1
                      ? 'Publishing'
                      : wordDetail.status == 2
                        ? 'Accepted'
                        : 'Rejected'
                  : ''}
              </div>
              {isAdmin == 1 && (
                <div style={{ marginLeft: 30, fontSize: 20, color: 'black' }}>
                  Contributor: <span className='login-text'>{contributor ? contributor.username : ''}</span>
                </div>
              )}
            </div>
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
          </div>
          <div className='word-detail-inner-right' style={{}}>
            <h4>
              Topic: <span className='login-text'>{topic ? topic.name : ''}</span>
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
              {/* Give this a list instead this example */}
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

            {isAdmin == 0 && (
              <button onClick={onDelete} className='btn btn-outline-danger' style={{ marginTop: 30 }}>
                Delete
              </button>
            )}
            {isAdmin == 1 && wordDetail && wordDetail.status == 0 && (
              <button onClick={publishWord} className='custom-button' style={{ marginTop: 30 }}>
                {wordDetail && wordDetail.status != 2 && wordDetail.status != 3 && wordDetail.status == 0 && 'Publish'}
              </button>
            )}
            {isAdmin == 1 && wordDetail && wordDetail.status == 1 && (
              <button onClick={acceptWord} className='custom-button' style={{ marginTop: 30 }}>
                {wordDetail && wordDetail.status != 2 && wordDetail.status != 3 && wordDetail.status == 1 && 'Accept'}
              </button>
            )}
            {isAdmin == 1 && wordDetail && wordDetail.status == 1 && (
              <button onClick={rejectWord} className='btn btn-danger' style={{ marginTop: 30 }}>
                {wordDetail && wordDetail.status != 2 && wordDetail.status != 3 && wordDetail.status == 1 && 'Deny'}
              </button>
            )}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
