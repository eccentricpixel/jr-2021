import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function PhotoTemplate({    
    data: { photoImage },
    pageContext: { nextPhoto, photo, previousPhoto },
}) {    
  
  return (
    <article>
      <header className="pt-6 lg:pb-10">
        <div className="space-y-1 text-center">
          
        </div>
      </header>
      
      <section       
        id="photo_overview"
        className="md:grid md:grid-cols-4 md:col-gap-6 pb-16 md:pb-20 max-w-7xl mx-auto px-5"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        {photoImage && (
            <GatsbyImage
                image={photoImage.localFile.childImageSharp.gatsbyImageData}
                className="mb-8 "
                alt=""
            />
        )}
        <div className="lg:pb-0 md:col-span-3 md:row-span-2 px-6">          
          <div className="prose max-w-none pt-10 pb-8">
              
            <h1 className="text-3xl leading-9 font-light text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {photo.title}
            </h1>                        
            <div className="bodyText" dangerouslySetInnerHTML={{__html: photo.description?.html}}></div>
          </div>
        </div>        
        
      </section>
      
      <footer className="text-sm font-medium leading-5 pb-20 max-w-7xl mx-auto px-5">
          {(nextPhoto || previousPhoto) && (
            <div className="flex justify-between">
              {previousPhoto && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Photo
                  </h2>
                  <div className="text-red-500 hover:text-red-700">
                    <Link to={`/photos/${previousPhoto.slug}`}>
                      {previousPhoto.title}
                    </Link>
                  </div>
                </div>
              )}
              {nextPhoto && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Photo
                  </h2>
                  <div className="text-red-500 hover:text-red-700">
                    <Link to={`/photos/${nextPhoto.slug}`}>{nextPhoto.title}</Link>
                  </div>
                </div>
              )}              
            </div>
          )}
          <div className="pt-8">
            <Link to="/photos" className="text-red-500 hover:text-red-700">
              &larr; Browse all photos
            </Link>
          </div>
        </footer>
    </article>
  );
}

export const pageQuery = graphql`
  fragment PhotoAssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
  
  

  query PhotoQuery($id: String!) {
    photoImage: graphCmsAsset(imagePhoto: {elemMatch: {id: {eq: $id}}}) {
      ...PhotoAssetFields
    }
    
        
  }
`

export default PhotoTemplate
