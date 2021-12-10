import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function SeriesPage({ data: { allGraphCmsSeries, featuredBook, allGraphCmsBook } }) {

    const categoryData = allGraphCmsSeries.nodes.map((series) => {  
        return (
        series.slug
        )
    })
    const [index,setIndex] = useState(0)
    const [category,setCategory] = useState(['All'])
    


  return (
    <div className="py-5">
        <Helmet bodyAttributes={{ class: 'page-slug_series' }} />     
        <div className="page_background w-screen absolute top-0 right-0 -z-1">
            <StaticImage
                src="../images/page-background_books-series@2x.jpg"
                className="w-screen absolute top-0 right-0 placeholder-transparent theBackground"
                alt=""                
            />
        </div>
        <div className="marquee py-8">
            <div className="flex gap-4 mx-auto">        
                <div id="sidebar" className="flex-shrink invisible xl:visible left-16">              
                    <div id="jumpNav" className="sticky top-40 rounded-md filterContainer">
                        <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Browse The Vault</div>
                        <div className="jumpNav__menu uppercase font-bold text-xs">                
                            <ul>
                                <li className="mb-3"><a onClick={()=>{setCategory(['sigma-series'])}} className="active">Latest Release <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['sigma-series'])}}>Sigma Series <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['moonfall-saga'])}}>Moonfall Saga <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['individual-adventures'])}}>Individual Adventures <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['tucker-wayne-series'])}}>Tucker Wayne Series <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['the-order-of-the-sanguines'])}}>Sanguines Series <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['jake-ransom-series'])}}>Jake Ransom Series <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['short-stories'])}}>Short Stories <span className="extender"></span></a></li>
                                <li className="mb-3"><a onClick={()=>{setCategory(['anthologies'])}}>Anthologies <span className="extender"></span></a></li>                
                                <li className="mb-3"><a onClick={()=>{setCategory(['collaborations'])}}>Collaborations <span className="extender"></span></a></li>
                            </ul>
                        </div>
                        <div className="jumpNav__search">
                            
                        </div>          
                    </div>
                </div>

                <div className="overflow-hidden flex-grow">
                    <div className="w-full contentMain">

                        <section className="md:grid md:grid-cols-4 md:col-gap-6 pb-16 md:pb-10 max-w-7xl mx-auto px-5 pt-20 relative z-50 max-w-screen-2xl" style={{ gridTemplateRows: 'auto 1fr' }} id="books-marquee">
                            <div className="book_cover relative z-10 overflow-visible">
                                {featuredBook.edges[0].node.books[0].bookCover && <img src={featuredBook.edges[0].node.books[0].bookCover.url} className="w-full filter drop-shadow-2xl" />}                                
                            </div>        
                            <div className="lg:pb-0 md:col-span-3 md:row-span-2 px-20">          
                                <div className="prose max-w-none pt-15 pb-8">
                                    <div class="book-browser-section-header">Latest Release</div>
                                    <h1 className="book-title text-3xl leading-9 font-light text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                    {featuredBook.edges[0].node.books[0].title}
                                    </h1>            
                                    <div class="release-date"><span>Release Date:</span>{featuredBook.edges[0].node.books[0].releaseDate}</div>  
                                    {featuredBook.edges[0].node.books[0].leadText && (
                                    <div className="leadText text-2xl" dangerouslySetInnerHTML={{__html: featuredBook.edges[0].node.books[0].leadText.html}}></div>
                                    )}
                                    {featuredBook.edges[0].node.books[0].bodyText && (
                                    <div className="bodyText" dangerouslySetInnerHTML={{__html: featuredBook.edges[0].node.books[0].bodyText.html}}></div>
                                    )}
                                       
                                </div>
                                
                                <div className="pt-5">
                                    <div class="meta-heading">Dive In Deeper</div>  
                                    <Link to="/" className="text-red-500 hover:text-red-700 block pb-4 text-base">
                                    <div className="flex">
                                        <div className="flex-initial pr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" />
                                        </svg>
                                        </div>
                                        <div className="flex-1">
                                        Download Bibliography
                                        </div>
                                    </div>
                                    </Link>
                                    <Link to="/" className="text-red-500 hover:text-red-700 block pb-4 text-base">
                                    <div className="flex">
                                        <div className="flex-initial pr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                        </svg>
                                        </div>
                                        <div className="flex-1">
                                        Share This Everywhere
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>        
                            
                        </section>

                        <section className="series-content max-w-5xl mx-auto" id="upcoming">
                            <div className="grid grid-cols-3 gap-10">
                                
                                    <div className="upcomingInfo content-center flex flex-wrap pr-8">
                                        <h2 className="text-black mb-3 text-4xl uppercase">Upcoming</h2>
                                        <div className="overview">
                                            For James, the inkwell never runs dry. Here are just some of the more imminent artifacts of James Rollins’ creative endeavors.
                                        </div>
                                    </div>
                                    <div className="upcomingBook">
                                        <StaticImage src="../images/upcoming-book.png" layout="full_width" />
                                        <h4 className="mt-3 text-lg">Kingdom of Bones</h4>
                                        <div class="release-date text-sm"><span className="pr-4 uppercase">Release Date:</span><div className="banner-style inline-block">August 11, 2021</div></div>

                                    </div>
                                    <div className="upcomingBook">
                                        <StaticImage src="../images/coming-soon.png" layout="full_width" />
                                        <h4 className="mt-3 text-lg">The Starless Crown</h4>
                                        <div class="release-date text-sm"><span className="pr-4 uppercase">Release Date:</span>Summer 2022</div>  

                                    </div>
                                
                            </div>
                        </section>


                        
                        {allGraphCmsSeries.nodes.map((series) => {                            
                        return (
                            series.slug == 'sigma-series' &&
                            <div id={`wrapper_${series.slug}`} key={series.id} className="py-12 relative">
                                <div className="series-loop-background"></div>
                                <div className="series-content">
                                    <div className="grid grid-cols-6 gap-4 mb-20">                                        
                                        <div className=""></div>
                                        <div className="col-span-5 lg:col-span-4 grid lg:grid-cols-2">
                                            <div></div>
                                            <div className="space-y-6">
                                                <h2 className="text-2xl leading-8 font-bold tracking-tight uppercase">
                                                <Link
                                                    to={`/series/${series.slug}`}
                                                    className="text-gray-50"
                                                >
                                                    {series.title}
                                                </Link>
                                                </h2>
                                                {series.description && (
                                                <div className="prose max-w-none">
                                                    <div dangerouslySetInnerHTML={{__html: series.description.html}}></div>
                                                </div>
                                                )}
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="bookList grid grid-cols-4 lg:grid-cols-5 gap-4">
                                        <div className="bookListPagination lg:col-span-2 flex flex-col justify-center items-center text-center justify-self-end">
                                            <div className="totalCount text-2xl block">16<span className="text-sm block">Books In Series</span></div>
                                            <div className="block flex self-center mt-2 content-center w-full">
                                                <div className="pag-button mr-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="pag-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="bookListSlide col-span-3 lg:col-span-3">
                                        <Swiper
                                            spaceBetween={20}
                                            slidesPerView={5}
                                            // onSlideChange={() => console.log('slide change')}
                                            // onSwiper={(swiper) => console.log(swiper)}
                                        >
                                            
      

                                                       
                                                        {allGraphCmsBook.nodes.map((book,key)=>{
                                                        const currentSection=category[index]
                                                        if(book.series.slug===currentSection || currentSection==="All"){
                                                            if(book.bookCover.localFile){
                                                            return(
                                                            <SwiperSlide key={key} >                                
                                                                <div className="bookCover filter drop-shadow-3xl">
                                                                    <Link to={`/books/${book.slug}`}>
                                                                        <GatsbyImage
                                                                            image={book.bookCover.localFile.childImageSharp.gatsbyImageData}
                                                                            layout="constrained"
                                                                            className="relative placeholder-transparent bookImageWrapper"
                                                                            alt=""                
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="book-meta absolute hidden">
                                                                    <div className="selectedBook text-xs text-gray-400">Selected Book</div>
                                                                    <div className="title">{book.title}</div>
                                                                        <div className="releaseDate text-xs">94949</div>
                                                                        <div className="description text-sm">
                                                                            {book.synopsis && (
                                                                            <div dangerouslySetInnerHTML={{__html: book.synopsis?.html}}></div>
                                                                            )}
                                                                    </div>                            
                                                                </div>
                                                            </SwiperSlide>
                                                            )}
                                                            }
                                                            else{
                                                            return null
                                                            }
                                                        })}
                                                    </Swiper>

                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        )
                        })}
                    



                        
                    </div>
                </div>
            </div>
        </div>
    




        


        
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
    featuredBook: allGraphCmsContentSetting(filter: {remoteId: {eq: "ckr9tk8tsopmc0b24riopqwic"}}) {
        edges {
            node {
                id
                title
                books {
                    id
                    title
                    releaseDate
                    bodyText {
                        html
                    }
                    leadText {
                        html
                    }
                    bookCover {
                        url
                        width
                        height
                        gatsbyImageData(height: 10, width: 10)
                    }
                }
            }
        }
    }
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
  }
`

export default SeriesPage
