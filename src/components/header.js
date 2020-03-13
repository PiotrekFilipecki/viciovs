import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import CartNavigation from "./CartNavigation/CartNavigation";

const Header = ({ props, siteTitle, siteLogo }) => (
  
  <header
    style={{
      background: `transparent`,
      //marginBottom: `1.45rem`,
      position: `fixed`,
      width: `100%`,
      top: `0`,
      left: `0`,
      zIndex: `11`,
      display: 'flex',
      padding: `1.45rem 1.0875rem`,
      justifyContent: 'space-between',
      alignItems: 'center',
      
    }}
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
            style={{ maxWidth: `80px` }}
            src={siteLogo} />
        </Link>

    </div>
    <CartNavigation />
  </header>
)

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