import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <nav>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>

        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">Online Store</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Support</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <div className="search-container">
            <form action="/#">
              <input type="text" placeholder="Search.." name="search"></input>

              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
