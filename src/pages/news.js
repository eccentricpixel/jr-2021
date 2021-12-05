import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'
import { Helmet } from 'react-helmet'

function NewsPage({ data: { allGraphCmsPost } }) {
  return (
    <div className="contactPages relative">
        <Helmet bodyAttributes={{ class: 'page-slug_news dark-mode' }} />        
        {/* <h2 className="pt-16 text-center light text-2xl lg:text-4xl uppercase font-heading">{pageContent.title}</h2>
        <div className="marquee pb-8 relative z-10">
            <div className="contentWrapper flex gap-4 mx-auto">        
                <div id="sidebar" className="flex-shrink invisible xl:visible">              
                    <div id="jumpNav" className="sticky top-40 rounded-md filterContainer light-mode">
                        <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Get The 411</div>
                        <div className="jumpNav__menu uppercase font-bold text-xs">                
                            <ul>
                                <li className="mb-2"><Link to="#" className="active">Latest News <span className="extender"></span></Link></li>      
                                <li className="mb-2"><Link to="#">Highlights <span className="extender"></span></Link></li>                                      
                            </ul>
                        </div>
                        <div className="jumpNav__search">
                            
                        </div>          
                    </div>
                </div>

                <div className="overflow-hidden flex-grow">
                    <div className="w-full contentMain">

                      <section class="py-20">
                        <div class="container px-4 mx-auto">
                          <div class="flex flex-wrap -mx-4 -mb-4">
                          {allGraphCmsPost.nodes.map((post) => {
                            return (
                              i % 5 == 0 ? 
                              <div class="w-full lg:w-2/3 px-4 mb-12" key={post.id} >
                                <div class="flex h-96 mb-6">
                                  <img class="w-full h-full object-cover rounded-lg" src="mockup-assets/images/gray-500-horizontal.png" alt="" />
                                </div>
                                <span class="text-xs font-bold text-gray-500">{post.date}</span>
                                <h2 class="mb-2 text-3xl font-bold font-heading">{post.title}</h2>
                                <div class="mb-4 text-lg text-gray-500 leading-loose" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                                <Link class="flex items-center text-lg font-bold text-gray-700 hover:text-gray-800" href="#">
                                  <span>Read More</span>
                                  <span>
                                    <svg class="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </Link>
                              </div>

                              :

                              <div class="w-full lg:w-1/3 px-4 mb-12" key={post.id} >
                                <div class="flex h-96 mb-6">
                                  <img class="w-full h-full object-cover rounded-lg" src="mockup-assets/images/gray-500-horizontal.png" alt="" />
                                </div>
                                <span class="text-xs font-bold text-gray-500">{post.date}</span>
                                <h2 class="mb-2 text-3xl font-bold font-heading">{post.title}</h2>
                                <div class="mb-4 text-lg text-gray-500 leading-loose" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                                <Link class="flex items-center text-lg font-bold text-gray-700 hover:text-gray-800" href="#">
                                  <span>Read More</span>
                                  <span>
                                    <svg class="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </Link>
                              </div>

                              :

                              <div class="w-full lg:w-1/3 px-4 mb-12" key={post.id} >
                                <div class="flex h-96 mb-6">
                                  <img class="w-full h-full object-cover rounded-lg" src="mockup-assets/images/gray-500-horizontal.png" alt="" />
                                </div>
                                <span class="text-xs font-bold text-gray-500">{post.date}</span>
                                <h2 class="mb-2 text-3xl font-bold font-heading">{post.title}</h2>
                                <div class="mb-4 text-lg text-gray-500 leading-loose" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                                <Link class="flex items-center text-lg font-bold text-gray-700 hover:text-gray-800" href="#">
                                  <span>Read More</span>
                                  <span>
                                    <svg class="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </Link>
                              </div>

                              :

                              <div class="w-full lg:w-1/3 px-4 mb-12" key={post.id} >
                                <div class="flex h-96 mb-6">
                                  <img class="w-full h-full object-cover rounded-lg" src="mockup-assets/images/gray-500-horizontal.png" alt="" />
                                </div>
                                <span class="text-xs font-bold text-gray-500">{post.date}</span>
                                <h2 class="mb-2 text-3xl font-bold font-heading">{post.title}</h2>
                                <div class="mb-4 text-lg text-gray-500 leading-loose" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                                <Link
                                  to={`/news/${post.slug}`}
                                  className="flex items-center text-lg font-bold text-gray-700 hover:text-gray-800"
                                >                                
                                  <span>Read More</span>
                                  <span>
                                    <svg class="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </Link>
                              </div>

                              :


                              <div class="w-full lg:w-1/3 px-4 mb-12" key={post.id} >
                                <div class="flex h-96 mb-6">
                                  <img class="w-full h-full object-cover rounded-lg" src="mockup-assets/images/gray-500-horizontal.png" alt="" />
                                </div>
                                <span class="text-xs font-bold text-gray-500">{post.date}</span>
                                <h2 class="mb-2 text-3xl font-bold font-heading">{post.title}</h2>
                                <div class="mb-4 text-lg text-gray-500 leading-loose" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                                <Link
                                  to={`/news/${post.slug}`}
                                  className="flex items-center text-lg font-bold text-gray-700 hover:text-gray-800"
                                >                                
                                  <span>Read More</span>
                                  <span>
                                    <svg class="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                  </span>
                                </Link>
                              </div>

                            )
                          })}
                          </div>
                        </div>
                      </section>
                                      
                     
                    
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

  )
}

export const newsPageQuery = graphql`
  {
    allGraphCmsPost {
      nodes {
        title
        id
        slug
        excerpt
        content {
          html
        }
      }
    }
  }
`

export default NewsPage
