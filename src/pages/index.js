import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Swiper from 'swiper';

//function IndexPage({ data: { allGraphCmsBook, allGraphCmsSeries, bio, reviews } }) {
const IndexPage = ({data: { allGraphCmsBook, allGraphCmsSeries, bio, reviews }}) => {
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
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          mousewheel: true,          
          // coverflowEffect: {
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows : true,
          // },
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
          // breakpoints: {
          //   2000: {              
          //     slidesPerView: 5
          //   },
          //   1280: {              
          //     slidesPerView: 3
          //   }            
          // }
        })
  },[])

  useEffect(()=>{
      swiper.current.update();
  },[index])


  return (
    <div>
      <div className="marquee bg-gradient-to-r from-gray-100 py-8">
        <div className="contentWrapper flex gap-4 mx-auto mt-20">        
          <div id="sidebar" className="flex-shrink invisible xl:visible">              
              <div id="utilityNav" className="sticky top-40 rounded-md filterContainer">
                <div class="utilityNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Browse The Vault</div>
                <div class="utilityNav__menu uppercase font-bold text-xs">                
                    <ul>
                      <li className="mb-1"><a href="#latest-release" class="active">Latest Releases <span class="extender"></span></a></li>
                      <li className="mb-1"><a href="#upcoming" class="">Upcoming <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['sigma-series'])}}>Sigma Series <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['moonfall-saga'])}}>Moonfall Saga <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['individual-adventures'])}}>Individual Adventures <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['tucker-wayne-series'])}}>Tucker Wayne Series <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['the-order-of-the-sanguines'])}}>Sanguines Series <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['jake-ransom-series'])}}>Jake Ransom Series <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['short-stories'])}}>Short Stories <span class="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['anthologies'])}}>Anthologies <span class="extender"></span></a></li>                
                      <li className="mb-1"><a onClick={()=>{setCategory(['collaborations'])}}>Collaborations <span class="extender"></span></a></li>
                    </ul>
                </div>
                <div class="utilityNav__search">
                    
                </div>          
              </div>
          </div>

          <div className="overflow-hidden flex-grow">
            <div id="bookBrowser" className="w-full">            
              <div className="swiperMainContainer flex-1">              
                <div className="swiper-container w-full overflow-hidden">
                  <div className="swiper-wrapper">                
                    {allGraphCmsBook.nodes.map((book,key)=>{
                      const currentSection=category[index]
                      if(book.series.slug===currentSection || currentSection==="All"){
                        if(book.bookCover.localFile){
                        return(
                          <div className="swiper-slide" key={key} >                                
                            {/* <div className="bookCover">
                            <Link to={`/books/${book.slug}`}>
                              <GatsbyImage
                                  image={book.bookCover.localFile.childImageSharp.gatsbyImageData}
                                  className="w-screen relative top-0 left-0 placeholder-transparent"
                                  alt=""                
                              />
                              </Link>
                            </div>
                            <div className="book-meta">
                              <div className="selectedBook text-xs text-gray-400">Selected Book</div>
                              <div className="title">{book.title}</div>
                                <div className="releaseDate text-xs">94949</div>
                                <div className="description text-sm">
                                {book.synopsis && (
                                  <div dangerouslySetInnerHTML={{__html: book.synopsis?.html}}></div>
                                )}
                              </div>                            
                            </div> */}
                          </div>
                        )}
                        }
                        else{
                          return null
                        }
                    })}
                  </div>
                  
                  {/* <div className="swiper-pagination"></div>                
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div> */}
                </div>
              </div>
            </div>              
        
            <ul className="container mx-auto grid place-items-center">
              
            </ul>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="py-24 grid grid-cols-6 justify-items-end">
          <div class="col-start-2 text-right">
            <h2 className="text-5xl font-thin mt-40">WHO IS JAMES ROLLINS</h2>
            <button class="inline-flex text-blue uppercase border-blue border-2 font-medium py-1 px-6 mt-5 outline text-md">Learn More</button>            
          </div>
          <div class="col-span-4 relative">
            <div className="m-15 bg-black text-white px-15 py-15 mr-0">
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
      </section>

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

export const indexPageQuery = graphql`
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

export default IndexPage
