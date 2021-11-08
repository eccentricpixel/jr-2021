import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function FaqPage({ data: { allGraphCmsFaq } }) {
  return (
    <div className="">
        <div className="page_background w-screen absolute top-0 right-0 -z-1">
            {/* <StaticImage
                src="../images/page-background_books-series@2x.jpg"
                className="w-screen absolute top-0 right-0 placeholder-transparent"
                alt=""                
            /> */}
        </div>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          
        </p>
      </div>
        <div className="container mx-auto grid place-items-center px-8">
            <StaticImage src="../images/qa-header@2x.png" width="480" className="justify-self-center mb-10" alt="" />
        
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
