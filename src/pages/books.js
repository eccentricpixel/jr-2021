import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function BooksPage({ data: { allGraphCmsBook } }) {
  return (
    <div className="flex">
      {/* <div className="page_background w-screen absolute top-0 right-0 -z-1">
          <StaticImage
              src="../images/page-background_books-series@2x.jpg"
              className="w-screen absolute top-0 right-0 placeholder-transparent"
              alt=""                
          />
      </div>
      <div className="contentWrapper flex gap-4 mx-auto mt-20">
        <div id="sidebar" className="flex-shrink invisible xl:visible">              
            <div id="utilityNav" className="sticky top-40 rounded-md">
              <div class="utilityNav__heading bg-white bg-opacity-25 text-xs text-grey-500 italic pl-0 p-1 pr-3 relative mb-2">Dive In Deeper</div>
              <div class="utilityNav__menu uppercase font-bold text-xs">
                  <ul>
                    <li className="mb-1"><a href="#latest-release" class="active">Latest Release <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#upcoming" class="">Upcoming <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#sigma-series" class="">Sigma Series <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#moonfall-saga" class="">Moonfall Saga <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#individual-adventures" class="">Individual Adventures <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#tucker-wayne-series" class="">Tucker Wayne Series <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#sanguines-series" class="">Sanguines Series <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#jake-ransom-series" class="">Jake Ransom Series <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#short-stories" >Short Stories <span class="extender"></span></a></li>
                    <li className="mb-1"><a href="#anthologies" >Anthologies <span class="extender"></span></a></li>                
                    <li className="mb-1"><a href="#collaborations" >Collaborations <span class="extender"></span></a></li>
                  </ul>
              </div>
              <div class="utilityNav__search">
                  
              </div>          
            </div>
        </div>

        <div className="flex-grow">

          <div id="latestRelease" className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="col-start-1 row-span-3">
              <StaticImage
                    src="../images/lastRelease.png"
                    className="w-full relative placeholder-transparent"
                    alt=""                
                />
            </div>
            <div className="col-span-2 pt-20">
              <small className="text-grey-500">Latest Release</small>
              <h2 className="text-2xl">The Last Odyssey</h2>
              <small>Release Date: <span>Sep 29, 2020</span></small>
              <div className="grid gap-10 pt-5 grid-cols-3">
                <div className="xl:col-span-2">
                  <p>Experience the exciting breadth of #1 New York Times bestselling author James Rollins’s wild imagination and adventurous spirit in this anthology of his short masterworks, including a new full-length novella featuring Captain Tucker Wayne and his military war dog, Kane, as well as nine previously published short stories, gathered together for the first time.</p>
                  <p>In this breathtaking collection of short fiction, his first-ever anthology, James Rollins brings together ten thrilling stories that dig a little deeper into his creative stomping grounds and open vistas into new landscapes and characters.</p>
                </div>            
                <div className="xl:col-span-1">
                  <small>Dive In Deeper</small>
                  <ul>
                    <li><a href="#">Where To Buy</a></li>
                    <li><a href="#">Read Excerpt</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Q&amp;A</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">International Editions</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>       


          <ul className="">
            {allGraphCmsBook.nodes.map((book) => {
              return (
                <li key={book.id} className="py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <time dateTime={book.date}>{book.date}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                          <Link
                            to={`/books/${book.slug}`}
                            className="text-gray-900"
                          >
                            {book.title}
                          </Link>
                        </h2>
                        {book.description && (
                          <div className="prose max-w-none text-gray-500">
                            <div dangerouslySetInnerHTML={{__html: book.synopsis?.html}}></div>
                          </div>
                        )}
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          to={`/books/${book.slug}`}
                          className="text-purple-500 hover:text-purple-600"
                          aria-label={`Read "${book.title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>


        </div>
      
      </div> */}
    </div>
  )
}

export const booksPageQuery = graphql`
  {
    allGraphCmsBook {
      nodes {
        id        
        synopsis {
          html
        }
        slug
        title        
      }
    }
  }
`

export default BooksPage
