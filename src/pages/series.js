import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function SeriesPage({ data: { allGraphCmsSeries } }) {
  return (
    <div className="">
        <div className="page_background w-screen absolute top-0 right-0 -z-1">
            <StaticImage
                src="../images/page-background_books-series@2x.jpg"
                className="w-screen absolute top-0 right-0 placeholder-transparent"
                alt=""                
            />
        </div>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          
        </p>
      </div>

      <ul className="">
        {allGraphCmsSeries.nodes.map((series) => {
          return (
            <li key={series.id} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link
                        to={`/series/${series.slug}`}
                        className="text-gray-900"
                      >
                        {series.title}
                      </Link>
                    </h2>
                    {series.description && (
                      <div className="prose max-w-none text-gray-500">
                        <div dangerouslySetInnerHTML={{__html: series.description.html}}></div>
                      </div>
                    )}
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      to={`/series/${series.slug}`}
                      className="text-purple-500 hover:text-purple-600"
                      aria-label={`Read "${series.title}"`}
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

export const seriesPageQuery = graphql`
  {
    allGraphCmsSeries {
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

export default SeriesPage
