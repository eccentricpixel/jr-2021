import { useStaticQuery, graphql } from 'gatsby';

export default function useContentSettings() {
  const data = useStaticQuery(graphql`
    query {
        allGraphCmsContentSetting {
            nodes {
                seriesPlural {
                    remoteId
                    title
                    slug
                    description {
                    html
                    }
                    id
                    seriesImage {
                    url
                    width
                    localFile {
                        childImageSharp {
                        gatsbyImageData
                        }
                    }
                    height
                    handle
                    fileName
                    }
                }          
                bioIntro {
                    html
                }
                bioExtendedContent {
                    html
                }
                bioAboutImage {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    fileName
                    handle
                    height
                    width
                    url
                }            
                blurbOther {
                    html
                }
                blurbBuyPage {
                    html
                }                
                blurbRingtones {
                    html
                }
                blurbDustJackets {
                    html
                }
                blurbExclusives {
                    html
                }
                blurbInternational {
                    html
                }
                blurbNewsletters {
                    html
                }
                blurbBibliography {
                    html
                }
                blurbScreensavers {
                    html
                }
                blurbSelectATerritory {
                    html
                }
                blurbWallpapers {
                    html
                }
            }
        }
    }
  `);

  const settings = data.allGraphCmsContentSetting.nodes.map(node => {
    const { seriesPlural, bioIntro, bioExtendedContent, bioAboutImage, blurbOther, blurbBuyPage, blurbRingtones, blurbDustJackets, blurbExclusives, blurbInternational, blurbNewsletters, blurbBibliography, blurbSelectATerritory, blurbScreensavers, blurbWallpapers  } = node;
    return {
        seriesPlural: seriesPlural,        
        bioIntro: bioIntro.html,
        bioExtendedContent: bioExtendedContent,
        bioAboutImage: bioAboutImage,
        blurbOther: blurbOther.html,
        blurbBuyPage: blurbBuyPage.html,
        blurbRingtones: blurbRingtones.html,
        blurbDustJackets: blurbDustJackets.html,
        blurbExclusives: blurbExclusives.html,
        blurbInternational: blurbInternational.html,
        blurbNewsletters: blurbNewsletters.html,
        blurbBibliography: blurbBibliography.html,
        blurbSelectATerritory: blurbSelectATerritory.html,
        blurbScreensavers: blurbScreensavers.html,
        blurbWallpapers: blurbWallpapers.html
    }
  });

  return {
    settings
  }

}