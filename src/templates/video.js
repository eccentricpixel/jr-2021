import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'

function VideoTemplate({    
  data: { videoContent },  
  pageContext: { nextVideo, video, previousVideo },
}) {    
  
  return (
    <article>
        <header className="pt-6 lg:pb-10">
          <div className="space-y-1 text-center">
            
          </div>
        </header>
        
        <section       
          id="video_overview"
          className="md:grid md:grid-cols-4 md:col-gap-6 pb-16 md:pb-20 max-w-7xl mx-auto px-5"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >        
          <div className="lg:pb-0 md:col-span-3 md:row-span-2 px-6">          
            <div className="prose max-w-none pt-10 pb-8">
              <div className='player-wrapper mb-10'>
                {videoContent.youTubeVimeoID &&
                  <ReactPlayer
                    className='react-player'
                    url={`http://www.youtube.com/watch?v=${videoContent.youTubeVimeoID}`}
                    width='100%'
                    height='100%'
                  />
                }
              </div>
              <h1 className="text-3xl leading-9 font-light text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {video.title}
              </h1>    
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={video.date}>{video.date}</time>
              </dd>                    
              <div className="bodyText pt-5" dangerouslySetInnerHTML={{__html: videoContent.description?.html}}></div>
            </div>
          </div>        
          
        </section>
        
        <footer className="text-sm font-medium leading-5 pb-20 max-w-7xl mx-auto px-5">
            {(nextVideo || previousVideo) && (
              <div className="flex justify-between">
                {previousVideo && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Previous Video
                    </h2>
                    <div className="text-red-500 hover:text-red-700">
                      <Link to={`/videos/${previousVideo.slug}`}>
                        {previousVideo.title}
                      </Link>
                    </div>
                  </div>
                )}
                {nextVideo && (
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Next Video
                    </h2>
                    <div className="text-red-500 hover:text-red-700">
                      <Link to={`/videos/${nextVideo.slug}`}>{nextVideo.title}</Link>
                    </div>
                  </div>
                )}              
              </div>
            )}
            <div className="pt-8">
              <Link to="/videos" className="text-red-500 hover:text-red-700">
                &larr; Browse all videos
              </Link>
            </div>
          </footer>
      </article>
  );
}


export const pageQuery = graphql`
  query VideoQuery($id: String!) {
    videoContent: graphCmsVideo(id: {eq: $id}){
      id
      title
      description {
        html
      }
      youTubeVimeoID
    }   
  }
  `
export default VideoTemplate
