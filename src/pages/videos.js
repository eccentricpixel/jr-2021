import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'
import Fade from 'react-reveal/Fade'

function VideosPage({ data: { allGraphCmsVideo, allGraphCmsSeries } }) {
  const categoryData = allGraphCmsSeries.nodes.map((series) => {  
    return (
      series.slug
    )
  })
  const [index,setIndex] = useState(0)
  const [category,setCategory] = useState(['All'])

  return (
    <div>
      <div className="marquee bg-gradient-to-r from-gray-100 py-8">
        <div className="contentWrapper flex gap-4 mx-auto mt-20">        
          <div id="sidebar" className="flex-shrink invisible xl:visible">              
              <div id="jumpNav" className="sticky top-40 rounded-md filterContainer">
                <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Browse The Vault</div>
                <div className="jumpNav__menu uppercase font-bold text-xs">                
                    <ul>
                    <li className="mb-1"><a onClick={()=>{setCategory(['sigma-series'])}}>Sigma Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['moonfall-saga'])}}>Moonfall Saga <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['individual-adventures'])}}>Individual Adventures <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['tucker-wayne-series'])}}>Tucker Wayne Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['the-order-of-the-sanguines'])}}>Sanguines Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['jake-ransom-series'])}}>Jake Ransom Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['short-stories'])}}>Short Stories <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['anthologies'])}}>Anthologies <span className="extender"></span></a></li>                
                      <li className="mb-1"><a onClick={()=>{setCategory(['collaborations'])}}>Collaborations <span className="extender"></span></a></li>
                    </ul>
                </div>
                <div className="jumpNav__search">
                    
                </div>          
              </div>
          </div>

          <div className="overflow-hidden flex-grow">
            <div className="w-full contentMain">
              <section className="text-gray-600 body-font">
                <div className="py-24 mx-auto">
                  
                  <Fade bottom opposite cascade>
                  {allGraphCmsVideo.nodes.map((video, i) => {
                    return(
                      i % 2 == 0 ? 
                      
                      <div className="grid grid-rows-3 grid-flow-col gap-4">
                            <div className="row-span-3 col-span-2">
                                <div className='player-wrapper mb-10 h-20'>
                                  {video.youTubeVimeoID &&
                                    <ReactPlayer
                                      className='react-player'
                                      url={`//www.youtube.com/watch?v=${video.youTubeVimeoID}`}
                                      width='100%'
                                      height='100%'                                   
                                    />                                 
                                  }
                              </div> 
                            </div>
                            <div className="col-span-1">
                                
                                <Link
                                  to={`/videos/${video.slug}`}
                                  className="text-gray-900"
                                >
                                  {video.title}
                                </Link>
                              
                            </div>
                            <div className="row-span-2 col-span-1">
                                <div className="w-full block">
                                    {/* {video.description && (
                                    <div className="text-gray-500">
                                      <div dangerouslySetInnerHTML={{__html: video.description.html}}></div>
                                    </div>
                                  )} */}
                                </div>
                              
                                <Link
                                  to={`/videos/${video.slug}`}
                                  className="mt-3 text-indigo-500 inline-flex items-center"
                                  aria-label={`Read "${video.title}"`}
                                >
                                  Go To Video
                                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          
                      :


                      <div className="grid grid-rows-3 grid-flow-col gap-4">
                            <div className="row-span-3 col-span-2">
                                <div className='player-wrapper mb-10 h-20'>
                                  {video.youTubeVimeoID &&
                                    <ReactPlayer
                                      className='react-player'
                                      url={`//www.youtube.com/watch?v=${video.youTubeVimeoID}`}
                                      width='100%'
                                      height='100%'                                   
                                    />                                 
                                  }
                              </div> 
                            </div>
                            <div className="col-span-1">
                                
                                <Link
                                  to={`/videos/${video.slug}`}
                                  className="text-gray-900"
                                >
                                  {video.title}
                                </Link>
                              
                            </div>
                            <div className="row-span-2 col-span-1">
                                <div className="w-full block">
                                    {/* {video.description && (
                                    <div className="text-gray-500">
                                      <div dangerouslySetInnerHTML={{__html: video.description.html}}></div>
                                    </div>
                                  )} */}
                                </div>
                              
                                <Link
                                  to={`/videos/${video.slug}`}
                                  className="mt-3 text-indigo-500 inline-flex items-center"
                                  aria-label={`Read "${video.title}"`}
                                >
                                  Go To Video
                                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                              </div>
                            </div>
                    )
                  })}
                  </Fade>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const videoPageQuery = graphql`
  {
    allGraphCmsVideo {
      nodes {
        id        
        description {
          html
        }
        slug
        title   
        youTubeVimeoID     
      }
    }
    allGraphCmsSeries {
      nodes {
        id
        slug
        title
      }
    }
  }
`

export default VideosPage
