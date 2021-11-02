/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
 const path = require('path')

 exports.createPages = async ({ actions: { createPage }, graphql }) => {
   const { data } = await graphql(
     `
       {
        pages: allGraphCmsPage {
          nodes {
            id            
            slug            
          }
        }
        
        posts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
          edges {
            nextPost: next {
              slug
              title
            }
            post: node {
              id
              slug
              date: formattedDate              
            }
            previousPost: previous {
              slug
              title
            }
          }
        }
        books: allGraphCmsBook(sort: {fields: releaseDate, order: ASC }) {
          edges {
            nextBook: next {
              slug
              title
            }
            book: node {
              id                                                  
              slug              
              releaseDate: formattedDate              
              faqs {
                id                
              }              
            }
            previousBook: previous {
              slug
              title
            }
          }
        }
        faqs: allGraphCmsFaq {
          edges {
            nextFaq: next {
              slug
              title
            }
            faq: node {
              id                                                  
              slug                                                              
            }
            previousFaq: previous {
              slug
              title
            }
          }
        }
        seriesPlural: allGraphCmsSeries {
          edges {
            nextSeries: next {
              slug
              title
            }
            series: node {
              id                                                  
              slug                                                                                 
            }
            previousSeries: previous {
              slug
              title
            }
          }
        }
        videos: allGraphCmsVideo {
          edges {
            nextVideo: next {
              slug
              title
            }
            video: node {
              id        
              slug       
              date: formattedDate                                                             
            }
            previousVideo: previous {
              slug
              title
            }
          }
        }
        photos: allGraphCmsPhoto {
          edges {
            nextPhoto: next {
              slug
              title
            }
            photo: node {
              id         
              slug    
              date: formattedDate                                                            
            }
            previousPhoto: previous {
              slug
              title
            }
          }
        }

      }
    `
  )

  if (data.errors) throw data.errors

  data.posts.edges.forEach(({ nextPost, post, previousPost }) => {
    createPage({
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        id: post.id,
        post,
        previousPost,
        nextPost,
      },
      path: `/blog/${post.slug}`,
    })
  })

  data.pages.nodes.forEach((page) => {
    createPage({
      component: path.resolve('./src/templates/default-page.js'),
      context: {
        page,
      },
      path: `/${page.slug}`,
    })
  })

  data.books.edges.forEach(({ nextBook, book, previousBook }) => {
    createPage({
      component: path.resolve('./src/templates/book.js'),
      context: {
        id: book.id,
        book,
        previousBook,
        nextBook,
      },
      path: `/books/${book.slug}`,
    })
  })


  data.faqs.edges.forEach(({ nextFaq, faq, previousFaq }) => {
    createPage({
      component: path.resolve('./src/templates/faq.js'),
      context: {
        id: faq.id,
        faq,
        previousFaq,
        nextFaq,
      },
      path: `/faqs/${faq.slug}`,
    })
  })

  data.seriesPlural.edges.forEach(({ nextSeries, series, previousSeries }) => {
    createPage({
      component: path.resolve('./src/templates/series.js'),
      context: {
        id: series.id,
        series,
        previousSeries,
        nextSeries,
      },
      path: `/series/${series.slug}`,
    })
  })

  data.videos.edges.forEach(({ nextVideo, video, previousVideo }) => {
    createPage({
      component: path.resolve('./src/templates/video.js'),
      context: {
        id: video.id,
        video,
        previousVideo,
        nextVideo,
      },
      path: `/videos/${video.slug}`,
    })
  })
  data.photos.edges.forEach(({ nextPhoto, photo, previousPhoto }) => {
    createPage({
      component: path.resolve('./src/templates/photo.js'),
      context: {
        id: photo.id,
        photo,
        previousPhoto,
        nextPhoto,
      },
      path: `/photos/${photo.slug}`,
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      formattedDate: {
        type: 'String',
        resolve: (source) => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },
    GraphCMS_Book: {
      formattedDate: {
        type: 'String',
        resolve: (source) => {
          const date = new Date(source.releaseDate)

          return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },
    GraphCMS_Video: {
      formattedDate: {
        type: 'String',
        resolve: (source) => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },
    GraphCMS_Photo: {
      formattedDate: {
        type: 'String',
        resolve: (source) => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },

  }

  createResolvers(resolvers)
}


