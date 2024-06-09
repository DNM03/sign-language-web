import React from 'react'
import logoImg from '../assets/img/logo.png';
import featureimg from '../assets/img/blog/feature-img1.jpg';
import post1img from '../assets/img/blog/post-img1.jpg';
import post2img from '../assets/img/blog/post-img2.jpg';
import previmg from '../assets/img/blog/prev.jpg';
import nextimg from '../assets/img/blog/next.jpg';
import c1img from '../assets/img/blog/c1.jpg';
import c2img from '../assets/img/blog/c2.jpg';
import c3img from '../assets/img/blog/c3.jpg';
import c4img from '../assets/img/blog/c4.jpg';
import c5img from '../assets/img/blog/c5.jpg';
import userinforimg from '../assets/img/blog/user-info.png';
import pp1img from '../assets/img/blog/pp1.jpg'
import pp2img from '../assets/img/blog/pp2.jpg'
import pp3img from '../assets/img/blog/pp3.jpg'
import pp4img from '../assets/img/blog/pp4.jpg'
import adimg from '../assets/img/blog/ads-banner.jpg'

export default function BlogSingle() {
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
                  <i className='lnr lnr-arrow-right'></i>
                  <a href='blog-single.html'>Single Blog</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End banner Area ================= -->

	<!-- Start post-content Area --> */}
      <section className='post-content-area single-post-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 posts-list'>
              <div className='single-post row'>
                <div className='col-lg-12'>
                  <div className='feature-img'>
                    <img className='img-fluid' src={featureimg} alt='' />
                  </div>
                </div>
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
                    <ul className='social-links col-lg-12 col-md-12 col-6'>
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
                  </div>
                </div>
                <div className='col-lg-9 col-md-9'>
                  <h3 className='mt-20 mb-20'>Astronomy Binoculars A Great Alternative</h3>
                  <p className='excert'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should
                    have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some people do not understand why you should have
                    to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the
                    camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who
                    has the willpower to actually sit through a self-imposed
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some people do not understand why you should have
                    to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the
                    camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who
                    has the willpower to actually sit through a self-imposed
                  </p>
                </div>
                <div className='col-lg-12'>
                  <div className='quotes'>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should
                    have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of
                    the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                  </div>
                  <div className='row mt-30 mb-30'>
                    <div className='col-6'>
                      <img className='img-fluid' src={post1img} alt='' />
                    </div>
                    <div className='col-6'>
                      <img className='img-fluid' src={post2img} alt='' />
                    </div>
                    <div className='col-lg-12 mt-30'>
                      <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower.
                      </p>
                      <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='navigation-area'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center'>
                    <div className='thumb'>
                      <a href='#'>
                        <img className='img-fluid' src={previmg} alt='' />
                      </a>
                    </div>
                    <div className='arrow'>
                      <a href='#'>
                        <span className='lnr text-white lnr-arrow-left'></span>
                      </a>
                    </div>
                    <div className='detials'>
                      <p>Prev Post</p>
                      <a href='#'>
                        <h4>Space The Final Frontier</h4>
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center'>
                    <div className='detials'>
                      <p>Next Post</p>
                      <a href='#'>
                        <h4>Telescopes 101</h4>
                      </a>
                    </div>
                    <div className='arrow'>
                      <a href='#'>
                        <span className='lnr text-white lnr-arrow-right'></span>
                      </a>
                    </div>
                    <div className='thumb'>
                      <a href='#'>
                        <img className='img-fluid' src={nextimg} alt='' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='comments-area'>
                <h4>05 Comments</h4>
                <div className='comment-list'>
                  <div className='single-comment justify-content-between d-flex'>
                    <div className='user justify-content-between d-flex'>
                      <div className='thumb'>
                        <img src={c1img} alt='' />
                      </div>
                      <div className='desc'>
                        <h5>
                          <a href='#'>Emilly Blunt</a>
                        </h5>
                        <p className='date'>December 4, 2017 at 3:12 pm </p>
                        <p className='comment'>Never say goodbye till the end comes!</p>
                      </div>
                    </div>
                    <div className='reply-btn'>
                      <a href='' className='btn-reply text-uppercase'>
                        reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className='comment-list left-padding'>
                  <div className='single-comment justify-content-between d-flex'>
                    <div className='user justify-content-between d-flex'>
                      <div className='thumb'>
                        <img src={c2img} alt='' />
                      </div>
                      <div className='desc'>
                        <h5>
                          <a href='#'>Elsie Cunningham</a>
                        </h5>
                        <p className='date'>December 4, 2017 at 3:12 pm </p>
                        <p className='comment'>Never say goodbye till the end comes!</p>
                      </div>
                    </div>
                    <div className='reply-btn'>
                      <a href='' className='btn-reply text-uppercase'>
                        reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className='comment-list left-padding'>
                  <div className='single-comment justify-content-between d-flex'>
                    <div className='user justify-content-between d-flex'>
                      <div className='thumb'>
                        <img src={c3img} alt='' />
                      </div>
                      <div className='desc'>
                        <h5>
                          <a href='#'>Annie Stephens</a>
                        </h5>
                        <p className='date'>December 4, 2017 at 3:12 pm </p>
                        <p className='comment'>Never say goodbye till the end comes!</p>
                      </div>
                    </div>
                    <div className='reply-btn'>
                      <a href='' className='btn-reply text-uppercase'>
                        reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className='comment-list'>
                  <div className='single-comment justify-content-between d-flex'>
                    <div className='user justify-content-between d-flex'>
                      <div className='thumb'>
                        <img src={c4img} alt='' />
                      </div>
                      <div className='desc'>
                        <h5>
                          <a href='#'>Maria Luna</a>
                        </h5>
                        <p className='date'>December 4, 2017 at 3:12 pm </p>
                        <p className='comment'>Never say goodbye till the end comes!</p>
                      </div>
                    </div>
                    <div className='reply-btn'>
                      <a href='' className='btn-reply text-uppercase'>
                        reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className='comment-list'>
                  <div className='single-comment justify-content-between d-flex'>
                    <div className='user justify-content-between d-flex'>
                      <div className='thumb'>
                        <img src={c5img} alt='' />
                      </div>
                      <div className='desc'>
                        <h5>
                          <a href='#'>Ina Hayes</a>
                        </h5>
                        <p className='date'>December 4, 2017 at 3:12 pm </p>
                        <p className='comment'>Never say goodbye till the end comes!</p>
                      </div>
                    </div>
                    <div className='reply-btn'>
                      <a href='' className='btn-reply text-uppercase'>
                        reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='comment-form'>
                <h4>Leave a Comment</h4>
                <form>
                  <div className='form-group form-inline'>
                    <div className='form-group col-lg-6 col-md-12 name'>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Enter Name'
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = 'Enter Name'; }}
                      />
                    </div>
                    <div className='form-group col-lg-6 col-md-12 email'>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Enter email address'
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = 'Enter email address'; }}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='subject'
                      placeholder='Subject'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Subject'; }}
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control mb-10'
                      rows='5'
                      name='message'
                      placeholder='Messege'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Message'; }}
                      required=''
                    ></textarea>
                  </div>
                  <a href='#' className='btn'>
                    Post Comment
                  </a>
                </form>
              </div>
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
                        <a href='blog-home.html'>
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
                        <a href='blog-home.html'>
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
                        <a href='blog-home.html'>
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
                        <a href='blog-home.html'>
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
