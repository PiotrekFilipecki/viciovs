import React from "react"
import { Link, } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ScrollAnimation from 'react-animate-on-scroll';
import contactStyles from "../components/contactStyles.module.css"

// const showLinksList = ({data: {home}},socialLinks) => {
//   socialLinks = home.socialLinks
//   socialLinks.map(socialLink => {
//     <ContactLink socialLinkUrl={socialLink.linkTitle} />
//   })
// }

const IndexPage = ({data: {home}}, socialLinks) => (
  
  <Layout className="home">
    <SEO title="Home" />
    <BackgroundVideo id="backgroundVideo"
      videoSource={home.backgroundVideo.url}
      siteLogo={home.logoSmall.url} 
    />
    
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <HomeProducts />
    <AboutSection
      content={home.aboutParagraph} 
      coverSrc={home.cover.url}
      youtubeVideoSrc={home.youtubeVideo.url}
      vimeoVideoSrc={home.vimeoUrl} 
    />
    <ContactSection id="contact" >
      <ScrollAnimation animateIn="fadeIn" delay={1}>
        <p>{home.contactParagraph}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={2}>
        <div className={contactStyles.socialLinksWrapper}>
          {  
            home.socialLinks.map((socialLink) => (
              <a key={socialLink.id} href={socialLink.linkTitle}>
                <img src={socialLink.linkIcon.url} />
              </a>
            ))
          }
        </div>
        </ScrollAnimation>
    </ContactSection>

    

  </Layout>
)

export default IndexPage


export const query = graphql`
query HomeQuery {
  home: datoCmsHomePage {
    id
    aboutParagraph
    contactParagraph
    logoSmall {
      url
    }
    cover {
      url
    }
    soundcloud
    spotify
    vimeoVideo {
      url
    }
    vimeoUrl
    youtubeVideo {
      url
    }
    backgroundVideo {
      url
    }
    socialLinks {
      linkTitle
      linkIcon {
        url
      }
    }
  }
  allDatoCmsProduct {
    edges {
      node {
        id
        price
        productName
        productPhoto {
          url
        }
      }
    }
  }
}
`

// export const aboutQuery = graphql`
// query MyQuery {
//   homePage {
//     id
//     aboutParagraph
//     cover {
//       url
//       video {
//         streamingUrl
//       }
//     }
//     instagram
//     facebook
//     vimeoVideo {
//       url
//     }
//     youtube
//     youtubeVideo {
//       height
//       provider
//       providerUid
//       thumbnailUrl
//       title
//       url
//       width
//     }
//   }
// }
// `




