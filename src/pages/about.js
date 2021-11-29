import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'
import Layout from "../components/layout"

function AboutPage({ data: { allGraphCmsVideo, reviews } }) {
 return (

  <div>
    {/* <div className="marquee bg-gradient-to-r from-gray-100 py-8">
      <div className="contentWrapper flex gap-4 mx-auto mt-20">        
        

        <div className="overflow-hidden flex-grow">
          <div className="w-full contentMain">  
          </div>
        </div>
      </div>
    </div> */}

    <section className="section about" id="bio">
      <header>About</header>
      <div id="sidebar" className="flex-shrink invisible xl:visible">              
          <div id="jumpNav" className="sticky top-40 rounded-md filterContainer">
            <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Browse The Vault</div>
            <div className="jumpNav__menu uppercase font-bold text-xs">                
                <ul>
                <li className="mb-1"><a>Sigma Series <span className="extender"></span></a></li>
                  <li className="mb-1"><a>Moonfall Saga <span className="extender"></span></a></li>
                  <li className="mb-1"><a>Individual Adventures <span className="extender"></span></a></li>
                  <li className="mb-1"><a>Tucker Wayne Series <span className="extender"></span></a></li>
                  <li className="mb-1"><a>Sanguines Series <span className="extender"></span></a></li>
                  <li className="mb-1"><a>Jake Ransom Series <span className="extender"></span></a></li>
                  <li className="mb-1"><a>Short Stories <span className="extender"></span></a></li>
                  <li className="mb-1"><a>Anthologies <span className="extender"></span></a></li>                
                  <li className="mb-1"><a>Collaborations <span className="extender"></span></a></li>
                </ul>
            </div>
            <div className="jumpNav__search">
                
            </div>          
          </div>
      </div>
      <div className="container about-wrapper">
          <div className="d-flex justify-content-center">                                             
            <div className="about_content">
                <div className="about_content-thumb">                        
                    <div className="about_content-thumb-image">
                        <img src="" alt="about-img" />
                    </div>
                </div>
                <div className="about_content-inner">                        
                    <div className="mb-10 text-light about_content-inner-blob">
                        <p>sdfgsdfg</p>
                    </div>
                    
                </div>
            </div>          
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
