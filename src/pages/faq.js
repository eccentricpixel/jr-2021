import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function FaqPage({ data: { allGraphCmsFaq } }) {
  return (
    <div className="">
        
      
        <div className="container mx-auto grid place-items-center px-8 py-32">
            <StaticImage src="../images/qa-header@2x.png" width="480" className="justify-self-center mb-10" alt="" placeholder="transparent" />
        
            <ul className="grid grid-cols-1 grid-flow-row auto-rows-max gap-5 md:grid-cols-2">
                {allGraphCmsFaq.nodes.map((faq) => {
                return (
                    <li key={faq.id} className="py-6">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">                
                        <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <h2 className="text-lg leading-8 font-bold tracking-tight">                      
                                {faq.question}                      
                            </h2>
                            {faq.answer && (
                            <div className="prose max-w-none">
                                <div className="text-gray-500 text-sm" dangerouslySetInnerHTML={{__html: faq.answer?.html}}></div>
                            </div>
                            )}
                        </div>                  
                        </div>
                    </article>
                    </li>
                )
                })}
            </ul>
        </div>  
    </div>
  )
}

export const faqPageQuery = graphql`
  {
    allGraphCmsFaq (filter: {onlyShowOnBookPage: {eq: false}}) {
      nodes {
        id        
        question
        answer {
          html
        }
        slug
        title
        onlyShowOnBookPage
        priority
        categories        
      }
    }
  }
`

export default FaqPage
