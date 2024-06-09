import React, { useState, useEffect, useRef } from 'react'
import logoImg from '../assets/img/logo3.png'
import t1img from '../assets/img/testimonial/t1.jpg'
import quoteimg from '../assets/img/quote.png'
import playbutton from '../assets/img/play-btn.png'
import vidimg from '../assets/img/video-img.jpg'
import aboutimg from '../assets/img/about-img.png'
import profileIcon from '../assets/img/profile-icon.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfile from '../components/UserProfile'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import peopledoingsign from '../assets/img/peopledoingsign.jpg'

export default function About() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const accountRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (accountRef.current) {
        const rect = accountRef.current.getBoundingClientRect();
        setPosition({ x: rect.left, y: rect.bottom + window.scrollY });
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [openProfile]);
  const toggleProfile = (event) => {
    event.preventDefault()
    setOpenProfile(!openProfile)
  }
  const closeProfile = () => {
    setOpenProfile(false)
  }
  return (
    <motion.div style={{ width: '100%' }}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: {duration: 0.1} }}>
    
      {/* <!-- ================ Start Header Area ================= --> */}
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
              <h1 className='text-white'>About Us</h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
              </p>
              <div className='link-nav'>
                <span className='box'>
                  <Link to='/'>Home </Link>
                  <i className='lnr lnr-arrow-right'></i>
                  <Link to='/about'>About Us</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End banner Area ================= -->

  <!-- ================ Start Feature Area ================= --> */}
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
      {/* <!-- ================ End Feature Area ================= -->

  <!-- ================- Start About Area ================= --> */}
      <section className='about-area section-gap'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-5 col-md-6 about-left'>
              <img className='img-fluid' src={peopledoingsign} alt='' style={{height:300}}/>
            </div>
            <div className='offset-lg-1 col-lg-5 col-md-12 about-right'>
              <h1>
                Over all <br />
                100 Words <br />
                from many topics
              </h1>
              <div>
                <p>
                  
                </p>
                <p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================- End About Area ================= -->

  <!-- ================ Start Video Area ================= --> */}
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
      {/* <!-- ================ End Video Area ================= -->

  <!-- ================ Start Feature Area ================= --> */}
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
      {/* <!-- ================ End Feature Area ================= -->

  <!-- ================ Start Testimonials Area ================= --> */}
      
      {/* <!-- ================ End Testimonials Area ================= -->

  <!-- ================ start footer Area ================= --> */}
      {/* <Footer /> */}
      {/* <!-- ================ End footer Area ================= --> */}
    </motion.div>
  )
}
