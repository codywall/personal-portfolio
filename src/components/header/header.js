import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignContent: `center`,
      overflow: `hidden`,
      position: `fixed`,
      top: `0`,
      width: `100vw`,
      zIndex: `499`,
      backgroundColor: `#0471a6`,
      paddingBottom: `8px`,
      height: `68px`,
      transition: `0.3s`,
    }}
  >

    <a style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          //     fontFamily: house - slant, sans- serif;
          // fontWeight: 400;
          // fontStyle: normal;
          // color: #F0C564;
          // font-size: 1.8em;
          // margin: 12px 0 0 5vw;
          // line-height: .85em;
        }}
      >
        {siteTitle}
      </Link>
    </a>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
