import React from 'react'
import logoImg from '../assets/img/logo.png';
import p1Img from '../assets/img/popular-course/p1.jpg'
import p2Img from '../assets/img/popular-course/p2.jpg'
import p3Img from '../assets/img/popular-course/p3.jpg'
import p4Img from '../assets/img/popular-course/p4.jpg'


export default function Courses() {
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
              <h1 className='text-white'>Courses</h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
                In the history of modern astronomy, there is probably no one greater leap forward than the building.
              </p>
              <div className='link-nav'>
                <span className='box'>
                  <a href='index.html'>Home </a>
                  <i className='lnr lnr-arrow-right'></i>
                  <a href='courses.html'>Courses</a>
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
                  <h4>New classNamees</h4>
                  <p>In the history of modern astronomy, there is probably no one greater leap forward.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='feature-item d-flex'>
                <i className='ti-cup'></i>
                <div className='ml-20'>
                  <h4>Top Courses</h4>
                  <p>In the history of modern astronomy, there is probably no one greater leap forward.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='feature-item d-flex border-right-0'>
                <i className='ti-desktop'></i>
                <div className='ml-20'>
                  <h4>Full E-Books</h4>
                  <p>In the history of modern astronomy, there is probably no one greater leap forward.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End Feature Area ================= -->

  <!-- ================ Start Popular Course Area ================= --> */}
      <section className='popular-course-area section-gap'>
        <div className='container-fluid'>
          <div className='row justify-content-center section-title'>
            <div className='col-lg-12'>
              <h2>
                Popular Courses <br />
                Available Right Now
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className='owl-carousel popuar-course-carusel'>
            <div className='single-popular-course'>
              <div className='thumb'>
                <img className='f-img img-fluid mx-auto' src={p1Img} alt='' />
              </div>
              <div className='details'>
                <div className='d-flex justify-content-between mb-20'>
                  <p className='name'>programming language</p>
                  <p className='value'>$150</p>
                </div>
                <a href='#'>
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className='bottom d-flex mt-15'>
                  <ul className='list'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                  </ul>
                  <p className='ml-20'>25 Reviews</p>
                </div>
              </div>
            </div>

            <div className='single-popular-course'>
              <div className='thumb'>
                <img className='f-img img-fluid mx-auto' src={p2Img} alt='' />
              </div>
              <div className='details'>
                <div className='d-flex justify-content-between mb-20'>
                  <p className='name'>programming language</p>
                  <p className='value'>$150</p>
                </div>
                <a href='#'>
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className='bottom d-flex mt-15'>
                  <ul className='list'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                  </ul>
                  <p className='ml-20'>25 Reviews</p>
                </div>
              </div>
            </div>

            <div className='single-popular-course'>
              <div className='thumb'>
                <img className='f-img img-fluid mx-auto' src={p3Img} alt='' />
              </div>
              <div className='details'>
                <div className='d-flex justify-content-between mb-20'>
                  <p className='name'>programming language</p>
                  <p className='value'>$150</p>
                </div>
                <a href='#'>
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className='bottom d-flex mt-15'>
                  <ul className='list'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                  </ul>
                  <p className='ml-20'>25 Reviews</p>
                </div>
              </div>
            </div>

            <div className='single-popular-course'>
              <div className='thumb'>
                <img className='f-img img-fluid mx-auto' src={p4Img} alt='' />
              </div>
              <div className='details'>
                <div className='d-flex justify-content-between mb-20'>
                  <p className='name'>programming language</p>
                  <p className='value'>$150</p>
                </div>
                <a href='#'>
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className='bottom d-flex mt-15'>
                  <ul className='list'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-star'></i>
                      </a>
                    </li>
                  </ul>
                  <p className='ml-20'>25 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End Popular Course Area ================= -->

  <!-- ================ Start Registration Area ================= --> */}
      <section className='registration-area'>
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
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Name'; }}
                    />
                  </div>
                  <div className='form-group col-md-12'>
                    <input
                      type='text'
                      className='form-control'
                      id='subject'
                      name='subject'
                      placeholder='Phone Number'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Phone Number'; }}
                    />
                  </div>
                  <div className='form-group col-md-12'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      placeholder='Email Address'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Email Address'; }}
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
      </section>
      {/* <!-- ================ End Registration Area ================= -->

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
                  If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                  You may see some for as low as $.17 each.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='other-feature-item'>
                <i className='ti-key'></i>
                <h4>Lifetime Access</h4>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
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
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--260'>
              <div className='other-feature-item'>
                <i className='ti-medall-alt'></i>
                <h4>Student Membership</h4>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='other-feature-item'>
                <i className='ti-briefcase'></i>
                <h4>35000+ Courses</h4>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt--160'>
              <div className='other-feature-item'>
                <i className='ti-crown'></i>
                <h4>Expert Mentors</h4>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
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
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End Feature Area ================= -->

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
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This
              template is made with <i className='fa fa-heart-o' aria-hidden='true'></i> by{' '}
              <a href='https://colorlib.com' target='_blank'>
                Colorlib
              </a>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
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
