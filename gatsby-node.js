/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require(`fs`)

exports.createSchemaCustomization= ({ actions }) => {
    const { createTypes } = actions
    // if you change the schema in GraphCMS, you should uncomment the next line, delete the existing typeDefs file, save and run develop or build again to rengenerate the file. Then go back and comment it out. This next line is CRITICAL for Gatsby to build successfully.
    //actions.printTypeDefinitions({path: './typeDefs.txt'})

    const typeDefs = fs.readFileSync(`./typeDefs.txt`, {
        encoding: `utf-8`,
    })
    createTypes(typeDefs)
}

 
 exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const result = await graphql(`
      {
        pages: allGraphCmsPage {
            nodes {
                id            
                slug         
                title   
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
                    title
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
                title
                releaseDate: formattedDate                
                slug                                
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
                title                                                       
              }
              previousFaq: previous {
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
                title                                                         
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
                title   
                date: formattedDate                                       
              }
              previousPhoto: previous {
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
              title                 
            }
            previousSeries: previous {
              slug
              title
            }
          }
        }

      }
    `);

    const pages = result.data.pages.nodes.map(async (page) => {    
        createPage({
            path: `/${page.slug}`,
            component: require.resolve('./src/templates/default-page.js'),
            context: {
                page,
                id: page.id
            },            
        })
    })
    await Promise.all([pages])

    const posts = result.data.posts.edges.map(async (nextPost, post, previousPost) => {        
        createPage({
            path: `/news/${post.slug}`,
            component: require.resolve('./src/templates/news-post.js'),
            context: {
                id: post.id,
                post,
                previousPost,
                nextPost,
            },            
        })
      })
      await Promise.all([posts])

    const books = result.data.books.edges.map(async (nextBook, book, previousBook) => {       
        createPage({
            path: `/books/${book.slug}`,
            component: require.resolve('./src/templates/book.js'),
            context: {
                id: book.id,
                book,
                previousBook,
                nextBook,
            },            
        })
    })
    await Promise.all([books])


    const faqs = result.data.faqs.edges.map(async (nextFaq, faq, previousFaq) => { 
        createPage({
            path: `/faqs/${faq.slug}`,
            component: require.resolve('./src/templates/faq.js'),
            context: {
                id: faq.id,
                faq,
                previousFaq,
                nextFaq,
            },            
        })
    })
    await Promise.all([faqs])

    const videos = result.data.videos.edges.map(async (nextVideo, video, previousVideo) => { 
        createPage({
            path: `/videos/${video.slug}`,
            component: require.resolve('./src/templates/video.js'),
            context: {
                id: video.id,
                video,
                previousVideo,
                nextVideo,
            },            
        })
    })
    await Promise.all([videos])

    const photos = result.data.photos.edges.map(async (nextPhoto, photo, previousPhoto) => { 
        createPage({
            path: `/photos/${photo.slug}`,
            component: require.resolve('./src/templates/photo.js'),
            context: {
                id: photo.id,
                photo,
                previousPhoto,
                nextPhoto,
            },            
        })
    })
    await Promise.all([photos])

    const series = result.data.seriesPlural.edges.map(async (nextSeries, series, previousSeries) => { 
      createPage({
          path: `/series/${series.slug}`,
          component: require.resolve('./src/templates/series.js'),
          context: {
              id: series.id,
              series,
              previousSeries,
              nextSeries,
          },            
      })
    })
    await Promise.all([series])

    
  };
  






//  exports.createPages = async ({ actions: { createPage }, graphql }) => {
//    const { data } = await graphql(
//      `
//        {
//         pages: allGraphCmsPage {
//           nodes {
//             id            
//             slug            
//           }
//         }
        
//         posts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
//           edges {
//             nextPost: next {
//               slug
//               title
//             }
//             post: node {
//               id
//               slug
//               date: formattedDate              
//             }
//             previousPost: previous {
//               slug
//               title
//             }
//           }
//         }
        
//     `
//   )

//   data.pages.nodes.forEach((page) => {
//     createPage({
//       component: path.resolve('./src/templates/default-page.js'),
//       context: {
//         page,
//       },
//       path: `/${page.slug}`,
//     })
//   })

//   data.posts.edges.forEach(({ nextPost, post, previousPost }) => {
//     createPage({
//       component: path.resolve('./src/templates/news-post.js'),
//       context: {
//         id: post.id,
//         post,
//         previousPost,
//         nextPost,
//       },
//       path: `/news/${post.slug}`,
//     })
//   })

  

//   data.books.edges.forEach(({ nextBook, book, previousBook }) => {
//     createPage({
//       component: path.resolve('./src/templates/book.js'),
//       context: {
//         id: book.id,
//         book,
//         previousBook,
//         nextBook,
//       },
//       path: `/books/${book.slug}`,
//     })
//   })


//   data.faqs.edges.forEach(({ nextFaq, faq, previousFaq }) => {
//     createPage({
//       component: path.resolve('./src/templates/faq.js'),
//       context: {
//         id: faq.id,
//         faq,
//         previousFaq,
//         nextFaq,
//       },
//       path: `/faqs/${faq.slug}`,
//     })
//   })

//   data.seriesPlural.edges.forEach(({ nextSeries, series, previousSeries }) => {
//     createPage({
//       component: path.resolve('./src/templates/series.js'),
//       context: {
//         id: series.id,
//         series,
//         previousSeries,
//         nextSeries,
//       },
//       path: `/series/${series.slug}`,
//     })
//   })

//   data.videos.edges.forEach(({ nextVideo, video, previousVideo }) => {
//     createPage({
//       component: path.resolve('./src/templates/video.js'),
//       context: {
//         id: video.id,
//         video,
//         previousVideo,
//         nextVideo,
//       },
//       path: `/videos/${video.slug}`,
//     })
//   })
//   data.photos.edges.forEach(({ nextPhoto, photo, previousPhoto }) => {
//     createPage({
//       component: path.resolve('./src/templates/photo.js'),
//       context: {
//         id: photo.id,
//         photo,
//         previousPhoto,
//         nextPhoto,
//       },
//       path: `/photos/${photo.slug}`,
//     })
//   })
//}

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


