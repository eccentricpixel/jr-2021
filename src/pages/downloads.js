import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { v4 as uuidv4} from 'uuid'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Navigation } from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Mousewheel,Navigation]);


function DownloadsPage({ data: {bibliography, dustJackets, wallpapers} }) {

    const wallpapers640Loop = wallpapers.edges.map((download, i) => 
        download.node.size_640x480.localFile.url &&                    
            <SwiperSlide key={download.node.size_640x480.id}>
                <a href={download.node.size_640x480.localFile.url} download target="_blank">
                    <GatsbyImage 
                    image={download.node.size_640x480.localFile.childImageSharp.gatsbyImageData} 
                    alt={download.node.title}
                    />
                    <small className="font-bold">{download.node.title}</small>
                    <small className="font-semibold block"><span className="text-gray-600 font-normal tracking-wide text-xs">SIZE:</span> 640 x 480</small>
                </a>
            </SwiperSlide>                             
    )
    const wallpapers800Loop = wallpapers.edges.map((download) =>                                  
        download.node.size800X600 &&
            <SwiperSlide key={download.node.size800X600.id}>
                <a href={download.node.size800X600.localFile.url} download target="_blank">
                    <GatsbyImage 
                    image={download.node.size800X600.localFile.childImageSharp.gatsbyImageData} 
                    alt={download.node.title}
                    />
                    <small className="font-bold">{download.node.title}</small>
                    <small className="font-semibold block"><span className="text-gray-600 font-normal tracking-wide text-xs">SIZE:</span> 800 x 600</small>
                </a>
            </SwiperSlide>                
    )
    const wallpapers1024Loop = wallpapers.edges.map((download) =>                                  
        download.node.size1024X768 &&
            <SwiperSlide key={download.node.size1024X768.id}>
                <a href={download.node.size1024X768.localFile.url} download target="_blank">
                    <GatsbyImage 
                    image={download.node.size1024X768.localFile.childImageSharp.gatsbyImageData} 
                    alt={download.node.title}
                    />
                    <small className="font-bold">{download.node.title}</small>
                    <small className="font-semibold block"><span className="text-gray-600 font-normal tracking-wide text-xs">SIZE:</span> 1024 x 768</small>
                </a>
            </SwiperSlide>                
    )
    const wallpapers1280Loop = wallpapers.edges.map((download) =>                                  
        download.node.size1280X960 &&
            <SwiperSlide key={download.node.size1280X960.id}>
                <a href={download.node.size1280X960.localFile.url} download target="_blank">
                    <GatsbyImage 
                    image={download.node.size1280X960.localFile.childImageSharp.gatsbyImageData} 
                    alt={download.node.title}
                    />
                    <small className="font-bold">{download.node.title}</small>
                    <small className="font-semibold block"><span className="text-gray-600 font-normal tracking-wide text-xs">SIZE:</span> 1280 x 960</small>
                </a>
            </SwiperSlide>                
    )
    const wallpapers1920Loop = wallpapers.edges.map((download) =>                                  
        download.node.size1920X1080 &&
            <SwiperSlide key={download.node.size1920X1080.id}>
                <a href={download.node.size1920X1080.localFile.url} download target="_blank">
                    <GatsbyImage 
                    image={download.node.size1920X1080.localFile.childImageSharp.gatsbyImageData} 
                    alt={download.node.title}
                    />
                    <small className="font-bold">{download.node.title}</small>
                    <small className="font-semibold block"><span className="text-gray-600 font-normal tracking-wide text-xs">SIZE:</span> 1920 x 1080</small>
                </a>
            </SwiperSlide>                
    )
    const wallpapers2560Loop = wallpapers.edges.map((download) =>                                  
        download.node.size2560X1440 &&
            <SwiperSlide key={download.node.size2560X1440.id}>
                <a href={download.node.size2560X1440.localFile.url} download target="_blank">
                    <GatsbyImage 
                    image={download.node.size2560X1440.localFile.childImageSharp.gatsbyImageData} 
                    alt={download.node.title}
                    />
                    <small className="font-bold">{download.node.title}</small>
                    <small className="font-semibold block"><span className="text-gray-600 font-normal tracking-wide text-xs">SIZE:</span> 2560 x 1440</small>
                </a>
            </SwiperSlide>                
    )

  return (
    <div>
        {/* <div className="relative overflow-hidden">
            <div className="max-w-none mx-auto">
                <div className="relative z-10 pb-8">                    
                    <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        
                        <StaticImage src="../images/hero-downloads.png" alt="hero-downloads" layout="constrained" className="relative mx-auto -bottom-1" />

                    </section>
                </div>
            </div>
            <div className="absolute top-0 object-cover max-w-none w-full">
                <StaticImage
                    className="w-full"
                    src="../images/marquee-downloads.jpg"
                    alt="marquee-background"
                />
            </div>
        </div>
        
        <section className="py-14 grid grid-cols-6 gap-4" id="Bibliography">
            <div className="pl-4 col-span-6 md:col-start-2 md:col-end-4 md:col-span-2">
                <h2 className="text-2xl leading-4 font-bold pb-6">Bibliography</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu metus, faucibus sit amet leo in, egestas molestie magna. Proin massa felis, vehicula eleifend enim id, bibendum pellentesque leo. Curabitur vel nunc neque. Donec semper porta nunc, id malesuada velit sollicitudin sit amet.</p>
            </div>
            <div className="col-span-6 md:col-span-2 md:col-end-6 pr-4 flex flex-wrap content-center">
                {bibliography.edges[0].node.id.length > 0 && 

                <a className="w-40 mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10" href="{bibliography.edges[0].node.external_download_file}">Download</a>
                
                }
            </div> 
        </section>
       
        <section id="dustJackets" className="py-14 grid grid-cols-6 gap-4">
            <div className="pl-4 md:col-start-2 md:col-end-4 col-span-6 md:col-span-2">
                <h2 className="text-2xl leading-4 font-bold pb-6">Dust Jackets</h2>
                <p>Egestas molestie magna. Proin massa felis, vehicula eleifend enim id, bibendum pellentesque leo. </p>
            </div>
            <div className="sliderFilter col-end-7 col-span-6 md:col-span-2 pl-4 pr-4 pb-4">
                <StaticImage src="../images/series-filters.png" alt="filters" layout="constrained"  />
            </div>
            <div className="md:col-start-2 md:col-end-3 col-span-1 sliderController pl-4 hidden md:block">
                <StaticImage src="../images/slider-pagination.png" alt="pagination" layout="constrained"  />
            </div>  
            <div className="col-end-7 dustJackets col-span-6 md:col-span-4 pr-4 pl-4">
                <Swiper 
                    slidesPerView={2} 
                    spaceBetween={10} 
                    // pagination={{ "type": "fraction"}} 
                    mousewheel={true}                    
                    breakpoints={{
                    "640": {
                        "slidesPerView": 3,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 4,
                        "spaceBetween": 10
                    },
                    "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 20
                    }
                    }} 
                    className="dustJacketsSlider">
                {dustJackets.edges.map((download) => {            
                return (                            
                        download.node.bookCovers.map((i) => (                                
                            <SwiperSlide key={uuidv4()}>
                                <a href={i.localFile.url} download target="_blank">
                                    <GatsbyImage 
                                    image={i.localFile.childImageSharp.gatsbyImageData} 
                                    alt={download.node.title}
                                    />
                                </a>
                            </SwiperSlide>
                        ))
                    )
                })}
                </Swiper>
                
            </div>

        </section>

        <section id="wallpapers" className="py-14 grid grid-cols-6 gap-4">
            <div className="pl-4 md:col-start-2 md:col-end-4 col-span-6 md:col-span-2">
                <h2 className="text-2xl leading-4 font-bold pb-6">Wallpapers</h2>
                <p>Vehicula eleifend enim id, bibendum pellentesque lorem mogwai is no gremlin. </p>
            </div>
            <div className="sliderFilter col-end-7 col-span-6 md:col-span-2 pl-4 pr-4 pb-4">
                <StaticImage src="../images/downloads-filters.png" alt="filters" layout="constrained"  />
            </div>
            <div className="md:col-start-2 md:col-end-3 col-span-1 sliderController pl-4 hidden md:block">
                <StaticImage src="../images/slider-pagination.png" alt="pagination" layout="constrained"  />
            </div>  
            <div className="col-end-7 wallpapers col-span-6 md:col-span-4 pr-4 pl-4">
                <Swiper 
                    slidesPerView={2} 
                    spaceBetween={10} 
                    // pagination={{ "type": "fraction"}} 
                    mousewheel={true}                    
                    breakpoints={{
                    "640": {
                        "slidesPerView": 3,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 4,
                        "spaceBetween": 10
                    },
                    "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 20
                    }
                    }} 
                    className="wallpapersSlider">
                    {wallpapers640Loop}
                    {wallpapers800Loop}
                    {wallpapers1024Loop}
                    {wallpapers1280Loop}
                    {wallpapers1920Loop}
                    {wallpapers2560Loop}                    
                </Swiper>
                
            </div>

        </section> */}

    </div>
  )
}

export const downloadsPageQuery = graphql`  

    query downloadsQuery {
        bibliography: allGraphCmsDownload(filter: {type: {eq: Bibliography}}) {
            edges {
                node {
                    id
                    external_download_file                    
                }
            }
        }

        wallpapers: allGraphCmsDownload(filter: {type: {eq: Wallpaper}}) {
            edges {
                node {
                    id
                    title                    
                  	size_640x480 {
                  	    id
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                            url
                        }                     
                  	}
                    size800X600 {
                  	    id
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                            url
                        }                     
                  	}
                    size1024X768 {
                  	    id
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                            url
                        }                     
                  	}      
                    size1280X960 {
                  	    id
                          localFile {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                            url
                        }                      
                  	}
                    size1920X1080 {
                  	    id
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                            url
                        }                     
                  	}
                    size2560X1440 {
                  	    id
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                            url
                        }                     
                  	}
                }
            }
        }

        dustJackets: allGraphCmsDownload(filter: {type: {eq: Dust_Jacket}}) {
            edges {
                node {
                    id
                    title
                    bookCovers {
                        id                        
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH)
                            }
                            url
                        }
                    }
                }
            }
        }
    
    }   
`

export default DownloadsPage
