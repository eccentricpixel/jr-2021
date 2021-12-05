import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from 'react-helmet'

function NewsPostTemplate({
  pageContext: { nextPost, post, previousPost },
  data: { postContent, coverImage }
}) {
  return (
    <div className="contactPages relative">
        <Helmet bodyAttributes={{ class: 'page-slug_news dark-mode' }} />        
        <h2 className="pt-16 text-center light text-2xl lg:text-4xl uppercase font-heading">{postContent.title}</h2>
        <div className="marquee pb-8 relative z-10">
            <div className="contentWrapper flex gap-4 mx-auto">        
                <div id="sidebar" className="flex-shrink invisible xl:visible">              
                    <div id="jumpNav" className="sticky top-40 rounded-md filterContainer light-mode">
                    <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Get The 411</div>
                        <div className="jumpNav__menu uppercase font-bold text-xs">                
                            <ul>
                                <li className="mb-2"><Link to="#" >Latest News <span className="extender"></span></Link></li>      
                                <li className="mb-2"><Link to="#">Highlights <span className="extender"></span></Link></li>                                      
                            </ul>
                        </div>
                        <div className="jumpNav__search">
                            
                        </div>          
                    </div>
                </div>

                <div className="overflow-hidden flex-grow">
                    <div className="w-full contentMain">
                                        
                      <article className="text-gray-600 body-font py-12">
                        <Helmet bodyAttributes={{ class: 'page-slug_news dark-mode' }} />      
                        <div className="container px-5 py-24 mx-auto">
                          <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{post.title}</h1>
                            <dl className="space-y-10">
                              <div>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base leading-6 font-medium text-gray-500">
                                  <time dateTime={post.date}>{post.date}</time>
                                </dd>
                              </div>
                            </dl>
                          </div>
                          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2">
                              {coverImage && (
                                <GatsbyImage
                                  image={coverImage.localFile.childImageSharp.gatsbyImageData}
                                  className="mb-8 rounded"
                                  fadeIn={false} />
                              )}
                            </div>
                      
                            <div className="leading-relaxed text-lg" dangerouslySetInnerHTML={{__html: postContent.content?.html}}></div>
                          </div>
                          <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 lg:col-start-1 lg:row-start-2">
                            {(nextPost || previousPost) && (
                              <div className="space-y-8 py-8">
                                {nextPost && (
                                  <div>
                                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                                      Next Post
                                    </h2>
                                    <div className="text-purple-500 hover:text-purple-600">
                                      <Link to={`/news/${nextPost.slug}`}>{nextPost.title}</Link>
                                    </div>
                                  </div>
                                )}
                                {previousPost && (
                                  <div>
                                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                                      Previous Post
                                    </h2>
                                    <div className="text-purple-500 hover:text-purple-600">
                                      <Link to={`/news/${previousPost.slug}`}>
                                        {previousPost.title}
                                      </Link>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                            <div className="pt-8">
                              <Link to="/" className="text-purple-500 hover:text-purple-600">
                                &larr; See more news
                              </Link>
                            </div>
                          </footer>
                        </div>
                      </article>

                    </div>
                </div>
              </div>
            </div>
          </div>

  );
}



export const NewsPageQuery = graphql`
  fragment BlogAssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        gatsbyImageData(width: 600, layout: CONSTRAINED)
      }
    }
  }

  query NewsPostQuery($id: String!) {
    coverImage: graphCmsAsset(coverImagePost: {elemMatch: {id: {eq: $id}}}) {
      ...BlogAssetFields
    }
    postContent: graphCmsPost(id: {eq: $id}) {
      content {
        html
      }
    }
  }
`

export default NewsPostTemplate