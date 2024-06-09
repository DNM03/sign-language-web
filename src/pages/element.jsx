import React from 'react'
import logoImg from '../assets/img/logo.png';
import dImg from '../assets/img/elements/d.jpg';
import f1Img from '../assets/img/elements/f1.jpg';
import f2Img from '../assets/img/elements/f2.jpg';
import f3Img from '../assets/img/elements/f3.jpg';
import f4Img from '../assets/img/elements/f4.jpg';
import f5Img from '../assets/img/elements/f5.jpg';
import f6Img from '../assets/img/elements/f6.jpg';
import f7Img from '../assets/img/elements/f7.jpg';
import f8Img from '../assets/img/elements/f8.jpg';
import g1Img from '../assets/img/elements/g1.jpg';
import g2Img from '../assets/img/elements/g2.jpg';
import g3Img from '../assets/img/elements/g3.jpg';
import g4Img from '../assets/img/elements/g4.jpg';
import g5Img from '../assets/img/elements/g5.jpg';
import g6Img from '../assets/img/elements/g6.jpg';
import g7Img from '../assets/img/elements/g7.jpg';
import g8Img from '../assets/img/elements/g8.jpg';


export default function Element() {
  return (
    <div>
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

      <section className='banner-area'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 banner-right'>
              <h1 className='text-white'>Elements</h1>
              <p className='mx-auto text-white  mt-20 mb-40'>
                In the history of modern astronomy, there is probably no one greater leap forward than the building.
              </p>
              <div className='link-nav'>
                <span className='box'>
                  <a href='index.html'>Home </a>
                  <i className='lnr lnr-arrow-right'></i>
                  <a href='elements.html'>Elements</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sample-text-area'>
        <div className='container'>
          <h3 className='text-heading'>Text Sample</h3>
          <p className='sample-text'>
            Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary, or
            short film to show off their creative prowess. Many have great ideas and want to “wow” the
            <sup>Superscript</sup> scene, or video renters with their big project. But once you have the
            <sub>Subscript</sub> “in the can” (no easy feat), how do you move from a <del>Strike</del> through of master
            DVDs with the <u>“Underline”</u> marked hand-written title inside a secondhand CD case, to a pile of
            cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your
            doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full
            service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to
            ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to
            follow for good DVD replication results:
          </p>
        </div>
      </section>

      <section className='button-area'>
        <div className='container border-top-generic'>
          <h3 className='text-heading'>Sample Buttons</h3>
          <div className='button-group-area'>
            <a href='#' className='genric-btn default'>
              Default
            </a>
            <a href='#' className='genric-btn primary'>
              Primary
            </a>
            <a href='#' className='genric-btn success'>
              Success
            </a>
            <a href='#' className='genric-btn info'>
              Info
            </a>
            <a href='#' className='genric-btn warning'>
              Warning
            </a>
            <a href='#' className='genric-btn danger'>
              Danger
            </a>
            <a href='#' className='genric-btn link'>
              Link
            </a>
            <a href='#' className='genric-btn disable'>
              Disable
            </a>
          </div>
          <div className='button-group-area mt-10'>
            <a href='#' className='genric-btn default-border'>
              Default
            </a>
            <a href='#' className='genric-btn primary-border'>
              Primary
            </a>
            <a href='#' className='genric-btn success-border'>
              Success
            </a>
            <a href='#' className='genric-btn info-border'>
              Info
            </a>
            <a href='#' className='genric-btn warning-border'>
              Warning
            </a>
            <a href='#' className='genric-btn danger-border'>
              Danger
            </a>
            <a href='#' className='genric-btn link-border'>
              Link
            </a>
            <a href='#' className='genric-btn disable'>
              Disable
            </a>
          </div>
          <div className='button-group-area mt-40'>
            <a href='#' className='genric-btn default radius'>
              Default
            </a>
            <a href='#' className='genric-btn primary radius'>
              Primary
            </a>
            <a href='#' className='genric-btn success radius'>
              Success
            </a>
            <a href='#' className='genric-btn info radius'>
              Info
            </a>
            <a href='#' className='genric-btn warning radius'>
              Warning
            </a>
            <a href='#' className='genric-btn danger radius'>
              Danger
            </a>
            <a href='#' className='genric-btn link radius'>
              Link
            </a>
            <a href='#' className='genric-btn disable radius'>
              Disable
            </a>
          </div>
          <div className='button-group-area mt-10'>
            <a href='#' className='genric-btn default-border radius'>
              Default
            </a>
            <a href='#' className='genric-btn primary-border radius'>
              Primary
            </a>
            <a href='#' className='genric-btn success-border radius'>
              Success
            </a>
            <a href='#' className='genric-btn info-border radius'>
              Info
            </a>
            <a href='#' className='genric-btn warning-border radius'>
              Warning
            </a>
            <a href='#' className='genric-btn danger-border radius'>
              Danger
            </a>
            <a href='#' className='genric-btn link-border radius'>
              Link
            </a>
            <a href='#' className='genric-btn disable radius'>
              Disable
            </a>
          </div>
          <div className='button-group-area mt-40'>
            <a href='#' className='genric-btn default circle'>
              Default
            </a>
            <a href='#' className='genric-btn primary circle'>
              Primary
            </a>
            <a href='#' className='genric-btn success circle'>
              Success
            </a>
            <a href='#' className='genric-btn info circle'>
              Info
            </a>
            <a href='#' className='genric-btn warning circle'>
              Warning
            </a>
            <a href='#' className='genric-btn danger circle'>
              Danger
            </a>
            <a href='#' className='genric-btn link circle'>
              Link
            </a>
            <a href='#' className='genric-btn disable circle'>
              Disable
            </a>
          </div>
          <div className='button-group-area mt-10'>
            <a href='#' className='genric-btn default-border circle'>
              Default
            </a>
            <a href='#' className='genric-btn primary-border circle'>
              Primary
            </a>
            <a href='#' className='genric-btn success-border circle'>
              Success
            </a>
            <a href='#' className='genric-btn info-border circle'>
              Info
            </a>
            <a href='#' className='genric-btn warning-border circle'>
              Warning
            </a>
            <a href='#' className='genric-btn danger-border circle'>
              Danger
            </a>
            <a href='#' className='genric-btn link-border circle'>
              Link
            </a>
            <a href='#' className='genric-btn disable circle'>
              Disable
            </a>
          </div>
          <div className='button-group-area mt-40'>
            <a href='#' className='genric-btn default circle arrow'>
              Default<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn primary circle arrow'>
              Primary<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn success circle arrow'>
              Success<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn info circle arrow'>
              Info<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn warning circle arrow'>
              Warning<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn danger circle arrow'>
              Danger<span className='lnr lnr-arrow-right'></span>
            </a>
          </div>
          <div className='button-group-area mt-10'>
            <a href='#' className='genric-btn default-border circle arrow'>
              Default<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn primary-border circle arrow'>
              Primary<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn success-border circle arrow'>
              Success<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn info-border circle arrow'>
              Info<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn warning-border circle arrow'>
              Warning<span className='lnr lnr-arrow-right'></span>
            </a>
            <a href='#' className='genric-btn danger-border circle arrow'>
              Danger<span className='lnr lnr-arrow-right'></span>
            </a>
          </div>
          <div className='button-group-area mt-40'>
            <a href='#' className='genric-btn primary e-large'>
              Extra Large
            </a>
            <a href='#' className='genric-btn success large'>
              Large
            </a>
            <a href='#' className='genric-btn primary'>
              Default
            </a>
            <a href='#' className='genric-btn success medium'>
              Medium
            </a>
            <a href='#' className='genric-btn primary small'>
              Small
            </a>
          </div>
          <div className='button-group-area mt-10'>
            <a href='#' className='genric-btn primary-border e-large'>
              Extra Large
            </a>
            <a href='#' className='genric-btn success-border large'>
              Large
            </a>
            <a href='#' className='genric-btn primary-border'>
              Default
            </a>
            <a href='#' className='genric-btn success-border medium'>
              Medium
            </a>
            <a href='#' className='genric-btn primary-border small'>
              Small
            </a>
          </div>
        </div>
      </section>

      <div className='whole-wrap'>
        <div className='container'>
          <div className='section-top-border'>
            <h3 className='mb-30'>Left Aligned</h3>
            <div className='row'>
              <div className='col-md-3'>
                <img src={dImg} alt='' className='img-fluid' />
              </div>
              <div className='col-md-9 mt-sm-20'>
                <p>
                  Recently, the US Federal government banned online casinos from operating in America by making it
                  illegal to transfer money to them through any US bank or payment system. As a result of this law, most
                  of the popular online casino networks such as Party Gaming and PlayTech left the United States.
                  Overnight, online casino players found themselves being chased by the Federal government. But, after a
                  fortnight, the online casino industry came up with a solution and new online casinos started taking
                  root. These began to operate under a different business umbrella, and by doing that, rendered the
                  transfer of money to and from them legal. A major part of this was enlisting electronic banking
                  systems that would accept this new clarification and start doing business with me. Listed in this
                  article are the electronic banking systems that accept players from the United States that wish to
                  play in online casinos.
                </p>
              </div>
            </div>
          </div>
          <div className='section-top-border text-right'>
            <h3 className='mb-30'>Right Aligned</h3>
            <div className='row'>
              <div className='col-md-9'>
                <p className='text-right'>
                  Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do
                  something to prevent it. The reason why has less to do with how computers are made and how they age
                  and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from
                  running programs to downloading and deleting software can make our computer sluggish. To keep this
                  from happening, you need to understand the reasons why your PC is getting slower and do something to
                  keep your PC running at its best. You can do this through regular maintenance and PC performance
                  optimization programs
                </p>
                <p className='text-right'>
                  Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little
                  about what symptoms
                </p>
              </div>
              <div className='col-md-3'>
                <img src={dImg} alt='' className='img-fluid' />
              </div>
            </div>
          </div>
          <div className='section-top-border'>
            <h3 className='mb-30'>Definition</h3>
            <div className='row'>
              <div className='col-md-4'>
                <div className='single-defination'>
                  <h4 className='mb-20'>Definition 01</h4>
                  <p>
                    Recently, the US Federal government banned online casinos from operating in America by making it
                    illegal to transfer money to them through any US bank or payment system. As a result of this law,
                    most of the popular online casino networks
                  </p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='single-defination'>
                  <h4 className='mb-20'>Definition 02</h4>
                  <p>
                    Recently, the US Federal government banned online casinos from operating in America by making it
                    illegal to transfer money to them through any US bank or payment system. As a result of this law,
                    most of the popular online casino networks
                  </p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='single-defination'>
                  <h4 className='mb-20'>Definition 03</h4>
                  <p>
                    Recently, the US Federal government banned online casinos from operating in America by making it
                    illegal to transfer money to them through any US bank or payment system. As a result of this law,
                    most of the popular online casino networks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='section-top-border'>
            <h3 className='mb-30'>Block Quotes</h3>
            <div className='row'>
              <div className='col-lg-12'>
                <blockquote className='generic-blockquote'>
                  “Recently, the US Federal government banned online casinos from operating in America by making it
                  illegal to transfer money to them through any US bank or payment system. As a result of this law, most
                  of the popular online casino networks such as Party Gaming and PlayTech left the United States.
                  Overnight, online casino players found themselves being chased by the Federal government. But, after a
                  fortnight, the online casino industry came up with a solution and new online casinos started taking
                  root. These began to operate under a different business umbrella, and by doing that, rendered the
                  transfer of money to and from them legal. A major part of this was enlisting electronic banking
                  systems that would accept this new clarification and start doing business with me. Listed in this
                  article are the electronic banking”
                </blockquote>
              </div>
            </div>
          </div>
          <div className='section-top-border'>
            <h3 className='mb-30'>Table</h3>
            <div className='progress-table-wrap'>
              <div className='progress-table'>
                <div className='table-head'>
                  <div className='serial'>#</div>
                  <div className='country'>Countries</div>
                  <div className='visit'>Visits</div>
                  <div className='percentage'>Percentages</div>
                </div>
                <div className='table-row'>
                  <div className='serial'>01</div>
                  <div className='country'>
                    {' '}
                    <img src={f1Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-1'
                        role='progressbar'
                        style={{width: '80%'}}
                        aria-valuenow='80'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='serial'>02</div>
                  <div className='country'>
                    {' '}
                    <img src={f2Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-2'
                        role='progressbar'
                        style={{width: '30%'}}
                        aria-valuenow='30'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='serial'>03</div>
                  <div className='country'>
                    {' '}
                    <img src={f3Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-3'
                        role='progressbar'
                        style={{width: '55%'}}
                        aria-valuenow='55'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='serial'>04</div>
                  <div className='country'>
                    {' '}
                    <img src={f4Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-4'
                        role='progressbar'
                        style={{width: '60%'}}
                        aria-valuenow='60'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='serial'>05</div>
                  <div className='country'>
                    {' '}
                    <img src={f5Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-5'
                        role='progressbar'
                        style={{width: '40%'}}
                        aria-valuenow='40'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='serial'>06</div>
                  <div className='country'>
                    {' '}
                    <img src={f6Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-6'
                        role='progressbar'
                        style={{width: '70%'}}
                        aria-valuenow='70'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='serial'>07</div>
                  <div className='country'>
                    {' '}
                    <img src={f7Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-7'
                        role='progressbar'
                        style={{width: '30%'}}
                        aria-valuenow='30'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='table-row'>
                  <div className='serial'>08</div>
                  <div className='country'>
                    {' '}
                    <img src={f8Img} alt='flag' />
                    Canada
                  </div>
                  <div className='visit'>645032</div>
                  <div className='percentage'>
                    <div className='progress'>
                      <div
                        className='progress-bar color-8'
                        role='progressbar'
                        style={{width: '60%'}}
                        aria-valuenow='60'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section-top-border'>
            <h3>Image Gallery</h3>
            <div className='row gallery-item'>
              <div className='col-md-4'>
                <a href={g1Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g1Img})`}}></div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={g2Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g2Img})`}}></div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={g3Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g3Img})`}}></div>
                </a>
              </div>
              <div className='col-md-6'>
                <a href={g4Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g4Img})`}}></div>
                </a>
              </div>
              <div className='col-md-6'>
                <a href={g5Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g5Img})`}}></div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={g6Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g6Img})`}}></div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={g7Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g7Img})`}}></div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={g8Img} className='img-pop-up'>
                  <div className='single-gallery-image' style={{background: `url(${g8Img})`}}></div>
                </a>
              </div>
            </div>
          </div>
          <div className='section-top-border'>
            <div className='row'>
              <div className='col-md-4'>
                <h3 className='mb-20'>Image Gallery</h3>
                <div className='typography'>
                  <h1>This is header 01</h1>
                  <h2>This is header 02</h2>
                  <h3>This is header 03</h3>
                  <h4>This is header 04</h4>
                  <h5>This is header 05</h5>
                  <h6>This is header 06</h6>
                </div>
              </div>
              <div className='col-md-4 mt-sm-30'>
                <h3 className='mb-20'>Unordered List</h3>
                <div className=''>
                  <ul className='unordered-list'>
                    <li>Fta Keys</li>
                    <li>For Women Only Your Computer Usage</li>
                    <li>
                      Facts Why Inkjet Printing Is Very Appealing
                      <ul>
                        <li>
                          Addiction When Gambling Becomes
                          <ul>
                            <li>Protective Preventative Maintenance</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>Dealing With Technical Support 10 Useful Tips</li>
                    <li>Make Myspace Your Best Designed Space</li>
                    <li>Cleaning And Organizing Your Computer</li>
                  </ul>
                </div>
              </div>
              <div className='col-md-4 mt-sm-30'>
                <h3 className='mb-20'>Ordered List</h3>
                <div className=''>
                  <ol className='ordered-list'>
                    <li>
                      <span>Fta Keys</span>
                    </li>
                    <li>
                      <span>For Women Only Your Computer Usage</span>
                    </li>
                    <li>
                      <span>Facts Why Inkjet Printing Is Very Appealing</span>
                      <ol className='ordered-list-alpha'>
                        <li>
                          <span>Addiction When Gambling Becomes</span>
                          <ol className='ordered-list-roman'>
                            <li>
                              <span>Protective Preventative Maintenance</span>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <span>Dealing With Technical Support 10 Useful Tips</span>
                    </li>
                    <li>
                      <span>Make Myspace Your Best Designed Space</span>
                    </li>
                    <li>
                      <span>Cleaning And Organizing Your Computer</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className='section-top-border'>
            <div className='row'>
              <div className='col-lg-8 col-md-8'>
                <h3 className='mb-30'>Form Element</h3>
                <form action='#'>
                  <div className='mt-10'>
                    <input
                      type='text'
                      name='first_name'
                      placeholder='First Name'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'First Name'; }}
                      required
                      className='single-input'
                    />
                  </div>
                  <div className='mt-10'>
                    <input
                      type='text'
                      name='last_name'
                      placeholder='Last Name'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Last Name'; }}
                      required
                      className='single-input'
                    />
                  </div>
                  <div className='mt-10'>
                    <input
                      type='text'
                      name='last_name'
                      placeholder='Last Name'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Last Name'; }}
                      required
                      className='single-input'
                    />
                  </div>
                  <div className='mt-10'>
                    <input
                      type='email'
                      name='EMAIL'
                      placeholder='Email address'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Email address'; }}
                      required
                      className='single-input'
                    />
                  </div>
                  <div className='input-group-icon mt-10'>
                    <div className='icon'>
                      <i className='fa fa-thumb-tack' aria-hidden="true"></i>
                    </div>
                    <input
                      type='text'
                      name='address'
                      placeholder='Address'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Address'; }}
                      required
                      className='single-input'
                    />
                  </div>
                  <div className='input-group-icon mt-10'>
                    <div className='icon'>
                      <i className='fa fa-plane' aria-hidden='true'></i>
                    </div>
                    <div className='form-select' id='default-select'>
                      <select>
                        <option
                          defaultValue=' 1
								 '
                        >
                          City
                        </option>
                        <option defaultValue=' 1 '>Dhaka</option>
                        <option
                          defaultValue=' 1
								 '
                        >
                          Dilli
                        </option>
                        <option defaultValue=' 1 '>Newyork</option>
                        <option
                          defaultValue=' 1
								 '
                        >
                          Islamabad
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    className='
								 input-group-icon mt-10 '
                  >
                    <div className=' icon '>
                      <i
                        className=' fa fa-globe '
                        aria-hidden=' true
								 '
                      ></i>
                    </div>
                    <div
                      className=' form-select '
                      id=' default-select
								 '
                    >
                      <select>
                        <option defaultValue=' 1'>Country</option>
                        <option defaultValue='1'>Bangladesh</option>
                        <option defaultValue='1'>India</option>
                        <option defaultValue='1'>England</option>
                        <option defaultValue='1'>Srilanka</option>
                      </select>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <textarea
                      className='single-textarea'
                      placeholder='Message'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Message'; }}
                      required
                    ></textarea>
                  </div>
                  {/* <!-- For Gradient Border Use --> */}
                  <div className='mt-10'>
                    <div className='primary-input'>
                      <input
                        id='primary-input'
                        type='text'
                        name='first_name'
                        placeholder='Primary color'
                        onFocus={(e) => { e.target.placeholder = ''; }}
                        onBlur={(e) => { e.target.placeholder = 'Primary color'; }}
                      />
                      <label htmlFor='primary-input'></label>
                    </div>
                  </div>
                  <div className='mt-10'>
                    <input
                      type='text'
                      name='first_name'
                      placeholder='Primary color'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Primary color'; }}
                      required
                      className='single-input-primary'
                    />
                  </div>
                  <div className='mt-10'>
                    <input
                      type='text'
                      name='first_name'
                      placeholder='Accent color'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Accent color'; }}
                      required
                      className='single-input-accent'
                    />
                  </div>
                  <div className='mt-10'>
                    <input
                      type='text'
                      name='first_name'
                      placeholder='Secondary color'
                      onFocus={(e) => { e.target.placeholder = ''; }}
                      onBlur={(e) => { e.target.placeholder = 'Secondary color'; }}
                      required
                      className='single-input-secondary'
                    />
                  </div>
                </form>
              </div>
              <div className='col-lg-3 col-md-4 mt-sm-30'>
                <div className='single-element-widget'>
                  <h3 className='mb-30'>Switches</h3>
                  <div className='switch-wrap d-flex justify-content-between'>
                    <p>01. Sample Switch</p>
                    <div className='primary-switch'>
                      <input type='checkbox' id='default-switch' />
                      <label htmlFor='default-switch'></label>
                    </div>
                  </div>
                  <div className='switch-wrap d-flex justify-content-between'>
                    <p>02. Primary Color Switch</p>
                    <div className='primary-switch'>
                      <input type='checkbox' id='primary-switch' defaultChecked />
                      <label htmlFor='primary-switch'></label>
                    </div>
                  </div>
                  <div className='switch-wrap d-flex justify-content-between'>
                    <p>03. Confirm Color Switch</p>
                    <div className='confirm-switch'>
                      <input type='checkbox' id='confirm-switch' defaultChecked />
                      <label htmlFor='confirm-switch'></label>
                    </div>
                  </div>
                </div>
                <div className='single-element-widget mt-30'>
                  <h3 className='mb-30'>Selectboxes</h3>
                  <div className='default-select' id='default-select'>
                    <select>
                      <option
                        defaultValue=' 1
							 '
                      >
                        English
                      </option>
                      <option defaultValue=' 1 '>Spanish</option>
                      <option
                        defaultValue=' 1
							 '
                      >
                        Arabic
                      </option>
                      <option defaultValue=' 1 '>Portuguise</option>
                      <option
                        defaultValue=' 1
							 '
                      >
                        Bengali
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  className='
							 single-element-widget mt-30 '
                >
                  <h3 className=' mb-30 '>Checkboxes</h3>
                  <div
                    className=' switch-wrap
							 d-flex justify-content-between '
                  >
                    <p>01. Sample Checkbox</p>
                    <div
                      className=' primary-checkbox
							 '
                    >
                      <input type=' checkbox ' id=' default-checkbox ' />
                      <label
                        htmlFor=' default-checkbox
							 '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>02. Primary Color Checkbox</p>
                    <div
                      className=' primary-checkbox
							 '
                    >
                      <input type=' checkbox ' id=' primary-checkbox ' defaultChecked />
                      <label
                        htmlFor='
							 primary-checkbox '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex
							 justify-content-between '
                  >
                    <p>03. Confirm Color Checkbox</p>
                    <div
                      className=' confirm-checkbox
							 '
                    >
                      <input type=' checkbox ' id=' confirm-checkbox ' />
                      <label
                        htmlFor=' confirm-checkbox
							 '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>04. Disabled Checkbox</p>
                    <div className=' disabled-checkbox '>
                      <input
                        type='
							 checkbox '
                        id=' disabled-checkbox '
                        disabled
                      />
                      <label
                        htmlFor=' disabled-checkbox
							 '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>05. Disabled Checkbox active</p>
                    <div
                      className=' disabled-checkbox
							 '
                    >
                      <input
                        type=' checkbox '
                        id=' disabled-checkbox-active
							 '
                        defaultChecked
                        disabled
                      />
                      <label
                        htmlFor=' disabled-checkbox-active
							 '
                      ></label>
                    </div>
                  </div>
                </div>
                <div
                  className=' single-element-widget mt-30
							 '
                >
                  <h3 className=' mb-30 '>Radios</h3>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>01. Sample radio</p>
                    <div className=' primary-radio '>
                      <input
                        type=' checkbox
							 '
                        id=' default-radio '
                      />
                      <label
                        htmlFor=' default-radio
							 '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>02. Primary Color radio</p>
                    <div className=' primary-radio '>
                      <input
                        type='
							 checkbox '
                        id=' primary-radio '
                        defaultChecked
                      />
                      <label
                        htmlFor=' primary-radio
							 '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>03. Confirm Color radio</p>
                    <div className=' confirm-radio '>
                      <input
                        type='
							 checkbox '
                        id=' confirm-radio '
                        defaultChecked
                      />
                      <label
                        htmlFor=' confirm-radio
							 '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>04. Disabled radio</p>
                    <div className=' disabled-radio '>
                      <input
                        type='
							 checkbox '
                        id=' disabled-radio '
                        disabled
                      />
                      <label
                        htmlFor=' disabled-radio
							 '
                      ></label>
                    </div>
                  </div>
                  <div
                    className=' switch-wrap d-flex justify-content-between
							 '
                  >
                    <p>05. Disabled radio active</p>
                    <div className=' disabled-radio '>
                      <input
                        type='
							 checkbox '
                        id=' disabled-radio-active '
                        defaultChecked
                        disabled
                      />
                      <label
                        htmlFor=' disabled-radio-active
							 '
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Align Area -->

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
    </div>
  )
}
