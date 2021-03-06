import React from 'react'
import { graphql, Link } from 'gatsby'

function DefaultPageTemplate({ 
  pageContext: { page }, 
  data: { pageContent }
 }) {
  return (
    <section className="text-gray-600 body-font py-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{page.title}</h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="leading-relaxed text-lg" dangerouslySetInnerHTML={{__html: pageContent.content?.html}}></div>
        </div>
      </div>
    </section>
  )
}

export const PageQuery = graphql`
  query DefaultPageQuery($id: String!) {    
    pageContent: graphCmsPage(id: {eq: $id}) {
      content {
        html
      }
      title
      slug      
    }
  }
`

export default DefaultPageTemplate
