import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import logoImg from '../assets/img/logo3.png'
import headerImg from '../assets/img/header-img.png'
import p1img from '../assets/img/popular-course/p1.jpg'
import p2img from '../assets/img/popular-course/p2.jpg'
import p3img from '../assets/img/popular-course/p3.jpg'
import p4img from '../assets/img/popular-course/p4.jpg'
import vidimg from '../assets/img/video-img.jpg'
import playbutton from '../assets/img/play-btn.png'
import quoteimg from '../assets/img/quote.png'
import t1img from '../assets/img/people_doing_sign.jpg'
import b1img from '../assets/img/blog-post/b1.jpg'
import b2img from '../assets/img/blog-post/b2.jpg'
import b3img from '../assets/img/blog-post/b3.jpg'
import { motion } from 'framer-motion'
import { getWordsByTopic } from '../util/topicService'
import ItemGrid from '../components/ItemGrid'
import WordCard from '../components/WordCard'

//import '../scss/theme/_banner.scss'
// import '../css/owl.carousel.css'
// import 'owl.carousel';

export default function Home() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null)
  const [sort, setSort] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [fullWord, setFullWord] = useState([])

  const fetchFullWord = async () => {
    try {
      setIsLoading(true)
      const response = await getWordsByTopic({ idTopic: '660d84ffaa9eda69de95ea10', page: 1, limit: 8 })
      // console.log(response.result.words)
      setFullWord(response.result.words)
    } catch (error) {
      console.error('Error fetching full words:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchFullWord();
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
  return (
    <motion.div style={{ width: '100%' }} 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: {duration: 0.1} }}
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

      <section className='home-banner-area'>
        <div className='container'>
          <div className='row justify-content-center fullscreen align-items-center' style={{ height: '790px' }}>
            <div className='col-lg-5 col-md-8 home-banner-left'>
              <h1 className='text-white'>
                Hands That Speak: <br />
                Empowering ASL Communication!
              </h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
                {/* In the history of modern astronomy, there is probably no one greater leap forward than the building and
                launch of the space telescope known as the Hubble. */}
              </p>
            </div>
            <div className='offset-lg-2 col-lg-5 col-md-12 home-banner-right'>
              <img className='img-fluid' src={headerImg} alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='feature-area'>
        <div className='container-fluid'>
          <div className='feature-inner row'>
            <div className='col-lg-2 col-md-6'>
              <div className='feature-item d-flex'>
                <i className='ti-book'></i>
                <div className='ml-20'>
                  <h4>Diverse Words</h4>
                  <p>We offer a large number of words different from many topics.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='feature-item d-flex'>
                <i className='ti-cup'></i>
                <div className='ml-20'>
                  <h4>Track Progress</h4>
                  <p>Tracking your learning progress with the topic or your favorite words.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='feature-item d-flex border-right-0'>
                <i className='ti-desktop'></i>
                <div className='ml-20'>
                  <h4>Sign Detection</h4>
                  <p>Converting your sign to text with our fantastic detection feature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='popular-course-area section-gap'>
        <div className='container-fluid'>
          <div className='row justify-content-center section-title'>
            <div className='col-lg-12'>
              <h2>
                Popular Words <br />
                For you right now
              </h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p> */}
            </div>
          </div>
          <div className='owl-carousel popuar-course-carusel'>
          <ItemGrid items={fullWord} renderItem={(item) => (item ? <WordCard word={item} topic={'Activities'} /> : null)} />
          </div>
        </div>
      </section>
      {/* The above list need to be dynamic with exact 8 items */}

      <section className='video-area section-gap-bottom'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='section-title text-white'>
                <h2 className='text-white'>
                  Watch Our Videos <br />
                  and Practice
                </h2>
                <p>
                Our app empowers users to master sign language through immersive video demonstrations and interactive flashcard exercises that reinforce vocabulary and promote retention.
                </p>
              </div>
            </div>
            <div className='offset-lg-1 col-md-6 video-left'>
              <div className='owl-carousel video-carousel'>
                <div className='single-video'>
                  <div className='video-part'>
                    <img className='img-fluid' src={vidimg} alt='' />
                    <div className='overlay'></div>
                    <a className='popup-youtube play-btn' href='https://www.youtube.com/watch?v=IyUXSfgvc48'>
                      <img className='play-icon' src={playbutton} alt='' />
                    </a>
                  </div>
                  <h4 className='text-white mb-20 mt-30'>Learn new word with video from our Trainers</h4>
                  <p className='text-white mb-20'>
                    
                  </p>
                </div>

                {/* <div className='single-video'>
                  <div className='video-part'>
                    <img className='img-fluid' src={vidimg} alt='' />
                    <div className='overlay'></div>
                    <a className='popup-youtube play-btn' href='https://www.youtube.com/watch?v=VufDd-QL1c0'>
                      <img className='play-icon' src={playbutton} alt='' />
                    </a>
                  </div>
                  <h4 className='text-white mb-20 mt-30'>Learn Angular js Course for Legendary Persons</h4>
                  <p className='text-white mb-20'>
                    In the history of modern astronomy, there is probably no one greater leap forward than the building
                    and launch of the space telescope known as the Hubble.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='other-feature-area'>
        <div className='container'>
          <div className='feature-inner row'>
            <div className='col-lg-12'>
              <div className='section-title text-left'>
                <h2>
                  Features That <br />
                  Can Avail By Everyone
                </h2>
                <p>
                  With this website, you can learn sign language with a lot of words from different topics. Moreover, you can practice with flashcard and our detection feature.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='other-feature-item'>
                <i className='ti-key'></i>
                <h4>Lifetime Access</h4>
                <div>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--160'>
              <div className='other-feature-item'>
                <i className='ti-files'></i>
                <h4>Source File Included</h4>
                <div>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--260'>
              <div className='other-feature-item'>
                <i className='ti-medall-alt'></i>
                <h4>Progress Tracking</h4>
                <div>
                  <p>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='other-feature-item'>
                <i className='ti-briefcase'></i>
                <h4>100+ words</h4>
                <div>
                  <p>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--160'>
              <div className='other-feature-item'>
                <i className='ti-crown'></i>
                <h4>Quality Resources</h4>
                <div>
                  <p>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--260'>
              <div className='other-feature-item'>
                <i className='ti-headphone-alt'></i>
                <h4>Live Supports</h4>
                <div>
                  <p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonials-area section-gap'>
        <div className='container'>
          <div className='testi-slider owl-carousel' data-slider-id='1'>
            <div className='row align-items-center'>
              <div className='col-lg-5'>
                <div className='item'>
                  <div className='testi-item'>
                    <img src={quoteimg} alt='' />
                    <div className='mt-40 text'>
                      <p>One language sets you in a corridor for life. Two languages open every door along the way.</p>
                    </div>
                    <h4>Frank Smith</h4>
                    <p>Cognitive Psychologist and Author</p>
                  </div>
                </div>
              </div>

              <div className='offset-lg-1 col-lg-6'>
                <img src={t1img} alt='' />
              </div>
            </div>

            {/* <div className='row align-items-center'>
              <div className='col-lg-5'>
                <div className='item'>
                  <div className='testi-item'>
                    <img src={quoteimg} alt='' />
                    <div className='mt-40 text'>
                      <p>
                        As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you
                        think about it, you travel across her face <br />
                        and She is the host to your journey.
                      </p>
                    </div>
                    <h4>Fanny Spencer</h4>
                    <p>Chief Executive, Amazon</p>
                  </div>
                </div>
              </div>

              <div className='offset-lg-1 col-lg-6'>
                <img src={t1img} alt='' />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className='registration-area'>
        <div className='container'>
          <div className='row align-items-end'>
            <div className='col-lg-5'>
              <div className='section-title text-left text-white'>
                <h2 className='text-white'>
                  Watch Our Trainers <br />
                  in Live Action
                </h2>
                <p>
                  If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                  You may see some for as low as $.17 each.
                </p>
              </div>
            </div>
            <div className='offset-lg-3 col-lg-4 col-md-6'>
              <div className='course-form-section'>
                <h3 className='text-white'>Courses for Free</h3>
                <p className='text-white'>It is high time for learning</p>
                <form
                  className='course-form-area contact-page-form course-form text-right'
                  id='myForm'
                  action='mail.html'
                  method='post'
                >
                  <div className='form-group col-md-12'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      placeholder='Name'
                      onFocus={(e) => {
                        e.target.placeholder = ''
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = 'Name'
                      }}
                    />
                  </div>
                  <div className='form-group col-md-12'>
                    <input
                      type='text'
                      className='form-control'
                      id='subject'
                      name='subject'
                      placeholder='Phone Number'
                      onFocus={(e) => {
                        e.target.placeholder = ''
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = 'Phone Number'
                      }}
                    />
                  </div>
                  <div className='form-group col-md-12'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      placeholder='Email Address'
                      onFocus={(e) => {
                        e.target.placeholder = ''
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = 'Email Address'
                      }}
                    />
                  </div>
                  <div className='col-lg-12 text-center'>
                    <button className='btn text-uppercase'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='blog-post-area section-gap'>
        <div className='container-fluid'>
          <div className='feature-inner row'>
            <div className='col-lg-12'>
              <div className='section-title text-left'>
                <h2>
                  Features That <br />
                  Can Avail By Everyone
                </h2>
                <p>
                  There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.
                  It’s exciting to think about setting up your own viewing station.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post'>
                <img src={b1img} className='img-fluid' alt='' />
                <div className='overlay'></div>
                <div className='top-text'>
                  <p>29th, oct, 2018</p>
                  <p>121 likes</p>
                  <p>05 comments</p>
                </div>
                <div className='text'>
                  <h4 className='text-white'>Smart Kitchen Setup</h4>
                  <div>
                    <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do.</p>
                  </div>
                  <a href='#' className='primary-btn'>
                    View Details
                    <i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--160'>
              <div className='single-blog-post'>
                <img src={b2img} className='img-fluid' alt='' />
                <div className='overlay'></div>
                <div className='top-text'>
                  <p>29th, oct, 2018</p>
                  <p>121 likes</p>
                  <p>05 comments</p>
                </div>
                <div className='text'>
                  <h4 className='text-white'>Smart Kitchen Setup</h4>
                  <div>
                    <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do.</p>
                  </div>
                  <a href='#' className='primary-btn'>
                    View Details
                    <i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--260'>
              <div className='single-blog-post'>
                <img src={b3img} className='img-fluid' alt='' />
                <div className='overlay'></div>
                <div className='top-text'>
                  <p>29th, oct, 2018</p>
                  <p>121 likes</p>
                  <p>05 comments</p>
                </div>
                <div className='text'>
                  <h4 className='text-white'>Smart Kitchen Setup</h4>
                  <div>
                    <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do.</p>
                  </div>
                  <a href='#' className='primary-btn'>
                    View Details
                    <i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </motion.div>
  )
}
