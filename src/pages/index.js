import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Swiper from 'swiper';

//function IndexPage({ data: { allGraphCmsBook, allGraphCmsSeries, bio, reviews } }) {
const IndexPage = ({ data: { reviews } }) => {
  // const categoryData = allGraphCmsSeries.nodes.map((series) => {  
  //   return (
  //     series.slug
  //   )
  // })
  // const [index,setIndex] = useState(0)
  // const [category,setCategory] = useState(['All'])
  // const swiper = useRef(null);
  

  // useEffect(()=>{
  //     swiper.current = new Swiper('.swiper-container',{
  //         effect: 'coverflow',
  //         grabCursor: true,
  //         centeredSlides: true,
  //         slidesPerView: 'auto',
  //         mousewheel: true,          
  //         // coverflowEffect: {
  //         //   rotate: 50,
  //         //   stretch: 0,
  //         //   depth: 100,
  //         //   modifier: 1,
  //         //   slideShadows : true,
  //         // },
  //         pagination: {
  //           el: '.swiper-pagination',
  //         },
  //         navigation: {
  //           nextEl: '.swiper-button-next',
  //           prevEl: '.swiper-button-prev',
  //         },
          
  //         // breakpoints: {
  //         //   2000: {              
  //         //     slidesPerView: 5
  //         //   },
  //         //   1280: {              
  //         //     slidesPerView: 3
  //         //   }            
  //         // }
  //       })
  // },[])

  // useEffect(()=>{
  //     swiper.current.update();
  // },[index])


  return (
    <div>
      {/* <div className="marquee bg-gradient-to-r from-gray-100 py-8">
        <div className="contentWrapper flex gap-4 mx-auto mt-20">        
          <div id="sidebar" className="flex-shrink invisible xl:visible">              
              <div id="jumpNav" className="sticky top-40 rounded-md filterContainer">
                <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Browse The Vault</div>
                <div className="jumpNav__menu uppercase font-bold text-xs">                
                    <ul>
                      <li className="mb-1"><a href="#latest-release" className="active">Latest Releases <span className="extender"></span></a></li>
                      <li className="mb-1"><a href="#upcoming" className="">Upcoming <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['sigma-series'])}}>Sigma Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['moonfall-saga'])}}>Moonfall Saga <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['individual-adventures'])}}>Individual Adventures <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['tucker-wayne-series'])}}>Tucker Wayne Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['the-order-of-the-sanguines'])}}>Sanguines Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['jake-ransom-series'])}}>Jake Ransom Series <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['short-stories'])}}>Short Stories <span className="extender"></span></a></li>
                      <li className="mb-1"><a onClick={()=>{setCategory(['anthologies'])}}>Anthologies <span className="extender"></span></a></li>                
                      <li className="mb-1"><a onClick={()=>{setCategory(['collaborations'])}}>Collaborations <span className="extender"></span></a></li>
                    </ul>
                </div>
                <div className="jumpNav__search">
                    
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
                            <div className="bookCover">
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
                            </div>
                          </div>
                        )}
                        }
                        else{
                          return null
                        }
                    })}
                  </div>
                  
                  <div className="swiper-pagination"></div>                
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>              
        
            <ul className="container mx-auto grid place-items-center">
              
            </ul>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="py-24 grid grid-cols-6 justify-items-end">
          <div className="col-start-2 text-right">
            <h2 className="text-5xl font-thin mt-40">WHO IS JAMES ROLLINS</h2>
            <button className="inline-flex text-blue uppercase border-blue border-2 font-medium py-1 px-6 mt-5 outline text-md">Learn More</button>            
          </div>
          <div className="col-span-4 relative">
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
                */}

     



    </div>
  )
}

export const indexPageQuery = graphql`
  {
    # allGraphCmsBook(
    #   sort: {fields: releaseDate, order: DESC}
    #   filter: {international: {eq: false}, series: {slug: {ne: null}}}
    # ) {
    #   nodes {
    #     id
    #     releaseDate: formattedDate
    #     synopsis {
    #       html
    #     }
    #     slug
    #     title
    #     series {
    #       id
    #       slug
    #     }
    #     bookCover {
    #       localFile {
    #         childImageSharp {
    #           gatsbyImageData(layout: FULL_WIDTH)
    #         }
    #       }
    #     }
    #   }
    # }
    # allGraphCmsSeries {
    #   nodes {
    #     id
    #     slug
    #     title
    #   }
    # }
    # bio: allGraphCmsContentSetting {
    #   nodes {
    #     bioIntro {
    #       html
    #     }
    #   }
    # }
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
