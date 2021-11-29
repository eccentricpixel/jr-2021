/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Footer from './footer'
import Header from './header'
import SEO from './seo'


function Layout({ children, pageContext: { page } }) {  
  return (
    <React.Fragment>
      <SEO {...page} />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow mx-auto w-full">
          <Header />
          <main className="flex-grow mb-8">{children}</main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
