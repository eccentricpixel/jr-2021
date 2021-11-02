import React from 'react'

function DefaultPageTemplate({ pageContext: { page } }) {
  return (
    <section class="text-gray-600 body-font py-5">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{page.title}</h1>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="leading-relaxed text-lg" dangerouslySetInnerHTML={{__html: page.content?.html}}></div>
        </div>
      </div>
    </section>
  )
}

export default DefaultPageTemplate
