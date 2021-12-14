import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link, StaticQuery, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'
import Fade from 'react-reveal/Fade'
import { Helmet } from 'react-helmet'

function ContributePage({
    data: { pageContent }
}) {
       
return (
    <div className="contactPages relative">
        <Helmet bodyAttributes={{ class: 'page-slug_contact dark' }} />        
        <h2 className="pt-16 text-center light text-2xl lg:text-4xl uppercase font-heading">{pageContent.title}</h2>
        <div className="marquee pb-8 relative z-10">
            <div className="contentWrapper flex gap-4 mx-auto">        
                <div id="sidebar" className="flex-shrink invisible xl:visible">              
                    <div id="jumpNav" className="sticky top-40 rounded-md filterContainer light-mode">
                        <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">What Would You Like To Do?</div>
                        <div className="jumpNav__menu uppercase font-bold text-xs">                
                            <ul>
                                <li className="mb-2"><Link to="/ask-jim" className="">Ask Jim <span className="extender"></span></Link></li>      
                                <li className="mb-2"><Link to="/newsletter-sign-up" className="">Newsletter Sign-Up <span className="extender"></span></Link></li>      
                                <li className="mb-2"><Link to="/autographs">Autographs <span className="extender"></span></Link></li>  
                                <li className="mb-2"><Link to="/contribute" className="active">Contribute <span className="extender"></span></Link></li>                                                                
                                <li className="mb-2"><Link to="/news-media">News Media <span className="extender"></span></Link></li>  
                                <li className="mb-2"><Link to="/publishers">Publisher Info <span className="extender"></span></Link></li>  
                                <li className="mb-2"><Link to="/press-kit">Press Kit <span className="extender"></span></Link></li>  
                            </ul>
                        </div>
                        <div className="jumpNav__search">
                            
                        </div>          
                    </div>
                </div>

                <div className="overflow-hidden flex-grow">
                    <div className="w-full contentMain">
                        <section className="py-20 mx-auto max-w-4xl">
                            <div className="container px-4 mx-auto">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full px-4 mb-8">
                                        <div className="mb-6 text-lg text-gray-500 leading-loose"  dangerouslySetInnerHTML={{__html: pageContent.description.html}}></div>
                                    </div>
                                    <div className="w-full px-4">
                                        <form action="#">
                                            <input className="w-full py-3 pl-3 mb-4 border rounded" type="text" placeholder="Name" />
                                            <input className="w-full py-3 pl-3 mb-4 border rounded" type="email" placeholder="E-mail" />
                                            <textarea className="mb-4 w-full p-3 border rounded resize-none" id="1" name="message" cols="30" rows="10" placeholder="Your Message..."></textarea>
                                            <button className="w-full inline-block px-6 py-3 mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200">SUBMIT</button>
                                        </form>
                                    </div>
                                    <div className="flex flex-wrap -mx-8">
                                        <div className="w-full py-16 px-8 mb-4">
                                            <p className="inline-block pr-5 align-top">NOTE:</p>
                                            <div className="disclaimer-text inline-block w-3/4 align-top" dangerouslySetInnerHTML={{__html: pageContent.notes.html}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>    
    </div>                        
    )
}


export const contactPageQuery = graphql`
  {
    pageContent: graphCmsContactForm(title: {eq: "Contribute"}) {
        title
        email
        link
        notes {
            html
        }
        description {
            html
        }
    }
  }
`
export default ContributePage