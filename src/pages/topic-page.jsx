import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import ItemGrid from '../components/ItemGrid'
import Pagination from '../components/Pagination'
import TopicCard from '../components/TopicCard'
import SearchBar from '../components/SearchBar'
import { motion } from 'framer-motion'
import { getAllTopics } from '../util/topicService'
import { useNavigate, Link } from 'react-router-dom'
import Loading from '../components/Loading'

export default function TopicPage() {
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
  // const toggleProfile = (event) => {
  //   event.preventDefault()
  //   setOpenProfile(!openProfile)
  // }
  // const closeProfile = () => {
  //   setOpenProfile(false)
  // }

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [topics, setTopics] = useState([])

  const fetchTopics = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getAllTopics({ page: currentPage, limit: 12 })
      console.log(response.result.topics)
      setTopics(response.result.topics)
      setTotalPages(response.result.total_pages)
    } catch (error) {
      console.error('Error fetching topics:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTopics(currentPage)
  }, [currentPage])

  // const itemsPerPage = 12

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  //const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (sortChosen) => {
    switch (sortChosen) {
      case 'All': {
        setSort(1)
        fetchTopics(currentPage)
        break
      }
      case 'NameAZ': {
        setSort(2)
        setTopics([...topics].sort((a, b) => a.name.localeCompare(b.name)))
        break
      }
      case 'NameZA': {
        setSort(3)
        setTopics([...topics].sort((a, b) => b.name.localeCompare(a.name)))
        break
      }
      case 'HighLow': {
        setSort(4)
        setTopics([...topics].sort((a, b) => b.numberOfWords - a.numberOfWords))
        break
      }
      case 'LowHigh': {
        setSort(5)
        setTopics([...topics].sort((a, b) => a.numberOfWords - b.numberOfWords))

        break
      }
    }
  }

  const [searchTopic, setSearchTopic] = useState('')
  
  const onTopicChangeHandler = (event) => {
    setSearchTopic(event.target.value)
  }

  const searchTopicHandeler = (event) => {
    event.preventDefault()
    
  }

  const navigate = useNavigate()

  const chooseTopicHandler = (event, item) => {
    event.preventDefault()
    navigate(`/word-page/${item._id}`, { state: item })
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
              <h1 className='text-white'>Topics</h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
              </p>
              <div className='link-nav'>
                <span className='box'>
                <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/topic-page'>Topics</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap' style={{ paddingLeft: 40, paddingRight: 40 }}>
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <SearchBar value={searchTopic} onChange={onTopicChangeHandler} onSubmit={searchTopicHandeler}/>
        </div> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 40,
            paddingLeft: 200,
            paddingRight: 200
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
          <button onClick={() => handleSort('HighLow')} className={'sort-button ' + (sort == 4 ? 'sort-active' : '')}>
            Number of words: High - Low
          </button>
          <button onClick={() => handleSort('LowHigh')} className={'sort-button ' + (sort == 5 ? 'sort-active' : '')}>
            Number of words: Low - High
          </button>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <ItemGrid
            items={topics}
            renderItem={(item) => (item ? <TopicCard topic={item} onClick={() => chooseTopicHandler(event, item)} /> : null)}
          />
        )}

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
