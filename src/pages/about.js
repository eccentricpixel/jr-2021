import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'
import Layout from "../components/layout"

function AboutPage({ data: { allGraphCmsVideo, reviews } }) {
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
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            {reviews.edges.map((review) => {              
              return(
                <div>
                  <div className="leading-relaxed text-lg" dangerouslySetInnerHTML={{__html: review.node.theReview.html}}></div>              
                  <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-8 mb-6"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{review.node.reviewerName}</h2>                
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
    </div>
 )
}

export const aboutPageQuery = graphql`
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
    reviews: allGraphCmsCriticalAcclaim(limit: 1, filter: {approvalStatus: {eq: true}}) {
      edges {
        node {
          id
          
          reviewerName
          readerReview
          theReview {
            html
          }          
        }
      }
    }
  }
`

export default AboutPage
