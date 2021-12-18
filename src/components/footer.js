import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import cx from 'classnames'

function Footer() {
  const location = useLocation()
  // const { series } = useStaticQuery(graphql`
  //   {
  //     series: allGraphCmsContentSetting {
  //       nodes {
  //         seriesPlural {
  //           remoteId
  //           title
  //           slug
  //         }
  //       }
  //     }
      
  //   }
  // `)



  return (
     
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/about" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Biography
                </Link>
              </li>
              <li>
                <Link to="/faq" aria-label="" className="text-gray-600 hover:text-gray-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/critical-acclaim" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Critical Acclaim
                </Link>
              </li>
              <li>
                <Link to="/tips-for-writers" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Tips For Writers
                </Link>
              </li>
              {/* <li>
                <Link to="/philanthropy" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Philanthropy
                </Link>
              </li> */}
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <Link to="/series" ><h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BOOKS</h2></Link>
            <nav className="list-none mb-10">
                  <li><Link to="/series#latest-release" aria-label="">
                    Latest Release
                  </Link></li>
                  <li><Link to="/series#upcoming" aria-label="">
                    Upcoming
                  </Link></li>
                  <li><Link to="/series#sigma-series" aria-label="">
                    Sigma Series
                  </Link></li>
                  <li><Link to="/series#individual-adventures" aria-label="">
                    Individual Adventures
                  </Link></li>
                  <li><Link to="/series#moonfall-saga" aria-label="">
                    Moonfall Saga
                  </Link></li>
                  <li><Link to="/series#tucker-wayne-series" aria-label="">
                    The Order of the Sanguines
                  </Link></li>
                  <li><Link to="/series#jake-ransom" aria-label="">
                    Jake Ransom
                  </Link></li>
                  <li><Link to="/series#short-stories" aria-label="">
                    Short Stories
                  </Link></li>
                  <li><Link to="/series#anthologies" aria-label="">
                    Anthologies
                  </Link></li>
                  <li><Link to="/series#collaborations" aria-label="">
                    Collaborations
                  </Link></li>

            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MEDIA</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/videos" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/photos" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Photos
                </Link>
              </li>
              <li>
                <Link to="/audio" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Audio
                </Link>
              </li>
              <li>
                <Link to="/" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Instagram Feed
                </Link>
              </li>
              <li>
                <Link to="/" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Facebook Feed
                </Link>
              </li>
              <li>
                <Link to="/" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Twitter Feed
                </Link>
              </li>
              <li>
                <Link to="/" aria-label="" className="text-gray-600 hover:text-gray-800">
                  YouTube Feed
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">EXTRAS</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/downloads" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/exclusives" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Exclusives
                </Link>
              </li>
              <li>
                <Link to="/reader-guides" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Reader Guides
                </Link>
              </li>
              <li>
                <Link to="/promotions" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/buy" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Buy Books
                </Link>
              </li>
              <li>
                <Link to="/merchandise" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link to="/community" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Community
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NEWS &amp; EVENTS</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/news" aria-label="" className="text-gray-600 hover:text-gray-800">
                  News
                </Link>
              </li>
              <li>
                <Link to="/news#upcoming" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/news#past" aria-label="" className="text-gray-600 hover:text-gray-800">
                  Past Events
                </Link>    
              </li>              
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT</h2>
            <nav className="list-none mb-10 text-gray-600 hover:text-gray-900">
              <li>
                <Link to="/ask-jim" aria-label="">
                  Ask Jim
                </Link>
              </li>
              <li>
                <Link to="/newsletter" aria-label="">
                  Newsletter Sign-Up
                </Link>
              </li>
              <li>
                <Link to="/autographs" aria-label="">
                  Autographs
                </Link>
              </li>
              <li>
                <Link to="/contribute" aria-label="">
                  Contribute
                </Link>
              </li>
              <li>
                <Link to="/requests" aria-label="">
                  Requests
                </Link>
              </li>
              <li>
                <Link to="/news-media" aria-label="">
                  News Media
                </Link>
              </li>
              <li>
                <Link to="/publishers-info" aria-label="">
                  Publishers Info
                </Link>
              </li>
              <li>
                <Link to="/press-kit" aria-label="">
                  Press Kit
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label for="footer-field" className="leading-7 text-sm text-gray-600">Sign-up for exclusives and updates</label>
              <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black hover:border-black hover:border-2 hover:border-opacity-100 rounded">Subscribe</button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center"></p>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} James Rollins —
            <a href="https://twitter.com/jamesrollins" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@jamesrollins</a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm italic">"He knew he would say too much if he said too little."</span>
        </div>
      </div>
    </footer>

  )
}

export default Footer
