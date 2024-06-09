import React from 'react'
import logoImg from '../assets/img/logo.png';
import coursesimg from '../assets/img/courses/course-details.jpg';
import c1img from '../assets/img/blog/c1.jpg';
import c2img from '../assets/img/blog/c2.jpg';
import c3img from '../assets/img/blog/c3.jpg';

export default function CoursesDetail() {
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
              <h1 className='text-white'>Course Details</h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
                In the history of modern astronomy, there is probably no one greater leap forward than the building.
              </p>
              <div className='link-nav'>
                <span className='box'>
                  <a href='index.html'>Home </a>
                  <i className='lnr lnr-arrow-right'></i>
                  <a href='courses.html'>Courses </a>
                  <i className='lnr lnr-arrow-right'></i>
                  <a href='course-details.html'>Course Details</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================ End banner Area ================= -->

    <!--================ Start Course Details Area =================--> */}
      <section className='course-details-area section-gap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 course-details-left'>
              <div className='main-image'>
                <img className='img-fluid' src={coursesimg} alt='' />
              </div>
              <div className='content-wrapper'>
                <h4 className='title'>Objectives</h4>
                <div className='content'>
                  When you enter into any new area of science, you almost always find yourself with a baffling new
                  language of technical terms to learn before you can converse with the experts. This is certainly true
                  in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the
                  trade, the most prevalent being the telescope.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.
                </div>

                <h4 className='title'>Eligibility</h4>
                <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.
                </div>

                <h4 className='title'>Course Outline</h4>
                <div className='content'>
                  <ul className='course-list'>
                    <li className='justify-content-between d-flex'>
                      <p>Introduction Lesson</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Basics of HTML</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Getting Know about HTML</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Tags and Attributes</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Basics of CSS</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Getting Familiar with CSS</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Introduction to Bootstrap</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Responsive Design</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                    <li className='justify-content-between d-flex'>
                      <p>Canvas in HTML 5</p>
                      <a className='btn text-uppercase' href='#'>
                        View Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 right-contents'>
              <ul>
                <li>
                  <a className='justify-content-between d-flex' href='#'>
                    <p>Trainer’s Name</p>
                    <span className='or'>George Mathews</span>
                  </a>
                </li>
                <li>
                  <a className='justify-content-between d-flex' href='#'>
                    <p>Course Fee </p>
                    <span>$230</span>
                  </a>
                </li>
                <li>
                  <a className='justify-content-between d-flex' href='#'>
                    <p>Available Seats </p>
                    <span>15</span>
                  </a>
                </li>
                <li>
                  <a className='justify-content-between d-flex' href='#'>
                    <p>Schedule </p>
                    <span>2.00 pm to 4.00 pm</span>
                  </a>
                </li>
              </ul>
              <a href='#' className='btn text-uppercase enroll'>
                Enroll the course
              </a>

              <h4 className='title'>Reviews</h4>
              <div className='content'>
                <div className='review-top row pt-40'>
                  <div className='col-lg-12'>
                    <h6 className='mb-15'>Provide Your Rating</h6>
                    <div className='d-flex flex-row reviews justify-content-between'>
                      <span>Quality</span>
                      <div className='star'>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className='d-flex flex-row reviews justify-content-between'>
                      <span>Puncuality</span>
                      <div className='star'>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className='d-flex flex-row reviews justify-content-between'>
                      <span>Quality</span>
                      <div className='star'>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star checked'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <span>Outstanding</span>
                    </div>
                  </div>
                </div>
                <div className='feedeback'>
                  <h6 className='mb-10'>Your Feedback</h6>
                  <textarea name='feedback' className='form-control' cols='10' rows='10'></textarea>
                  <div className='mt-10 text-right'>
                    <a href='#' className='btn text-center text-uppercase enroll'>
                      Submit
                    </a>
                  </div>
                </div>
                <div className='comments-area mb-30'>
                  <div className='comment-list'>
                    <div className='single-comment single-reviews justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src={c1img} alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Emilly Blunt</a>
                            <div className='star'>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star'></span>
                              <span className='fa fa-star'></span>
                            </div>
                          </h5>
                          <p className='comment'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='comment-list'>
                    <div className='single-comment single-reviews justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src={c2img} alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Elsie Cunningham</a>
                            <div className='star'>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star'></span>
                              <span className='fa fa-star'></span>
                            </div>
                          </h5>
                          <p className='comment'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='comment-list'>
                    <div className='single-comment single-reviews justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src={c3img} alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Maria Luna</a>
                            <div className='star'>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star checked'></span>
                              <span className='fa fa-star'></span>
                              <span className='fa fa-star'></span>
                            </div>
                          </h5>
                          <p className='comment'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Course Details Area =================-->

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
