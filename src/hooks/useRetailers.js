import { useStaticQuery, graphql } from "gatsby"

export const useRetailers = () => {
  const { retailers } = useStaticQuery(
    graphql`
      #query Retailers {
      #   allGraphCmsRetailer {
      #     nodes {
      #       title
      #       link
      #       tags
      #       territories {
      #         id
      #         title
      #       }            
      #       description 
      #     }
      #   }
      # }
    `
  )
  return retailers
}