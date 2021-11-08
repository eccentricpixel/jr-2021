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
    const { data } = await graphql(`
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
                    title
                    date: formattedDate
                }
                previousPost: previous {
                    slug
                    title
                }
            }
        }
      }
    `);
    
    data.pages.nodes.forEach((page) => 
        createPage({
            path: `/${page.slug}`,
            component: require.resolve('./src/templates/default-page.js'),
            context: {
                page,
            },            
        })
    );
    data.posts.edges.forEach(({ nextPost, post, previousPost }) => 
        createPage({
            path: `/news/${post.slug}`,
            component: require.resolve('./src/templates/blog-post.js'),
            context: {
                id: post.id,
                post,
                previousPost,
                nextPost,
            },            
        })
    );

    
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
//       component: path.resolve('./src/templates/blog-post.js'),
//       context: {
//         id: post.id,
//         post,
//         previousPost,
//         nextPost,
//       },
//       path: `/blog/${post.slug}`,
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
    // GraphCMS_Book: {
    //   formattedDate: {
    //     type: 'String',
    //     resolve: (source) => {
    //       const date = new Date(source.releaseDate)

    //       return new Intl.DateTimeFormat('en-US', {
    //         weekday: 'long',
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //       }).format(date)
    //     },
    //   },
    // },
    // GraphCMS_Video: {
    //   formattedDate: {
    //     type: 'String',
    //     resolve: (source) => {
    //       const date = new Date(source.date)

    //       return new Intl.DateTimeFormat('en-US', {
    //         weekday: 'long',
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //       }).format(date)
    //     },
    //   },
    // },
    // GraphCMS_Photo: {
    //   formattedDate: {
    //     type: 'String',
    //     resolve: (source) => {
    //       const date = new Date(source.date)

    //       return new Intl.DateTimeFormat('en-US', {
    //         weekday: 'long',
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //       }).format(date)
    //     },
    //   },
    // },

  }

  createResolvers(resolvers)
}


