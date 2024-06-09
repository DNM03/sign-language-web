import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import ReactPlayer from 'react-player'
import '../css/create-word.css'
import Dropdown from '../components/Dropdown'
import DropdownItem from '../components/DropdownItem'
import { motion } from 'framer-motion'
import { getAllTopics, getWordsByTopic } from '../util/topicService'
import { uploadVideo } from '../util/videoService'
import { createWord } from '../util/newWordService'
import { Link } from 'react-router-dom'

export default function CreateWord() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const [videoUrl, setVideoUrl] = useState('')
  const [videoFile, setVideoFile] = useState(null)
  const fileInputRef = useRef(null)
  const handleButtonVidClick = (event) => {
    event.preventDefault()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handleVideoUrlChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVideoFile(file)
      setVideoUrl(url)
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

  const [exampleList, setExampleList] = useState([])
  const [relatedWordList, setRelatedWordList] = useState([])

  const [topic, setTopic] = useState([])
  const [selectedTopic, setSelectedTopic] = useState({ name: 'Topic' })
  const [fullWord, setFullWord] = useState([])
  const [selectedWord, setSelectedWord] = useState({ name: 'Word' })
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const fetchTopics = async () => {
    try {
      setIsLoading(true)
      const response = await getAllTopics({ page: 1, limit: 100 })
      console.log(response.result.topics)
      setTopic(response.result.topics)
    } catch (error) {
      console.error('Error fetching topics:', error)
    } finally {
      setIsLoading(false)
    }
  }
  const fetchFullWord = async () => {
    try {
      setIsLoading(true)
      const response = await getWordsByTopic({ idTopic: selectedTopic._id, page: 1, limit: 100 })
      // console.log(response.result.words)
      setFullWord(response.result.words)
    } catch (error) {
      console.error('Error fetching full words:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchFullWord()
    fetchTopics()
  }, [])
  useEffect(() => {
    fetchFullWord()
  }, [selectedTopic])

  const selectTopicHandler = (value) => {
    setSelectedTopic(value)
  }
  const selectWordHandler = (value) => {
    setSelectedWord(value)
  }
  const createWordHandler = async (event) => {
    event.preventDefault()
    // Create word
    try {
      setIsLoading(true)
      const videoRes = await uploadVideo(videoFile)
      const data = {
        name: name,
        description: description,
        example: exampleList.map((example) => example.example),
        videos: [videoRes.result.url],
        relativeWords: relatedWordList,
        topic: selectedTopic._id
      }
      console.log(data)
      const response = await createWord(data)

      console.log(response)
      alert('Success creating word')
    } catch (error) {
      console.error('Error creating word' + error.reponse)
      alert('Error creating word')
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const [example, setExample] = useState('')
  const exampleChangeHandler = (event) => {
    setExample(event.target.value)
  }

  const addExampleHandler = (event) => {
    event.preventDefault()
    setExampleList([...exampleList, { example: example }])
  }
  const addRelatedWordHandler = (event) => {
    event.preventDefault()
    setRelatedWordList([...relatedWordList, selectedWord])
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
              <h1 className='text-white'>Create Your Word</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/create-word'>Create Word</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap' style={{ paddingTop: 20 }}>
        <form className='info-container'>
          <div className='word-detail-inner-left'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {/* <button style={{}} className='add-video-button record-video' onClick={() => alert('record')}>
                Record
              </button> */}
              <button
                onClick={handleButtonVidClick}
                style={{ marginLeft: 20, marginBottom: 30 }}
                className='add-video-button upload-video'
              >
                Upload
              </button>
            </div>
            <input
              ref={fileInputRef}
              type='file'
              accept='video/*'
              style={{ display: 'none' }}
              onChange={handleVideoUrlChange}
            />
            {videoUrl && <ReactPlayer height='600px' width='100%' url={videoUrl} controls />}
            <div>
              <div>
                <label style={{ fontSize: 20, color: 'black', marginTop: 20, fontWeight: 'bold' }}>Name:</label>
                <div style={{ width: '100%', display: 'flex' }}>
                  <input
                    placeholder='Type in name'
                    className='login-enter'
                    style={{ width: '100%' }}
                    value={name}
                    onChange={onNameChange}
                  />
                </div>
              </div>
              <label style={{ fontSize: 20, color: 'black', marginTop: 20 }} htmlFor='des-text'>
                <span style={{ fontWeight: 'bold' }}>Description:</span>
              </label>
              <textarea
                value={description}
                onChange={onDescriptionChange}
                id='des-text'
                name='des-text'
                rows='4'
                cols='30'
                placeholder='Type in description'
                className='login-enter'
                style={{ width: '100%', height: 100 }}
              />
            </div>
            <div>
              <label style={{ fontSize: 20, color: 'black', marginTop: 20, fontWeight: 'bold' }}>Example:</label>
              <div style={{ width: '100%', display: 'flex' }}>
                <input
                  value={example}
                  onChange={exampleChangeHandler}
                  placeholder='Type in example'
                  className='login-enter'
                  style={{ width: '100%' }}
                />
                <button
                  onClick={addExampleHandler}
                  className='add-video-button record-video'
                  style={{ width: 100, marginLeft: 20 }}
                >
                  Add
                </button>
              </div>
            </div>
            <label style={{ fontSize: 20, color: 'black', marginTop: 20, fontWeight: 'bold' }}>List Example:</label>
            <div
              className='statistic-chart-card'
              style={{
                height: 200,
                overflowY: 'auto',
                maxHeight: 200,
                marginTop: 0,
                backgroundColor: 'white',
                scrollbarWidth: 'none'
              }}
            >
              {exampleList.map((example, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    backgroundColor: '#7f32fd',
                    padding: 10,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    color: 'white'
                  }}
                >
                  {index + 1}. {example.example}
                </p>
              ))}
              {/* Change to a list of examples */}
              {/* <p style={{ fontSize: 15, marginTop: 10 }}>1. He read a book.</p> */}
            </div>
            <div>
              <label style={{ fontSize: 20, color: 'black', marginTop: 20, fontWeight: 'bold' }}>Related Word:</label>
              <div style={{ width: '100%', display: 'flex' }}>
                {/* <input placeholder='Type in related word' className='login-enter' style={{ width: '100%' }} /> */}
                <div style={{ width: '100%' }}>
                  <Dropdown
                    buttonText={selectedWord.name}
                    content={
                      <>
                        {fullWord.map((word, index) => (
                          <DropdownItem
                            key={index}
                            onClick={() => {
                              selectWordHandler(word)
                            }}
                          >
                            {`${word.name}`}
                          </DropdownItem>
                        ))}
                      </>
                    }
                  />
                </div>
                <button
                  onClick={addRelatedWordHandler}
                  className='add-video-button upload-video'
                  style={{ width: 100, marginLeft: 20 }}
                >
                  Add
                </button>
              </div>
            </div>
            <label style={{ fontSize: 20, color: 'black', marginTop: 20, fontWeight: 'bold' }}>
              List Related Word:
            </label>
            <div
              className='statistic-chart-card'
              style={{
                height: 160,
                overflowY: 'auto',
                maxHeight: 160,
                marginTop: 0,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                overflowX: 'auto',
                scrollbarWidth: 'none'
              }}
            >
              {relatedWordList.map((related, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    backgroundColor: '#a02fc3',
                    padding: 10,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    color: 'white',
                    height: 45
                  }}
                >
                  {index + 1}. {related.name}
                </p>
              ))}
              {/* Change to a list of examples */}
              {/* <p style={{ fontSize: 15, marginTop: 10 }}>1. He read a book.</p> */}
            </div>
          </div>
          <div className='word-detail-inner-right' style={{}}>
            <h4 className='login-text' style={{ marginBottom: 10 }}>
              Topic:
            </h4>

            {/* <div>
              <input type='text' placeholder='Enter topic name' className='login-enter' style={{marginTop: 30, width: '100%', marginBottom: 30}}/>
            </div> */}
            <div>
              <Dropdown
                buttonText={selectedTopic.name}
                content={
                  <>
                    {topic.map((topic, index) => (
                      <DropdownItem
                        key={index}
                        onClick={() => {
                          selectTopicHandler(topic)
                        }}
                      >
                        {`${topic.name}`}
                      </DropdownItem>
                    ))}
                  </>
                }
              />
            </div>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row' }}></div>
            <button
              onClick={createWordHandler}
              className='btn btn-outline-primary'
              style={{ marginTop: 30 }}
              disabled={isLoading}
            >
              Create Word
            </button>
          </div>
        </form>
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
