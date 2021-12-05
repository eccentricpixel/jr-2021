import React from 'react'
import { graphql, Link } from 'gatsby'

function SeriesTemplate({ 
    pageContext: { nextSeries, series, previousSeries },
    data: { pageContent }
 }) {
  return (
    <section className="text-gray-600 body-font py-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{page.title}</h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="leading-relaxed text-lg" dangerouslySetInnerHTML={{__html: pageContent.description?.html}}></div>
        </div>
      </div>
    </section>
  )
}

export const PageQuery = graphql`
  query SeriesQuery($id: String!) {    
    pageContent: graphCmsSeries(id: {eq: $id}) {
      description {
        html
      }
      title
      slug      
    }
  }
`

export default SeriesTemplate
