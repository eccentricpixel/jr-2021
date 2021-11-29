import React,{useState,useEffect,useRef} from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player'
import Fade from 'react-reveal/Fade'

function TemplatePage({ data: { 
        // allGraphCmsVideo, allGraphCmsSeries 
    } }) {
//   const categoryData = allGraphCmsSeries.nodes.map((series) => {  
//     return (
//       series.slug
//     )
//   })
//   const [index,setIndex] = useState(0)
//   const [category,setCategory] = useState(['All'])

return (
    <div>
        <div className="marquee bg-gradient-to-r from-gray-100 py-8">
            <div className="contentWrapper flex gap-4 mx-auto mt-20">        
                <div id="sidebar" className="flex-shrink invisible xl:visible">              
                    <div id="jumpNav" className="sticky top-40 rounded-md filterContainer">
                        <div className="jumpNav__heading bg-white bg-opacity-25 text-xs text-gray-400 italic pl-0 p-1 pr-3 relative mb-2">Browse The Vault</div>
                        <div className="jumpNav__menu uppercase font-bold text-xs">                
                            <ul>
                            {/* <li className="mb-1"><a onClick={()=>{setCategory(['sigma-series'])}}>Sigma Series <span className="extender"></span></a></li>
                                <li className="mb-1"><a onClick={()=>{setCategory(['moonfall-saga'])}}>Moonfall Saga <span className="extender"></span></a></li>
                                <li className="mb-1"><a onClick={()=>{setCategory(['individual-adventures'])}}>Individual Adventures <span className="extender"></span></a></li>
                                <li className="mb-1"><a onClick={()=>{setCategory(['tucker-wayne-series'])}}>Tucker Wayne Series <span className="extender"></span></a></li>
                                <li className="mb-1"><a onClick={()=>{setCategory(['the-order-of-the-sanguines'])}}>Sanguines Series <span className="extender"></span></a></li>
                                <li className="mb-1"><a onClick={()=>{setCategory(['jake-ransom-series'])}}>Jake Ransom Series <span className="extender"></span></a></li>
                                <li className="mb-1"><a onClick={()=>{setCategory(['short-stories'])}}>Short Stories <span className="extender"></span></a></li>
                                <li className="mb-1"><a onClick={()=>{setCategory(['anthologies'])}}>Anthologies <span className="extender"></span></a></li>                
                                <li className="mb-1"><a onClick={()=>{setCategory(['collaborations'])}}>Collaborations <span className="extender"></span></a></li> */}
                            </ul>
                        </div>
                        <div className="jumpNav__search">
                            
                        </div>          
                    </div>
                </div>

                <div className="overflow-hidden flex-grow">
                    <div className="w-full contentMain">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

// export const templatePageQuery = graphql`
//   {
//     allGraphCmsVideo {
//       nodes {
//         id        
//         description {
//           html
//         }
//         slug
//         title   
//         youTubeVimeoID     
//       }
//     }
//     allGraphCmsSeries {
//       nodes {
//         id
//         slug
//         title
//       }
//     }
//   }
// `

export default TemplatePage