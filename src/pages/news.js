import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'

function NewsPage({ data: { allGraphCmsPost } }) {
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

      <ul className="">
        {allGraphCmsPost.nodes.map((post) => {
          return (
            <li key={post.id} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline max-w-lg mx-auto">
                
                <div className="space-y-5 xl:col-span-4">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link
                        to={`/news/${post.slug}`}
                        className="text-gray-900"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    {post.content && (
                      <div className="prose max-w-none text-gray-500">
                        <div dangerouslySetInnerHTML={{__html: post.content?.html}}></div>
                      </div>
                    )}
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      to={`/news/${post.slug}`}
                      className="text-purple-500 hover:text-purple-600"
                      aria-label={`Read "${post.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                  
                </div>
              </article>
            </li>
          )
        })}
      </ul>
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
        content {
          html
        }
      }
    }
  }
`

export default NewsPage
