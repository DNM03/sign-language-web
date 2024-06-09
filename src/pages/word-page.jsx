import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import ItemGrid from '../components/ItemGrid'
import Pagination from '../components/Pagination'
import TopicCard from '../components/TopicCard'
import SearchBar from '../components/SearchBar'
import Dropdown from '../components/Dropdown'
import DropdownItem from '../components/DropdownItem'
import WordCard from '../components/WordCard'
import { motion } from 'framer-motion'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { getAllTopics, getWordsByTopic } from '../util/topicService'
import { useAuth } from '../AuthContext'
import { searchWord } from '../util/wordService'

export default function WordPage() {
  const navigate = useNavigate()
  const practiceHandler = (event) => {
    event.preventDefault()
    if (selectedTopic.name === 'Topic') {
      alert('Please choose a topic to practice')
      return
    }
    const data = { wordData: fullWord, topic: selectedTopic }
    navigate('/practice', { state: data })
  }
  const { state: item } = useLocation()
  // console.log(item);
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const [sort, setSort] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

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

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [words, setWords] = useState([])
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSort = (sortChosen) => {
    switch (sortChosen) {
      case 'All': {
        setSort(1)
        fetchWords(currentPage)
        break
      }
      case 'NameAZ': {
        setSort(2)
        setWords([...words].sort((a, b) => a.name.localeCompare(b.name)))
        break
      }
      case 'NameZA': {
        setSort(3)
        setWords([...words].sort((a, b) => b.name.localeCompare(a.name)))
        break
      }
    }
  }

  const [topic, setTopic] = useState([])
  const [selectedTopic, setSelectedTopic] = useState(item ? item : { name: 'Topic' })
  const [fullWord, setFullWord] = useState([])
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

  const fetchWords = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getWordsByTopic({ idTopic: selectedTopic._id, page: currentPage, limit: 12 })
      console.log(response.result.words)
      setWords(response.result.words)
      setTotalPages(response.result.total_pages)
    } catch (error) {
      console.error('Error fetching words:', error)
      // alert('Error fetching words')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTopics()
    fetchFullWord()
  }, [])

  useEffect(() => {
    setCurrentPage(1)
    fetchWords(1)
    fetchFullWord()
  }, [selectedTopic])

  useEffect(() => {
    fetchWords(currentPage)
  }, [currentPage])

  const selectTopicHandler = (value) => {
    setSelectedTopic(value)
  }

  const chooseWordHandler = (event, item) => {
    event.preventDefault()
    const data = { wordData: item, topic: selectedTopic }
    console.log(data)
    navigate(`/word-detail/${item._id}`, { state: data })
  }

  const [searchTopic, setSearchTopic] = useState('')
  
  const onTopicChangeHandler = (event) => {
    setSearchTopic(event.target.value)
  }

  const searchTopicHandeler = async (event) => {
    event.preventDefault()
    try{
      const response = await searchWord({ keyword: searchTopic })
      console.log(response.result.words[0]);
      const data = { wordData: response.result.words[0], topic: topic.find((topic) => topic._id === response.result.words[0].topic) }
      console.log(data);
      navigate(`/word-detail/${response.result.words[0]._id}`, { state: data })
    }
    catch (error) {
      console.error('Error fetching word:', error.response)
      alert('Cannot find word')
    }
  }
  const { isAuthenticated } = useAuth()
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
              <h1 className='text-white'>Words</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/word-page'>Words</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap' style={{ paddingLeft: 40, paddingRight: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <SearchBar value={searchTopic} onChange={onTopicChangeHandler} onSubmit={searchTopicHandeler}/>
        </div>
        <div style={{ paddingLeft: 200, paddingRight: 200, marginBottom: 30 }}>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 40,
            paddingLeft: 300,
            paddingRight: 300
          }}
        >
          <button onClick={() => handleSort('All')} className={'sort-button ' + (sort == 1 ? 'sort-active' : '')}>
            All
          </button>
          <button onClick={() => handleSort('NameAZ')} className={'sort-button ' + (sort == 2 ? 'sort-active' : '')}>
            Name: A - Z
          </button>
          <button onClick={() => handleSort('NameZA')} className={'sort-button ' + (sort == 3 ? 'sort-active' : '')}>
            Name: Z - A
          </button>
        </div>
        <ItemGrid
          items={words}
          renderItem={(item) =>
            item ? (
              <WordCard word={item} topic={selectedTopic.name} onClick={() => chooseWordHandler(event, item)} />
            ) : null
          }
        />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        {isAuthenticated && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className='add-video-button record-video' onClick={practiceHandler}>
              Practice
            </button>
          </div>
        )}
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
