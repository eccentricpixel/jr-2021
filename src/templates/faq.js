import React from 'react'
import { graphql, Link } from 'gatsby'
//import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


function FaqTemplate({
    // data: {  },
    pageContext: { nextFaq, faq, previousFaq },
}) {
  return (
    <article>
      <header className="pt-6 lg:pb-10">
        <div className="space-y-1 text-center">
          
        </div>
      </header>      
      <section       
        id="faq_overview"
        className="pb-16 md:pb-20 max-w-7xl mx-auto px-5"        
      >        
        <div className="lg:pb-0 md:col-span-3 md:row-span-2 px-6">          
          <div className="prose max-w-none pt-10 pb-8">
            <h1 className="text-3xl leading-9 font-light text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {faq.question}
            </h1>            
            <div className="text-2xl" dangerouslySetInnerHTML={{__html: faq.answer.html}}></div>             
          </div>
        </div>        
      </section>      
      <footer className="text-sm font-medium leading-5 pb-20 max-w-7xl mx-auto px-5">
          {(nextFaq || previousFaq) && (
            <div className="space-y-8 py-8">
              {nextFaq && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next FAQ
                  </h2>
                  <div className="text-red-500 hover:text-red-700">
                    <Link to={`/faqs/${nextFaq.slug}`}>{nextFaq.title}</Link>
                  </div>
                </div>
              )}
              {previousFaq && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous FAQ
                  </h2>
                  <div className="text-red-500 hover:text-red-700">
                    <Link to={`/faqs/${previousFaq.slug}`}>
                      {previousFaq.title}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link to="/books" className="text-red-500 hover:text-red-700">
              &larr; Browse all FAQs
            </Link>
          </div>
        </footer>
    </article>
  );
}


export default FaqTemplate
