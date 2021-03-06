import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function BookTemplate({
    data: { retailers, bookContent, faqs },
    pageContext: { nextBook, book, previousBook },
}) {    
  
  return (
    <article>
      <header className="pt-6 lg:pb-10">
        <div className="space-y-1 text-center">
          
        </div>
      </header>
      <div className="page_background w-screen absolute top-0 right-0 -z-1">
      
      </div>
      <section       
        id="book_overview"
        className="md:grid md:grid-cols-4 md:col-gap-6 pb-16 md:pb-20 max-w-7xl mx-auto px-5 pt-20"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <div className="book_cover relative z-10">
          <img src={bookContent.bookCover.url} />
            
        </div>        
        <div className="lg:pb-0 md:col-span-3 md:row-span-2 px-6">          
          <div className="prose max-w-none pt-15 pb-8">
            <h1 className="text-3xl leading-9 font-light text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 mb-10">
              {book.title}
            </h1>            
            {bookContent.leadText && (
              <div className="leadText text-2xl" dangerouslySetInnerHTML={{__html: bookContent.leadText.html}}></div>
            )}
            {bookContent.bodyText && (
              <div className="bodyText" dangerouslySetInnerHTML={{__html: bookContent.bodyText.html}}></div>
            )}
          </div>
        </div>        
        <div className="text-sm font-medium leading-5 lg:col-start-1 lg:row-start-2">
          
          <div className="space-y-8 p-4">            
            <div className="border-t border-r border-b p-4">
              <h2 className="text-xs tracking-wide uppercase text-gray-500 relative">
                Release Date
                <div className="border-t absolute bottom-0 w-10" style={{right:'-17%'}}></div>
              </h2>
              <div className="text-black-500">
                {book.releaseDate}
              </div>
            </div>          
          </div>
          
          <div className="pt-8">
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
      <section id="book_chapterExcerpts" className="grid grid-cols-2 md:col-gap-6 pb-16 md:pb-20 max-w-7xl mx-auto px-5 text-center items-end">
        <Link to="" className="">
          <StaticImage src="../images/download-excerpts@2x.png" width="320" alt="" className="placeholder-transparent" />
        </Link>
        <Link to="">
        <StaticImage src="../images/preview-excerpts@2x.png" width="320" alt="" className="placeholder-transparent" />
        </Link>
        <p className="col-span-2 my-12"><b>NOTE</b>: The purchase of an eBook reader is not required to read books. For more information, <a href="">click here</a>.</p>
      </section>
      <section id="book_acclaim" className="mx-auto container my-20 mb-40">
        <p className="text-gray-500 text-opacity-75 text-3xl text-center">???James Rollins has written a slew of pulse-pounding, wildly imaginative thrillers. But he tops himself, and everybody else, in The Seventh Plague???This is reading entertainment at its level best and the best thriller of 2016.???</p>
      </section>
      <section id="book_faq" className="container mx-auto grid place-items-center">
        <StaticImage src="../images/qa-header@2x.png" width="480" className="justify-self-center mb-10" alt="" />
        
          <ul className="grid grid-cols-2 grid-flow-row auto-rows-max gap-10">            
          {faqs.nodes.map((faq) => 
              
              <li key={faq.id}>
                <div className="text-lg pb-5">{faq.question}</div>
                <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html: faq.answer?.html}}></div>
              </li>              
              
          )}
          </ul>
        
      </section>
      <section id="book_buyLinks" className="py-10 bg-gradient-to-r from-yellow-700 via-red-700 to-red-900 my-10">
        <div className="py-10 container mx-auto text-white gap-10 grid grid-cols-3">
          <h2 className="text-3xl tracking-widest uppercase text-white" ><span>Buy The Book</span><span className="block text-lg tracking-wide normal-case text-white">at any one of these retailers</span></h2>        
          <div className="col-span-2 gap-4 grid">
            <div>
              <a href={bookContent.amazon} target="_blank" className="font-extrabold block text-lg">Amazon:</a> 
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "Amazon" &&
                    <p className="text-sm text-white">{retailer.description}</p>  
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.kindle} target="_blank" className="font-extrabold block text-lg">Kindle:</a> 
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "Kindle" &&
                  <p className="text-sm text-white">{retailer.description}</p>  
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.barnesAndNoble} target="_blank" className="font-extrabold block text-lg">Barnes &amp; Noble:</a> 
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "Barnes & Noble" &&
                  <p className="text-sm text-white">{retailer.description}</p>  
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.booksAMillion} target="_blank" className="font-extrabold block text-lg">Books A Million:</a>
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "Books-A-Million" &&
                  <p className="text-sm text-white">{retailer.description}</p>  
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.nook} target="_blank" className="font-extrabold block text-lg">Nook:</a> 
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "NOOK" &&
                  <p className="text-sm text-white">{retailer.description}</p>  
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.bookshop} target="_blank" className="font-extrabold block text-lg">Bookshop:</a>
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "Bookshop" &&
                  <p className="text-sm text-white">{retailer.description}</p>  
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.googlePlay} target="_blank" className="font-extrabold block text-lg">Google Play:</a>
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "Google Play" &&
                  <p className="text-sm text-white">{retailer.description}</p>   
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.iBookstore} target="_blank" className="font-extrabold block text-lg">iBookstore:</a>
              <div className="block">
                {retailers.nodes.map((retailer) =>
                  retailer.title == "iBookstore" &&
                  <p className="text-sm text-white">{retailer.description}</p>  
                  )
                }
              </div>
            </div>
            <div>
              <a href={bookContent.indieBound} target="_blank" className="font-extrabold block text-lg">IndieBound:</a>
              <div className="block">
                {retailers.nodes.map((retailer) =>
                    retailer.title == "IndieBound" &&
                    <p className="text-sm text-white">{retailer.description}</p>  
                    )
                  }
              </div>
            </div>
            <div>
              <a href={bookContent.kobo} target="_blank" className="font-extrabold block text-lg">Kobo:</a> 
              <div className="block">
                {retailers.nodes.map((retailer) =>
                    retailer.title == "Kobo" &&
                    <p className="text-sm text-white">{retailer.description}</p>  
                    )
                  }
              </div>
            </div>
            <div>
              <a href={bookContent.thePoisonedPen} target="_blank" className="font-extrabold block text-lg">The Poisoned Pen:</a>
              <div className="block">
                {retailers.nodes.map((retailer) =>
                    retailer.title == "The Poisoned Pen" &&
                    <p className="text-sm text-white">{retailer.description}</p>  
                    )
                  }
              </div>
            </div>
            <div>
              <a href={bookContent.tor} target="_blank" className="font-extrabold block text-lg">Tor Books - Macmillan Publishers:</a> 
              <div className="block">
                {retailers.nodes.map((retailer) =>
                    retailer.title == "Tor Books - Macmillan Publishers" &&
                    <p className="text-sm text-white">{retailer.description}</p>  
                    )
                  }
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-sm font-medium leading-5 pb-20 max-w-7xl mx-auto px-5">
          {(nextBook || previousBook) && (
            <div className="flex justify-between">
              {previousBook && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Book
                  </h2>
                  <div className="text-red-500 hover:text-red-700">
                    <Link to={`/books/${previousBook.slug}`}>
                      {previousBook.title}
                    </Link>
                  </div>
                </div>
              )}
              {nextBook && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Book
                  </h2>
                  <div className="text-red-500 hover:text-red-700">
                    <Link to={`/books/${nextBook.slug}`}>{nextBook.title}</Link>
                  </div>
                </div>
              )}              
            </div>
          )}
          <div className="pt-8">
            <Link to="/books" className="text-red-500 hover:text-red-700">
              &larr; Browse all books
            </Link>
          </div>
        </footer>
    </article>
  );
}

export const pageQuery = graphql`
  

  fragment BookFaqs on GraphCMS_Faq {
    id
    question
    answer {
      html 
    }

  }
  
  

  query BookQuery($id: String!) {
    
    retailers: allGraphCmsRetailer {
      nodes {
        id
        description
        title
      }
    }    
    faqs: allGraphCmsFaq(filter: {books: {elemMatch: {id: {eq: $id}}}}){
      nodes {
        id
        question
        answer {
          html 
        }
      }
    }
    bookContent: graphCmsBook(id: {eq: $id}) {
      leadText {
        html
      }
      synopsis {
        html
      }
      bodyText {
        html
      }
      bookCover {
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }        
        }      
      }
      pageBackground {                        
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }        
        }      
      }
      bookNumber
      subheading
      bibliographyUrl
      downloadExcerpt
      browseInside
      bookExcerpt
      amazon
      kindle
      barnesAndNoble
      nook
      booksAMillion
      bookshop
      googlePlay
      iBookstore
      indieBound
      kobo
      thePoisonedPen
      torBooksMacmillanPublishers
      dustJacketColor {
        hex
      }     
    }
  }
`

export default BookTemplate
