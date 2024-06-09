import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js'
import LineGraph from '../components/LineGraph'
import { plugins } from 'chart.js'
import { motion } from 'framer-motion'
import { getStatisticTop10Words } from '../util/statisticService'
import { Link } from 'react-router-dom'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Statistic() {
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

  const [wordList, setWordList] = useState([])

  const fetchWordList = async () => {
    try {
      const response = await getStatisticTop10Words()
      setWordList(response.result)
    } catch (error) {
      console.error('Error fetching word list:', error)
    }
  }

  useEffect(() => {
    fetchWordList()
  }, [])

  const statisticData = {
    currentWords: 100,
    contributedWords: 10,
    topContributor: 'John Doe',
    topContributorWords: 5
  }
  const options = {
    borderRadius: 5,
    plugins: {
      title: {
        display: true,
        text: 'Top Viewed Words'
      }
    }
  }

  const data2 = {
    labels: wordList.map((word) => word.name),
    datasets: [
      {
        label: 'Top 10 Viewed Words',
        data: wordList.map((word) => word.viewers),

        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],

        borderWidth: 1
      }
    ]
  }
  const dataWords = [
    { word: 'Hello', topic: 'Greeting', example: 'Hello John, nice to meet you.' },
    { word: 'Hi', topic: 'Greeting', example: 'Hi John, nice to meet you.' },
    { word: 'Monday', topic: 'Day', example: 'Monday is the first day of the week.' },
    { word: 'Monday', topic: 'Day', example: 'Monday is the first day of the week.' },
    { word: 'Monday', topic: 'Day', example: 'Monday is the first day of the week.' },
    { word: 'Monday', topic: 'Day', example: 'Monday is the first day of the week.' },
    { word: 'Monday', topic: 'Day', example: 'Monday is the first day of the week.' },
    { word: 'Monday', topic: 'Day', example: 'Monday is the first day of the week.' },
    { word: 'Monday', topic: 'Day', example: 'Monday is the first day of the week.' }
  ]
  const [topRatedWords, setTopRatedWords] = useState(dataWords)
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
              <h1 className='text-white'>Statistic</h1>
              <p className='mx-auto text-white  mt-20 mb-40'></p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/statistic'>Statistic</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-gap' style={{ paddingTop: 30 }}>
        <div className='info-container'>
          <div className='statistic-inner-left'>
            <h2 className='login-text'>Overview</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div className='statistic-overview-card'>
                <label style={{ color: '#7f32fd' }}>Current Words</label>
                <label style={{ fontSize: 30, color: 'black' }}>{statisticData.currentWords}</label>
              </div>
              <div className='statistic-overview-card'>
                <label style={{ color: '#7f32fd' }}>Contributed Words</label>
                <label style={{ fontSize: 30, color: 'black' }}>{statisticData.contributedWords}</label>
              </div>
              <div className='statistic-overview-card'>
                <label style={{ color: '#7f32fd' }}>Top Contributor</label>
                <label style={{ fontSize: 30, color: 'black' }}>{statisticData.topContributor}</label>
              </div>
              <div className='statistic-overview-card'>
                <label style={{ color: '#7f32fd' }}>Highest Contributed Words</label>
                <label style={{ fontSize: 30, color: 'black' }}>{statisticData.topContributorWords}</label>
              </div>
            </div>
            <div className='statistic-chart-card'>
              {/* <p>Access By Month</p> */}
              {/* <Bar options={options} data={data} /> */}
              <LineGraph />
            </div>
            <div className='statistic-chart-card'>
              {/* <p>Top Learned Words</p> */}
              <Bar options={options} data={data2} />
            </div>
          </div>
          <div className='statistic-inner-right'>
            <h2 className='login-text'>Top Liked Words</h2>
            {wordList.map((word, index) => (
              <div key={index} className='statistic-item'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ backgroundColor: '#7f32fd', width: 10, marginRight: 10 }}></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      alignItems: 'flex-start',
                      paddingTop: 10,
                      paddingBottom: 10
                    }}
                  >
                    <p style={{ color: '#b937df', fontSize: 20, marginBottom: 0 }}>{word.name}</p>
                    <p style={{ color: 'black', fontSize: 15, marginBottom: 0 }}>Liked: {word.numberOfLiked}</p>
                    <p style={{ color: 'black', fontSize: 12, marginBottom: 0 }}>Ex: {word.example[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </motion.div>
  )
}
