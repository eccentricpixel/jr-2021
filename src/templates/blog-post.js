import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

function BlogPostTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextPost, post, previousPost },
}) {
  return (
    <article>
      <header className="pt-6 lg:pb-10">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={post.date}>{post.date}</time>
              </dd>
            </div>
          </dl>
          <div>
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {post.title}
            </h1>
          </div>
        </div>
      </header>
      <div
        className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        
        <div className="divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2">
          {coverImage && (
            <GatsbyImage
              image={coverImage.localFile.childImageSharp.gatsbyImageData}
              className="mb-8 rounded"
              fadeIn={false} />
          )}
          <div className="prose max-w-none pt-10 pb-8">
          <div dangerouslySetInnerHTML={{__html: post.content.html}}></div>
          </div>
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
                    <Link to={`/posts/${nextPost.slug}`}>{nextPost.title}</Link>
                  </div>
                </div>
              )}
              {previousPost && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Post
                  </h2>
                  <div className="text-purple-500 hover:text-purple-600">
                    <Link to={`/posts/${previousPost.slug}`}>
                      {previousPost.title}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link to="/" className="text-purple-500 hover:text-purple-600">
              &larr; Back to the blog
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}

export const postQuery = graphql`
  fragment BlogAssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        gatsbyImageData(width: 600, layout: CONSTRAINED)
      }
    }
  }

  query BlogPostQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {elemMatch: {posts: {elemMatch: {id: {in: [$id]}}}}}
    ) {
      ...BlogAssetFields
    }
    coverImage: graphCmsAsset(coverImagePost: {elemMatch: {id: {eq: $id}}}) {
      ...BlogAssetFields
    }
  }
`

export default BlogPostTemplate
