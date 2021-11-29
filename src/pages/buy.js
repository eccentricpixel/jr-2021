import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function BuyPage({
    data: { retailers}    
}) {    
 


return (
    <div>
        <section id="book_buyLinks" className="py-10 bg-gradient-to-r from-yellow-700 via-red-700 to-red-900 my-10">
            <div className="py-10 container mx-auto text-white gap-10 grid grid-cols-3">
                <h2 className="text-3xl tracking-widest uppercase" ><span>Buy The Book</span><span className="block text-lg tracking-wide normal-case">at any one of these retailers</span></h2>        
                <div className="col-span-2 gap-4 grid">
                {retailers.nodes.map((retailer) =>
                    <div key={retailer.id}>
                    <a href={retailer.link} target="_blank" className="font-extrabold block text-lg">{retailer.title}:</a> 
                    <div className="block">                                      
                        <p className="text-sm">{retailer.description}</p>                                        
                    </div>
                    </div>
                )}
                
                </div>
            </div>
        </section>
   </div>
   );
 }
 


export const pageQuery = graphql`
  
  query BuyQuery {
    
    retailers: allGraphCmsRetailer {
      nodes {
        id
        description
        title
      }
    }    
    
  }
`

export default BuyPage
