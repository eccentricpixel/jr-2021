import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'

function VideosPage({ data: { allGraphCmsVideo } }) {
  return (
    <div className="">
        <div className="page_background w-screen absolute top-0 right-0 -z-1">
            
        </div>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          
        </p>
      </div>


      

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          
          {allGraphCmsVideo.nodes.map((video, i) => {
            return(
              i % 2 == 0 ? 
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    <Link
                      to={`/videos/${video.slug}`}
                      className="text-gray-900"
                    >
                      {video.title}
                    </Link>
                  </h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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


              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    <Link
                      to={`/videos/${video.slug}`}
                      className="text-gray-900"
                    >
                      {video.title}
                    </Link>
                  </h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
              </div>
            )
          })}
          
        </div>
      </section>

{/*       
      <ul className="">
        {allGraphCmsVideo.nodes.map((video) => {
          return (
            <li key={video.id} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline max-w-lg mx-auto">
                
                <div className="space-y-5 xl:col-span-4">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link
                        to={`/videos/${video.slug}`}
                        className="text-gray-900"
                      >
                        {video.title}
                      </Link>
                    </h2>
                    <div className='player-wrapper'>
                      <ReactPlayer
                        className='react-player'
                        url={`http://www.youtube.com/watch?v=${video.youTubeVimeoID}`}
                        width='100%'
                        height='100%'
                      />
                    </div>
                    {video.description && (
                      <div className="prose max-w-none text-gray-500">
                        <div dangerouslySetInnerHTML={{__html: video.description.html}}></div>
                      </div>
                    )}
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      to={`/videos/${video.slug}`}
                      className="text-purple-500 hover:text-purple-600"
                      aria-label={`Read "${video.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                  
                </div>
              </article>
            </li>
          )
        })}
      </ul> */}
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
  }
`

export default VideosPage
