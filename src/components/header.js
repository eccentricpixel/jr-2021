import React, { useEffect, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { globalHistory, useLocation } from '@reach/router'
import cx from 'classnames'

import Logo from '../svg/white-logo.svg'
import Transition from './transition'

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()
  const { series } = useStaticQuery(graphql`
    {
      series: allGraphCmsContentSetting {
        nodes {
          seriesPlural {
            remoteId
            title
            slug
          }
        }
      }
      
    }
  `)

  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === 'PUSH') setMobileNavOpen(false)
      }),
    [setMobileNavOpen]
  )

  const toggleMobileNavOpen = () => setMobileNavOpen((open) => !open)
  
  return (
    <header className="py-5 px-5 absolute z-50 w-full bg-gradient-to-r from-gray-600 via-transparent sticky top-0">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start w-screen">
        <div className="flex items-center flex-grow flex-shrink-0">
          <div className="flex items-center justify-between w-full">
            <Link to="/" aria-label="Home">
              <Logo className="h-10" />              
            </Link>
            <div className="-mr-2 flex items-center">
              <button
                onClick={() => toggleMobileNavOpen()}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:ml-10 md:pr-4 space-x-8">
          
        </div>
      </nav>
      <Transition
        show={mobileNavOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="bg-black w-screen h-screen absolute top-0 left-0 text-white bg-opacity-80">
          <div id="closeMainMenu" className="-mr-2 flex items-center absolute top-5 right-8">
              <button
                onClick={() => toggleMobileNavOpen()}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          <div class="container px-5 py-10 mx-auto">
            <div class="text-center mb-10 mx-auto max-w-7xl">
              <Link to="/" aria-label="Home">
                <Logo className="h-15 mx-auto" />              
              </Link>              
            </div>
            <div class="flex flex-wrap -m-4 uppercase mx-auto max-w-7xl">
              <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-blue-400">
                  <Link to="/about">ABOUT</Link>
                </h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <Link to="/about" aria-label="">
                    Biography
                  </Link>
                  <Link to="/faq" aria-label="">
                    FAQ
                  </Link>
                  <Link to="/critical-acclaim" aria-label="">
                    Critical Acclaim
                  </Link>
                  <Link to="/tips-for-writers" aria-label="">
                    Tips For Writers
                  </Link>
                  <Link to="/philanthropy" aria-label="">
                    Philanthropy
                  </Link>
                </nav>
              </div>
              <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-blue-400">
                  <Link to="/books">BOOKS</Link>
                </h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  {series.nodes.map(item => {                                            
                    return (
                      item.seriesPlural.map(link => {
                        const isActive = location.pathname.startsWith(`/${link.slug}`)
                        return (                                
                          <Link
                            key={link.remoteId}
                            to={`/series/${link.slug}`}                              
                          >
                            {link.title}
                          </Link>                          
                        )                        
                      })
                    )
                    
                  
                  })}
                </nav>
              </div>
              <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-blue-400">
                  <Link to="/media">MEDIA</Link>
                </h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <Link to="/videos" aria-label="">
                    Videos
                  </Link>
                  <Link to="/photos" aria-label="">
                    Photos
                  </Link>
                  <Link to="/audio" aria-label="">
                    Audio
                  </Link>
                  <Link to="/" aria-label="">
                    Instagram Feed
                  </Link>
                  <Link to="/" aria-label="">
                    Facebook Feed
                  </Link>
                  <Link to="/" aria-label="">
                    Twitter Feed
                  </Link>
                  <Link to="/" aria-label="">
                    YouTube Feed
                  </Link>
                </nav>
              </div>
              <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-blue-400">
                  <Link to="/extras">EXTRAS</Link>
                </h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <Link to="/downloads" aria-label="">
                    Downloads
                  </Link>
                  <Link to="/exclusives" aria-label="">
                    Exclusives
                  </Link>
                  <Link to="/reader-guides" aria-label="">
                    Reader Guides
                  </Link>
                  <Link to="/promotions" aria-label="">
                    Promotions
                  </Link>
                  <Link to="/buy" aria-label="">
                    Buy Books
                  </Link>
                  <Link to="/merchandise" aria-label="">
                    Merchandise
                  </Link>
                  <Link to="/community" aria-label="">
                    Community
                  </Link>
                </nav>
              </div>
              <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-blue-400">
                  <Link to="/news">News &amp; Events</Link>
                </h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <Link to="/news" aria-label="">
                    News
                  </Link>
                  <Link to="/news#upcoming" aria-label="">
                    Upcoming Events
                  </Link>
                  <Link to="/news#past" aria-label="">
                    Past Events
                  </Link>                  
                </nav>
              </div>              
              <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
                <h2 class="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left text-blue-400">
                  <Link to="/contact">CONTACT</Link>
                </h2>
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <Link to="/ask-jim" aria-label="">
                    Ask Jim
                  </Link>
                  <Link to="/newsletter" aria-label="">
                    Newsletter Sign-Up
                  </Link>
                  <Link to="/autographs" aria-label="">
                    Autographs
                  </Link>
                  <Link to="/contribute" aria-label="">
                    Contribute
                  </Link>
                  <Link to="/requests" aria-label="">
                    Requests
                  </Link>
                  <Link to="/news-media" aria-label="">
                    News Media
                  </Link>
                  <Link to="/publishers-info" aria-label="">
                    Publishers Info
                  </Link>
                  <Link to="/press-kit" aria-label="">
                    Press Kit
                  </Link>
                </nav>
              </div>
              
            </div>
            
            <div className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center py-5 pt-20">
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
            </div>
          </div>
        </div>

      </Transition>
    </header>
  )
}



export default Header
