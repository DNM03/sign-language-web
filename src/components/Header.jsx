import React, { useState, useEffect, useRef } from 'react'
import logoImg from '../assets/img/logo3.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import { getAllTopics } from '../util/topicService'
import { searchWord } from '../util/wordService'
export default function Header({openSearch, setOpenSearch, accountRef, toggleProfile}) {
  // const [openSearch, setOpenSearch] = useState(false)
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const [topic, setTopic] = useState([])
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

  useEffect(() => {
    fetchTopics()
  }, [])

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
      setOpenSearch(false)
      navigate(`/word-detail/${response.result.words[0]._id}`, { state: data })
    }
    catch (error) {
      console.error('Error fetching word:', error.response)
      alert('Cannot find word')
    }
  }

  return (
    <header className='default-header'>
      <nav className='navbar navbar-expand-lg  navbar-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logoImg} alt='' style={{ width: '130px' }} />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='lnr lnr-menu'></span>
          </button>

          <div className='collapse navbar-collapse justify-content-end align-items-center' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li className='dropdown'>
                <Link className='dropdown-toggle' to='/topic-page' data-toggle='dropdown'>
                  Dictionary
                </Link>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/topic-page'>
                    Topics
                  </Link>
                  <Link className='dropdown-item' to='/word-page'>
                    Words
                  </Link>
                </div>
              </li>
              <li>
                <Link to='/detection'>Detection</Link>
              </li>
              {isAuthenticated && <li>
                <Link to='/favorite-word'>Favorite Word</Link>
              </li>}
              {isAuthenticated && <li>
                <Link to='/my-word-page'>My Word</Link>
              </li>}
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
              {/*                 
                <li onClick={toggleProfile}>
                  <a href='about.html'>Account</a>
                </li> */}
              <div id='account-wrapper'>
                {isAuthenticated?(<li ref={accountRef} onClick={toggleProfile}>
                  <a href='about.html'>Account</a>
                </li>):(<li ref={accountRef} onClick={toggleProfile}>
                  <Link to='/login'>Account</Link>
                </li>)}
              </div>

              <li>
                <button className='search' onClick={() => setOpenSearch((prev) => !prev)}>
                  <span className='lnr lnr-magnifier' id='search'></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='search-input' id='search-input-box' style={{ display: openSearch ? 'block' : 'none' }}>
        <div className='container'>
          <form className='d-flex justify-content-between' onSubmit={searchTopicHandeler}>
            <input type='text' className='form-control' id='search-input' placeholder='Search Here' value={searchTopic} onChange={onTopicChangeHandler} />
            
          </form>
        </div>
      </div>
    </header>
  )
}
