import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav>
      <Link to="/">
        <img
          src="http://seansmyth.ie/wp-content/uploads/2020/01/BioTech_Logo.png"
          alt="BioTech Logo"
        />
      </Link>
      <div className="navContainer">
        <ul role="navigation" aria-label="Main">
          <li>
            <Link to="/">Home</Link>
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
        <ul role="navigation" aria-label="Secondary">
          <li>
            <img
              src="http://seansmyth.ie/wp-content/uploads/2020/01/cart.svg"
              alt="cart icon"
            />{" "}
            Cart
          </li>

          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/">Register</Link>
          </li>
        </ul>
      </div>
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
