import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import CartNavigation from "./CartNavigation/CartNavigation";
import headerStyles from './header.module.css'

const Header = ({ props, siteTitle, siteLogo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true});

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <header
      className={headerStyles.header}
      data-active={scrolled}
    >
      <div
        style={{
          maxWidth: '100%',
          
        }}
      >
  
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img
              src={siteLogo} />
          </Link>
  
      </div>
      <CartNavigation />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLogo: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteLogo:``,
}

export default Header


// export const query = graphql`
// query HeaderQuery {
//   header: datoCmsHomePage {
//     logoSmall {
//       url
//     }
// }}`