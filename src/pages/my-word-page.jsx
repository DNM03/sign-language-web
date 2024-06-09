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
import MyWordCard from '../components/MyWordCard'
import { motion } from 'framer-motion'
import { getMyNewWords, searchWord } from '../util/newWordService'
import Loading from '../components/Loading'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function MyWordPage() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const [sort, setSort] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {UserProfile} = useAuth()

  const [wordList, setWordList] = useState([])

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

  const fetchMyWords = async (currentPage) => {
    try {
      const response = await getMyNewWords({ page: currentPage, limit: 12 })
      console.log(response.result.new_words)
      setWordList(response.result.new_words)
      setTotalPages(response.result.total_pages)
    } catch (error) {
      console.error('Error fetching my words:', error)
      alert('Error fetching my words')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMyWords(currentPage)
  }, [currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSort = (sortChosen) => {
    switch (sortChosen) {
      case 'All': {
        setSort(1)
        fetchMyWords(currentPage)
        break
      }
      case 'NameAZ': {
        setSort(2)
        setWordList([...wordList].sort((a, b) => a.name.localeCompare(b.name)))
        break
      }
      case 'NameZA': {
        setSort(3)
        setWordList([...wordList].sort((a, b) => b.name.localeCompare(a.name)))
        break
      }
    }
  }

  const createWordHandler = (event) => {
    event.preventDefault()
    navigate('/create-word')
  }
  const chooseWordHandler = (event, word) => {
    event.preventDefault()
    navigate('/contribute-word', { state: word })
  }

  const [searchTopic, setSearchTopic] = useState('')
  
  const onTopicChangeHandler = (event) => {
    setSearchTopic(event.target.value)
  }

  const searchTopicHandeler = async (event) => {
    event.preventDefault()
    if(searchTopic == ''){
      fetchMyWords(currentPage)
      return
    }
    try{
      const response = await searchWord({ keyword: searchTopic })
      console.log(response.result.words);
      if(response.result.words.length == 0){
        alert('Cannot find word')
        return
      }
      const updateRes = response.result.words.filter((word) => word.idUser == UserProfile._id)
      console.log(updateRes);
      if(updateRes.length == 0){
        alert('Cannot find word')
        return
      }
      setWordList(updateRes)
    }
    catch (error) {
      console.error('Error fetching word:', error.response)
      alert('Cannot find word')
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
              <h1 className='text-white'>My Words</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/my-word-page'>My Words</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap' style={{ paddingLeft: 40, paddingRight: 40 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 30,
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <SearchBar value={searchTopic} onChange={onTopicChangeHandler} onSubmit={searchTopicHandeler}/>
          <button
            onClick={createWordHandler}
            className='add-video-button record-video'
            style={{ marginTop: 30, width: 300 }}
          >
            Create Word
          </button>
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
        {isLoading ? (
          <Loading />
        ) : (
          <ItemGrid
            items={wordList}
            renderItem={(item) =>
              item ? <MyWordCard word={item} onClick={() => chooseWordHandler(event, item)} /> : null
            }
          />
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
