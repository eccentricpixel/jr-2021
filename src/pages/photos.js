import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function PhotosPage({ data: { allGraphCmsPhoto } }) {
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
        {allGraphCmsPhoto.nodes.map((photo) => {
          return (
            <li key={photo.id} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={photo.date}>{photo.date}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link
                        to={`/photos/${photo.slug}`}
                        className="text-gray-900"
                      >
                        {photo.title}
                      </Link>
                    </h2>
                    {photo.description && (
                      <div className="prose max-w-none text-gray-500">
                        <div dangerouslySetInnerHTML={{__html: photo.description?.html}}></div>
                      </div>
                    )}
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      to={`/photos/${photo.slug}`}
                      className="text-purple-500 hover:text-purple-600"
                      aria-label={`Read "${photo.title}"`}
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

export const photoPageQuery = graphql`
  {
    allGraphCmsPhoto {
      nodes {
        id        
        description {
          html
        }
        slug
        title        
      }
    }
  }
`

export default PhotosPage
