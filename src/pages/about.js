import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import SwiperCore, {
  Navigation
} from 'swiper';
SwiperCore.use([Navigation]);

const AboutPage = ({ data: { allGraphCmsBook, allGraphCmsSeries, bio, reviews } }) => {
  const categoryData = allGraphCmsSeries.nodes.map((series) => {  
    return (
      series.slug
    )
  })
  const [index,setIndex] = useState(0)
  const [category,setCategory] = useState(['All'])
  const swiper = useRef(null);
  

  useEffect(()=>{
      swiper.current = new Swiper('.swiper-container',{
          effect: 'fade',
          speed: 500,
          grabCursor: true,
          centeredSlides: true,
          autoplay: true,
          slidesPerView: 1,          
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
        })
  },[])

  useEffect(()=>{
      swiper.current.update();
  },[index])


  return (

  <div>
    <section className="about" id="bio">
      <Helmet bodyAttributes={{ class: 'page-slug_about' }} />        
      <div className="background"></div>
      <h2 className="pt-36 text-center light text-2xl lg:text-4xl uppercase font-heading">About</h2>
      <div className="contentWrapper flex gap-4 mx-auto py-20">   
        <div id="sidebar" className="flex-shrink invisible xl:visible">              
            <div id="jumpNav" className="sticky top-40 rounded-md filterContainer">
              <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Get Familiar</div>
              <div className="jumpNav__menu uppercase font-bold text-xs">                
                  <ul>
                  <li className="mb-1"><a className="active">Biography <span className="extender"></span></a></li>
                    <li className="mb-1"><a>Media Highlights <span className="extender"></span></a></li>
                    <li className="mb-1"><a>Themes and Locations <span className="extender"></span></a></li>                    
                  </ul>
              </div>
              <div className="jumpNav__search">
                  
              </div>          
            </div>
        </div>
        <div className="container about-wrapper">
            <div className="d-flex justify-content-center">                                             
              <div className="grid grid-cols-6 justify-items-end">
                <div className="col-span-4 relative">
                  <div className="bioBackground">
                    <StaticImage src="../images/about-img.jpg" className="absolute z-20 right-0 top-0 w-1/2" alt="" />
                      <div className="z-30 relative leading-loose text-lg p-5">
                        {bio.nodes.map(bio => {
                            return(                        
                              <div className="bioText" dangerouslySetInnerHTML={{__html: bio.bioIntro?.html}}></div>
                            )
                        })}
                      </div>
                  </div>
                </div>
              </div>
              <div className="extendedBio py-20 leading-loose text-black">
                {bio.nodes.map(bio => {
                      return(                        
                        <div dangerouslySetInnerHTML={{__html: bio.bioExtendedContent?.html}}></div>
                      )
                  })}
              </div>

            </div>
        </div>
      </div>
    </section>

    <section className="py-20" id="featuredMedia">
      <div class="contentWrapper">
        <div class="grid grid-cols-12">
            <div class="md:grid-span-3">
                <div class="section-heading">See For Yourself</div>
                <div class="blurb"></div>
            </div>
            <div class="md:col-span-9">
                <div class="flex align-content-around flex-wrap">
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell"></div>
                    <div class="media-shell view-more"></div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section id="themesAndLocations">
            <div className="swiperMainContainer flex-1 relative">              
                <div className="swiper-container w-full overflow-hidden">
                  <div className="swiper-wrapper">                
                    
                    {allGraphCmsBook.nodes.map((book,key)=>{
                      
                      const currentSection=category[index]
                      if(book.series.slug===currentSection || currentSection==="All"){
                        if(book.bookCover.url){
                        return(
                          <div className="swiper-slide" key={key} data-slide-position={key}>                                
                            <div className="bookCover">
                            
                              <img
                                  src={book.bookCover.url}
                                  className="w-full relative top-0 left-0 placeholder-transparent"
                                  alt=""                
                              />
                              
                            </div>                            
                          </div>
                        )}
                        }
                        else{
                          return null
                        }
                    })}
                  </div>
                  
                  {/* <div className="swiper-pagination"></div>                 */}
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
    </section>


  </div>

 )
}

export const aboutPageQuery = graphql`
  {
    allGraphCmsBook(
      sort: {fields: releaseDate, order: DESC}
      filter: {international: {eq: false}, series: {slug: {ne: null}}}
    ) {
      nodes {
        id
        releaseDate: formattedDate
        synopsis {
          html
        }
        slug
        title
        series {
          id
          slug
        }
        bookCover {
          url
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    allGraphCmsSeries {
      nodes {
        id
        slug
        title
      }
    }    
    bio: allGraphCmsContentSetting {
      nodes {
        bioIntro {
          html
        }
        bioExtendedContent {
          html
        }
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
