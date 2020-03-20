/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import ScrollToTop from './ScrollToTop/ScrollToTop';
import toTopStyles from './ScrollToTop/ScrollToTop.module.css'
import "animate.css/animate.min.css";


if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {

  const [buttonVisibility, setButtonVisibility] = useState(false);



  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      datoCmsHomePage {
        logoSmall {
          url
        }
      }
    }
  `)

useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 1500;
    if (isScrolled !== buttonVisibility) {
      setButtonVisibility(!buttonVisibility)
    }
  };

  document.addEventListener('scroll', handleScroll, { passive: true});

  return () => {
    document.removeEventListener('scroll', handleScroll);
  };
}, [buttonVisibility]);

  return (
    <>
      <Header siteLogo={data.datoCmsHomePage.logoSmall.url} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
          //padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
        
          <img src={data.datoCmsHomePage.logoSmall.url} />
          © {new Date().getFullYear()}, VICIOVS
          {` `}
          
        </footer>
        <div data-active={buttonVisibility} className={toTopStyles.ScrollButtonWrapper}>
          <ScrollToTop scrollStepInPx="50" delayInMs="16.66"  />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
