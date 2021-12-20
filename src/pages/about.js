import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import Swiper from 'swiper';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper';

SwiperCore.use([EffectFade,Navigation,Pagination]);

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
          fadeEffect: {
            crossFade: true
          },
          speed: 500,
          pagination: {
            "clickable": true
          },
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
    <section id="bibliography">
      <Helmet bodyAttributes={{ class: 'page-slug_about' }} />        
      <div className="background"></div>
      <h2 className="pt-16 text-center light text-2xl lg:text-4xl uppercase font-heading relative z-20">About</h2>
      <div className="contentWrapper flex gap-4 mx-auto pt-8 xl:py-20 pb-20">   
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
        <div className="container marquee-content-wrapper">
            <div className="d-flex justify-content-center">                                             
              <div className="grid grid-cols-6 justify-items-end">
                <div className="col-span-6 relative">
                  <div className="bioBackground">
                    <StaticImage src="../images/about-img.jpg" className="absolute z-20 right-0 top-0 w-full xl:w-1/2" alt="" />
                      <div className="z-30 relative leading-loose text-lg p-5">
                        {bio.nodes.map(bio => {
                            return(                        
                              <div className="bioText font-light" dangerouslySetInnerHTML={{__html: bio.bioIntro?.html}}></div>
                            )
                        })}
                      </div>
                  </div>
                </div>
              </div>              
            </div>
        </div>
      </div>
    </section>

    <section className="contentWrapper mx-auto justify-content-center extendedBio">
      <div className="grid grid-cols-6">
        <div></div>
        <div className="leading-loose text-black font-light col-span-4">
            {bio.nodes.map(bio => {
                  return(                        
                    <div dangerouslySetInnerHTML={{__html: bio.bioExtendedContent?.html}}></div>
                  )
              })}
          </div>
        </div>
        <div></div>
    </section>

    <section className="py-20" id="featuredMedia">
      <div class="contentWrapper mx-auto">
        <div class="grid grid-cols-12 px-10 mx-auto">
            <div class="md:col-span-3 text-right px-10 pt-20">
                <div class="section-heading font-thin text-5xl">See For Yourself</div>
                <div class="blurb">
                  <p className="text-left pt-10">Here are some highlights from the media section.</p>
                </div>
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
                    <div class="media-shell view-more"></div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section id="themesAndLocations">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="section-content md:col-span-9 mr-10 relative -top-10">
            <div className="bg"></div>
            <div className="leading-loose text-white font-light col-span-4 p-20">
              {bio.nodes.map(bio => {
                  return(                        
                    <>
                      <div className="introContent text-4xl font-thin" dangerouslySetInnerHTML={{__html: bio.pageTurningAdventuresIntro?.html}}></div>
                      <div className="text-2xl" dangerouslySetInnerHTML={{__html: bio.pageTurningAdventuresExtendedContent?.html}}></div>
                    </>
                  )
                })}
            </div>
          </div>
          <div className="md:col-span-3">                        
            <div className="book-billboard relative -top-10 px-10">
                <div className="swiperMainContainer flex-1 relative -top-10">              
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
                </div>
                <div className="book-list">
                  <div className=""></div>

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
        pageTurningAdventuresIntro {
          html
        }
        pageTurningAdventuresExtendedContent {
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
