import React from 'react'
import logoImg from '../assets/img/logo.png';
import userinforimg from '../assets/img/blog/user-info.png';
import featureimg1 from '../assets/img/blog/feature-img1.jpg';
import featureimg2 from '../assets/img/blog/feature-img2.jpg';
import featureimg3 from '../assets/img/blog/feature-img3.jpg';
import featureimg4 from '../assets/img/blog/feature-img4.jpg';
import featureimg5 from '../assets/img/blog/feature-img5.jpg';
import pp1img from '../assets/img/blog/pp1.jpg'
import pp2img from '../assets/img/blog/pp2.jpg'
import pp3img from '../assets/img/blog/pp3.jpg'
import pp4img from '../assets/img/blog/pp4.jpg'
import adimg from '../assets/img/blog/ads-banner.jpg'
import cat1Img from '../assets/img/blog/cat-widget1.jpg'
import cat2Img from '../assets/img/blog/cat-widget2.jpg'
import cat3Img from '../assets/img/blog/cat-widget3.jpg'


export default function BlogHome() {
  return (
    <div>
      {/* <!-- ================ Start Header Area ================= --> */}
      <header className='default-header'>
        <nav className='navbar navbar-expand-lg  navbar-light'>
          <div className='container'>
            <a className='navbar-brand' href='index.html'>
              <img src={logoImg} alt='' />
            </a>
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
                  <a href='index.html'>Home</a>
                </li>
                <li>
                  <a href='about.html'>About</a>
                </li>
                <li>
                  <a href='courses.html'>Courses</a>
                </li>
                {/* <!-- Dropdown --> */}
                <li className='dropdown'>
                  <a className='dropdown-toggle' href='#' data-toggle='dropdown'>
                    Pages
                  </a>
                  <div className='dropdown-menu'>
                    <a className='dropdown-item' href='elements.html'>
                      Elements
                    </a>
                    <a className='dropdown-item' href='course-details.html'>
                      Course Details
                    </a>
                  </div>
                </li>
                <li className='dropdown'>
                  <a className='dropdown-toggle' href='#' data-toggle='dropdown'>
                    Blog
                  </a>
                  <div className='dropdown-menu'>
                    <a className='dropdown-item' href='blog-home.html'>
                      Blog Home
                    </a>
                    <a className='dropdown-item' href='blog-single.html'>
                      Blog Details
                    </a>
                  </div>
                </li>
                <li>
                  <a href='contacts.html'>Contacts</a>
                </li>

                <li>
                  <button className='search'>
                    <span className='lnr lnr-magnifier' id='search'></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='search-input' id='search-input-box'>
          <div className='container'>
            <form className='d-flex justify-content-between'>
              <input type='text' className='form-control' id='search-input' placeholder='Search Here' />
              <button type='submit' className='btn'></button>
              <span className='lnr lnr-cross' id='close-search' title='Close Search'></span>
            </form>
          </div>
        </div>
      </header>
      {/* <!-- ================ End Header Area ================= -->

	<!-- ================ start banner Area ================= --> */}
      <section className='banner-area'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 banner-right'>
              <h1 className='text-white'>Blog Home</h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
                In the history of modern astronomy, there is probably no one greater leap forward than the building.
              </p>
              <div className='link-nav'>
                <span className='box'>
                  <a href='index.html'>Home </a>
                  <i className='lnr lnr-arrow-right'></i>
                  <a href='blog-home.html'>Blog Home</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End banner Area ================= -->

	<!-- Start top-category-widget Area --> */}
      <section className='top-category-widget-area pt-90 pb-90 '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='single-cat-widget'>
                <div className='content relative'>
                  <div className='overlay overlay-bg'></div>
                  <a href='#' target='_blank'>
                    <div className='thumb'>
                      <img className='content-image img-fluid d-block mx-auto' src={cat1Img} alt='' />
                    </div>
                    <div className='content-details'>
                      <h4 className='content-title mx-auto text-uppercase'>Social life</h4>
                      <span></span>
                      <p>Enjoy your social life together</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-cat-widget'>
                <div className='content relative'>
                  <div className='overlay overlay-bg'></div>
                  <a href='#' target='_blank'>
                    <div className='thumb'>
                      <img className='content-image img-fluid d-block mx-auto' src={cat2Img} alt='' />
                    </div>
                    <div className='content-details'>
                      <h4 className='content-title mx-auto text-uppercase'>Politics</h4>
                      <span></span>
                      <p>Be a part of politics</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-cat-widget'>
                <div className='content relative'>
                  <div className='overlay overlay-bg'></div>
                  <a href='#' target='_blank'>
                    <div className='thumb'>
                      <img className='content-image img-fluid d-block mx-auto' src={cat3Img} alt='' />
                    </div>
                    <div className='content-details'>
                      <h4 className='content-title mx-auto text-uppercase'>Food</h4>
                      <span></span>
                      <p>Let the food be finished</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End top-category-widget Area -->

	<!-- Start post-content Area --> */}
      <section className='post-content-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 posts-list'>
              <div className='single-post row'>
                <div className='col-lg-3  col-md-3 meta-details'>
                  <ul className='tags'>
                    <li>
                      <a href='#'>Food,</a>
                    </li>
                    <li>
                      <a href='#'>Technology,</a>
                    </li>
                    <li>
                      <a href='#'>Politics,</a>
                    </li>
                    <li>
                      <a href='#'>Lifestyle</a>
                    </li>
                  </ul>
                  <div className='user-details row'>
                    <p className='user-name col-lg-12 col-md-12 col-6'>
                      <a href='#'>Mark wiens</a> <span className='lnr lnr-user'></span>
                    </p>
                    <p className='date col-lg-12 col-md-12 col-6'>
                      <a href='#'>12 Dec, 2017</a> <span className='lnr lnr-calendar-full'></span>
                    </p>
                    <p className='view col-lg-12 col-md-12 col-6'>
                      <a href='#'>1.2M Views</a> <span className='lnr lnr-eye'></span>
                    </p>
                    <p className='comments col-lg-12 col-md-12 col-6'>
                      <a href='#'>06 Comments</a> <span className='lnr lnr-bubble'></span>
                    </p>
                  </div>
                </div>
                <div className='col-lg-9 col-md-9 '>
                  <div className='feature-img'>
                    <img className='img-fluid' src={featureimg1} alt='' />
                  </div>
                  <a className='posts-title' href='blog-single.html'>
                    <h3>Astronomy Binoculars A Great Alternative</h3>
                  </a>
                  <p className='excert'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should
                    have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                  </p>
                  <a href='blog-single.html' className='view-more-btn'>
                    View More
                  </a>
                </div>
              </div>
              <div className='single-post row'>
                <div className='col-lg-3  col-md-3 meta-details'>
                  <ul className='tags'>
                    <li>
                      <a href='#'>Food,</a>
                    </li>
                    <li>
                      <a href='#'>Technology,</a>
                    </li>
                    <li>
                      <a href='#'>Politics,</a>
                    </li>
                    <li>
                      <a href='#'>Lifestyle</a>
                    </li>
                  </ul>
                  <div className='user-details row'>
                    <p className='user-name col-lg-12 col-md-12 col-6'>
                      <a href='#'>Mark wiens</a> <span className='lnr lnr-user'></span>
                    </p>
                    <p className='date col-lg-12 col-md-12 col-6'>
                      <a href='#'>12 Dec, 2017</a> <span className='lnr lnr-calendar-full'></span>
                    </p>
                    <p className='view col-lg-12 col-md-12 col-6'>
                      <a href='#'>1.2M Views</a> <span className='lnr lnr-eye'></span>
                    </p>
                    <p className='comments col-lg-12 col-md-12 col-6'>
                      <a href='#'>06 Comments</a> <span className='lnr lnr-bubble'></span>
                    </p>
                  </div>
                </div>
                <div className='col-lg-9 col-md-9 '>
                  <div className='feature-img'>
                    <img className='img-fluid' src={featureimg2} alt='' />
                  </div>
                  <a className='posts-title' href='blog-single.html'>
                    <h3>The Basics Of Buying A Telescope</h3>
                  </a>
                  <p className='excert'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should
                    have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                  </p>
                  <a href='blog-single.html' className='view-more-btn'>
                    View More
                  </a>
                </div>
              </div>
              <div className='single-post row'>
                <div className='col-lg-3  col-md-3 meta-details'>
                  <ul className='tags'>
                    <li>
                      <a href='#'>Food,</a>
                    </li>
                    <li>
                      <a href='#'>Technology,</a>
                    </li>
                    <li>
                      <a href='#'>Politics,</a>
                    </li>
                    <li>
                      <a href='#'>Lifestyle</a>
                    </li>
                  </ul>
                  <div className='user-details row'>
                    <p className='user-name col-lg-12 col-md-12 col-6'>
                      <a href='#'>Mark wiens</a> <span className='lnr lnr-user'></span>
                    </p>
                    <p className='date col-lg-12 col-md-12 col-6'>
                      <a href='#'>12 Dec, 2017</a> <span className='lnr lnr-calendar-full'></span>
                    </p>
                    <p className='view col-lg-12 col-md-12 col-6'>
                      <a href='#'>1.2M Views</a> <span className='lnr lnr-eye'></span>
                    </p>
                    <p className='comments col-lg-12 col-md-12 col-6'>
                      <a href='#'>06 Comments</a> <span className='lnr lnr-bubble'></span>
                    </p>
                  </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                  <div className='feature-img'>
                    <img className='img-fluid' src={featureimg3} alt='' />
                  </div>
                  <a className='posts-title' href='blog-single.html'>
                    <h3>The Glossary Of Telescopes</h3>
                  </a>
                  <p className='excert'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should
                    have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                  </p>
                  <a href='blog-single.html' className='view-more-btn'>
                    View More
                  </a>
                </div>
              </div>
              <div className='single-post row'>
                <div className='col-lg-3  col-md-3 meta-details'>
                  <ul className='tags'>
                    <li>
                      <a href='#'>Food,</a>
                    </li>
                    <li>
                      <a href='#'>Technology,</a>
                    </li>
                    <li>
                      <a href='#'>Politics,</a>
                    </li>
                    <li>
                      <a href='#'>Lifestyle</a>
                    </li>
                  </ul>
                  <div className='user-details row'>
                    <p className='user-name col-lg-12 col-md-12 col-6'>
                      <a href='#'>Mark wiens</a> <span className='lnr lnr-user'></span>
                    </p>
                    <p className='date col-lg-12 col-md-12 col-6'>
                      <a href='#'>12 Dec, 2017</a> <span className='lnr lnr-calendar-full'></span>
                    </p>
                    <p className='view col-lg-12 col-md-12 col-6'>
                      <a href='#'>1.2M Views</a> <span className='lnr lnr-eye'></span>
                    </p>
                    <p className='comments col-lg-12 col-md-12 col-6'>
                      <a href='#'>06 Comments</a> <span className='lnr lnr-bubble'></span>
                    </p>
                  </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                  <div className='feature-img'>
                    <img className='img-fluid' src={featureimg4} alt='' />
                  </div>
                  <a className='posts-title' href='blog-single.html'>
                    <h3>The Night Sky</h3>
                  </a>
                  <p className='excert'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should
                    have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                  </p>
                  <a href='blog-single.html' className='view-more-btn'>
                    View More
                  </a>
                </div>
              </div>
              <div className='single-post row'>
                <div className='col-lg-3 col-md-3 meta-details'>
                  <ul className='tags'>
                    <li>
                      <a href='#'>Food,</a>
                    </li>
                    <li>
                      <a href='#'>Technology,</a>
                    </li>
                    <li>
                      <a href='#'>Politics,</a>
                    </li>
                    <li>
                      <a href='#'>Lifestyle</a>
                    </li>
                  </ul>
                  <div className='user-details row'>
                    <p className='user-name col-lg-12 col-md-12 col-6'>
                      <a href='#'>Mark wiens</a> <span className='lnr lnr-user'></span>
                    </p>
                    <p className='date col-lg-12 col-md-12 col-6'>
                      <a href='#'>12 Dec, 2017</a> <span className='lnr lnr-calendar-full'></span>
                    </p>
                    <p className='view col-lg-12 col-md-12 col-6'>
                      <a href='#'>1.2M Views</a> <span className='lnr lnr-eye'></span>
                    </p>
                    <p className='comments col-lg-12 col-md-12 col-6'>
                      <a href='#'>06 Comments</a> <span className='lnr lnr-bubble'></span>
                    </p>
                  </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                  <div className='feature-img'>
                    <img className='img-fluid' src={featureimg5} alt='' />
                  </div>
                  <a className='posts-title' href='blog-single.html'>
                    <h3>Telescopes 101</h3>
                  </a>
                  <p className='excert'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should
                    have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                  </p>
                  <a href='blog-single.html' className='view-more-btn'>
                    View More
                  </a>
                </div>
              </div>
              <nav className='blog-pagination justify-content-center d-flex'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a href='#' className='page-link' aria-label='Previous'>
                      <span aria-hidden='true'>
                        <span className='lnr lnr-chevron-left'></span>
                      </span>
                    </a>
                  </li>
                  <li className='page-item'>
                    <a href='#' className='page-link'>
                      01
                    </a>
                  </li>
                  <li className='page-item active'>
                    <a href='#' className='page-link'>
                      02
                    </a>
                  </li>
                  <li className='page-item'>
                    <a href='#' className='page-link'>
                      03
                    </a>
                  </li>
                  <li className='page-item'>
                    <a href='#' className='page-link'>
                      04
                    </a>
                  </li>
                  <li className='page-item'>
                    <a href='#' className='page-link'>
                      09
                    </a>
                  </li>
                  <li className='page-item'>
                    <a href='#' className='page-link' aria-label='Next'>
                      <span aria-hidden='true'>
                        <span className='lnr lnr-chevron-right'></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col-lg-4 sidebar-widgets'>
              <div className='widget-wrap'>
                <div className='single-sidebar-widget search-widget'>
                  <form className='search-form' action='#'>
                    <input
                      placeholder='Search Posts'
                      name='search'
                      type='text'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Search Post'; }}
                    />
                    <button type='submit'>
                      <i className='fa fa-search'></i>
                    </button>
                  </form>
                </div>
                <div className='single-sidebar-widget user-info-widget'>
                  <img src={userinforimg} alt='' />
                  <a href='#'>
                    <h4>Charlie Barber</h4>
                  </a>
                  <p>Senior blog writer</p>
                  <ul className='social-links'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-github'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-behance'></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Boot camps have its supporters andit sdetractors. Some people do not understand why you should have
                    to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.
                  </p>
                </div>
                <div className='single-sidebar-widget popular-post-widget'>
                  <h4 className='popular-title'>Popular Posts</h4>
                  <div className='popular-post-list'>
                    <div className='single-post-list d-flex flex-row align-items-center'>
                      <div className='thumb'>
                        <img className='img-fluid' src={pp1img} alt='' />
                      </div>
                      <div className='details'>
                        <a href='blog-single.html'>
                          <h6>Space The Final Frontier</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row align-items-center'>
                      <div className='thumb'>
                        <img className='img-fluid' src={pp2img} alt='' />
                      </div>
                      <div className='details'>
                        <a href='blog-single.html'>
                          <h6>The Amazing Hubble</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row align-items-center'>
                      <div className='thumb'>
                        <img className='img-fluid' src={pp3img} alt='' />
                      </div>
                      <div className='details'>
                        <a href='blog-single.html'>
                          <h6>Astronomy Or Astrology</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row align-items-center'>
                      <div className='thumb'>
                        <img className='img-fluid' src={pp4img} alt='' />
                      </div>
                      <div className='details'>
                        <a href='s'>
                          <h6>Asteroids telescope</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-sidebar-widget ads-widget'>
                  <a href='#'>
                    <img className='img-fluid' src={adimg} alt='' />
                  </a>
                </div>
                <div className='single-sidebar-widget post-category-widget'>
                  <h4 className='category-title'>Post Catgories</h4>
                  <ul className='cat-list'>
                    <li>
                      <a href='#' className='d-flex justify-content-between'>
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='d-flex justify-content-between'>
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='d-flex justify-content-between'>
                        <p>Fashion</p>
                        <p>59</p>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='d-flex justify-content-between'>
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='d-flex justify-content-between'>
                        <p>Food</p>
                        <p>15</p>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='d-flex justify-content-between'>
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='d-flex justify-content-between'>
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='single-sidebar-widget newsletter-widget'>
                  <h4 className='newsletter-title'>Newsletter</h4>
                  <p>
                    Here, I focus on a range of items and features that we use in life without giving them a second
                    thought.
                  </p>
                  <div className='form-group d-flex flex-row'>
                    <div className='col-autos'>
                      <div className='input-group'>
                        <div className='input-group-prepend'>
                          <div className='input-group-text'>
                            <i className='fa fa-envelope' aria-hidden='true'></i>
                          </div>
                        </div>
                        <input
                          type='text'
                          className='form-control'
                          id='inlineFormInputGroup'
                          placeholder='Enter email'
                          onFocus={(e) => { e.target.placeholder = ''; }}
                          onBlur={(e) => { e.target.placeholder = 'Enter email'; }}
                        />
                      </div>
                    </div>
                    <a href='#' className='bbtns'>
                      Subcribe
                    </a>
                  </div>
                  <p className='text-bottom'>You can unsubscribe at any time</p>
                </div>
                <div className='single-sidebar-widget tag-cloud-widget'>
                  <h4 className='tagcloud-title'>Tag Clouds</h4>
                  <ul>
                    <li>
                      <a href='#'>Technology</a>
                    </li>
                    <li>
                      <a href='#'>Fashion</a>
                    </li>
                    <li>
                      <a href='#'>Architecture</a>
                    </li>
                    <li>
                      <a href='#'>Fashion</a>
                    </li>
                    <li>
                      <a href='#'>Food</a>
                    </li>
                    <li>
                      <a href='#'>Technology</a>
                    </li>
                    <li>
                      <a href='#'>Lifestyle</a>
                    </li>
                    <li>
                      <a href='#'>Art</a>
                    </li>
                    <li>
                      <a href='#'>Adventure</a>
                    </li>
                    <li>
                      <a href='#'>Food</a>
                    </li>
                    <li>
                      <a href='#'>Lifestyle</a>
                    </li>
                    <li>
                      <a href='#'>Adventure</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End post-content Area -->

	<!-- ================ start footer Area ================= --> */}
      <footer className='footer-area section-gap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 col-md-6 single-footer-widget'>
              <h4>Top Products</h4>
              <ul>
                <li>
                  <a href='#'>Managed Website</a>
                </li>
                <li>
                  <a href='#'>Manage Reputation</a>
                </li>
                <li>
                  <a href='#'>Power Tools</a>
                </li>
                <li>
                  <a href='#'>Marketing Service</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-6 single-footer-widget'>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href='#'>Jobs</a>
                </li>
                <li>
                  <a href='#'>Brand Assets</a>
                </li>
                <li>
                  <a href='#'>Investor Relations</a>
                </li>
                <li>
                  <a href='#'>Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-6 single-footer-widget'>
              <h4>Features</h4>
              <ul>
                <li>
                  <a href='#'>Jobs</a>
                </li>
                <li>
                  <a href='#'>Brand Assets</a>
                </li>
                <li>
                  <a href='#'>Investor Relations</a>
                </li>
                <li>
                  <a href='#'>Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-6 single-footer-widget'>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href='#'>Guides</a>
                </li>
                <li>
                  <a href='#'>Research</a>
                </li>
                <li>
                  <a href='#'>Experts</a>
                </li>
                <li>
                  <a href='#'>Agencies</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-6 single-footer-widget'>
              <h4>Newsletter</h4>
              <p>You can trust us. we only send promo offers,</p>
              <div className='form-wrap' id='mc_embed_signup'>
                <form
                  target='_blank'
                  action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                  method='get'
                  className='form-inline'
                >
                  <input
                    className='form-control'
                    name='EMAIL'
                    placeholder='Your Email Address'
                    onFocus={(e) => { e.target.placeholder = ''; }}
                    onBlur={(e) => { e.target.placeholder = 'Your Email Address'; }}
                    required=''
                    type='email'
                  />
                  <button className='click-btn btn btn-default text-uppercase'>subscribe</button>
                  <div style={{position: 'absolute', left: '-5000px'}}>
                    <input name='b_36c4fd991d266f23781ded980_aefe40901a' tabIndex='-1' defaultValue='' type='text' />
                  </div>

                  <div className='info'></div>
                </form>
              </div>
            </div>
          </div>
          <div className='footer-bottom row align-items-center'>
            <p className='footer-text m-0 col-lg-8 col-md-12'>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This
              template is made with <i className='fa fa-heart-o' aria-hidden='true'></i> by{' '}
              <a href='https://colorlib.com' target='_blank'>
                Colorlib
              </a>
            </p>
            <div className='col-lg-4 col-md-12 footer-social'>
              <a href='#'>
                <i className='fa fa-facebook'></i>
              </a>
              <a href='#'>
                <i className='fa fa-twitter'></i>
              </a>
              <a href='#'>
                <i className='fa fa-dribbble'></i>
              </a>
              <a href='#'>
                <i className='fa fa-behance'></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ================ End footer Area ================= --> */}
    </div>
  )
}
