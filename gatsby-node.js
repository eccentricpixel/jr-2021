/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require(`fs`)

exports.createSchemaCustomization= ({ actions }) => {
    const { createTypes } = actions
    actions.printTypeDefinitions({path: './typeDefs.txt'})

    const typeDefs = fs.readFileSync(`./typeDefs.txt`, {
        encoding: `utf-8`,
    })
    createTypes(typeDefs)
}






// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes } = actions

//   // Type definitions can be provided in SDL
//   const typeDefs = `
//     type AuthorJson implements Node {
//       name: String!
//       firstName: String!
//       email: String!
//       picture: File
//     }    
//   `
//   createTypes(typeDefs)

 
// }








    












// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes } = actions

//   // Type definitions can be provided in SDL
//   const typeDefs = `
//     type AuthorJson implements Node {
//       name: String!
//       firstName: String!
//       email: String!
//       picture: File
//     }
//     type BlogJson implements Node {
//       title: String!
//       authors: [AuthorJson]
//       text: String
//       date: Date
//       tags: [String]
//       meta: Metadata
//     }
//   `
//   createTypes(typeDefs)

//   // Alternatively, you can use type builders to construct types
//   createTypes([
//     schema.buildObjectType({
//       name: `CommentJson`,
//       fields: {
//         text: `String!`,
//         blog: {
//           type: `BlogJson`,
//           resolve(parent, args, context) {
//             return context.nodeModel.getNodeById({
//               id: parent.blog,
//               type: `BlogJson`,
//             })
//           },
//         },
//         author: {
//           type: `AuthorJson`,
//           resolve(parent, args, context) {
//             return context.nodeModel.getNodeById({
//               id: parent.author,
//               type: `AuthorJson`,
//             })
//           },
//         },
//       },
//       interfaces: [`Node`],
//     }),
//   ])

//   // It is of course also possible to read type definitions from a .gql file,
//   // which will give you proper syntax highlighting
//   const additionalTypeDefs = fs.readFileSync(`type-defs.gql`, {
//     encoding: `utf-8`,
//   })
//   createTypes(additionalTypeDefs)
// }

// exports.createResolvers = ({ createResolvers }) => {
//   createResolvers({
//     Query: {
//       // Create a new root query field.
//       allAuthorFullNames: {
//         type: [`String!`],
//         resolve(source, args, context, info) {
//           const authors = context.nodeModel.getAllNodes({
//             type: `AuthorJson`,
//           })
//           return authors.map(author => `${author.name}, ${author.firstName}`)
//         },
//       },
//       // Field resolvers can use all of Gatsby's querying capabilities
//       allPostsTaggedWithBaz: {
//         type: [`BlogJson`],
//         resolve(source, args, context, info) {
//           return context.nodeModel.runQuery({
//             query: { filter: { tags: { eq: `baz` } } },
//             type: `BlogJson`,
//             firstOnly: false,
//           })
//         },
//       },
//     },
//     AuthorJson: {
//       // Add a field to an existing type by providing a field config.
//       // Note that added fields will not be available in the input filter
//       // when no type definitions are provided wth `createTypes`.
//       posts: {
//         type: [`BlogJson`],
//         resolve(source, args, context, info) {
//           // We use an author's `email` as foreign key in `BlogJson.authors`
//           const fieldValue = source.email

//           const posts = context.nodeModel.getAllNodes({
//             type: `BlogJson`,
//           })
//           return posts.filter(post =>
//             (post.authors || []).some(author => author === fieldValue)
//           )
//         },
//       },
//     },
//     BlogJson: {
//       // Add a resolver to a field defined with `createTypes`.
//       authors: {
//         resolve(source, args, context, info) {
//           const emails = source[info.fieldName]
//           if (emails == null) return null

//           const authors = context.nodeModel.getAllNodes({
//             type: `AuthorJson`,
//           })
//           return authors.filter(author => emails.includes(author.email))
//         },
//       },
//       comments: {
//         type: `[CommentJson!]!`,
//         resolve(source, args, context, info) {
//           const result = context.nodeModel.getAllNodes({
//             type: `CommentJson`,
//           })
//           return result.filter(({ blog }) => blog === source.id)
//         },
//       },
//     },
//   })
// }





 
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
            path: `/blog/${post.slug}`,
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


