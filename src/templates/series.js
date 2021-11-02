import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
//import { useRetailers } from '../hooks/useRetailers'

function SeriesTemplate({
    
    pageContext: { nextSeries, series, previousSeries },
}) {      

  return (
    <article>
      {series.title}
      <div dangerouslySetInnerHTML={{__html: series.description?.html}}></div>
    </article>
  );
}


export const pageQuery = graphql`
  fragment BookAssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
  # fragment BookFaqs on GraphCMS_Faq {
  #   id
  #   question
  #   title
  # }
  

  query SeriesQuery($id: String!) {
    pageImage: graphCmsAsset(pageBackgroundBook: {elemMatch: {id: {eq: $id}}}) {
      ...BookAssetFields
    }
    # relatedFaqs: graphCmsFaq(books: {elemMatch: {id: {eq: $id}}}) {
    #   ...BookFaqs
    # }


    # relatedFaqs: allGraphCmsBook(filter: {id: {eq: $id} }) {    
    #   nodes {
    #     id        
    #     slug
    #     title        
    #   }
    # }
    
  }
`

export default SeriesTemplate
