import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mainHeader">
    <nav>
      <Link to="/">
        <img
          src="http://seansmyth.ie/wp-content/uploads/2020/01/BioTech_Logo.png"
          alt="BioTech Logo"
        />
      </Link>
      <div className="navContainer">
        <ul className="mainNav" role="navigation" aria-label="Main">
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
                <input
                  type="text"
                  placeholder="Product Search.."
                  name="search"
                ></input>

                <button type="submit">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.822 20.88L17.469 14.526C18.399 13.061 18.936 11.326 18.936 9.467C18.937 4.248 14.689 0 9.468 0C4.247 0 0 4.248 0 9.468C0 14.689 4.247 18.937 9.468 18.937C11.236 18.937 12.889 18.45 14.307 17.604L20.703 24L23.822 20.88ZM3.528 9.468C3.528 6.195 6.193 3.53 9.467 3.53C12.742 3.53 15.407 6.194 15.407 9.468C15.407 12.743 12.742 15.407 9.467 15.407C6.193 15.407 3.528 12.743 3.528 9.468Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </li>
        </ul>
        <ul className="secondaryNav" role="navigation" aria-label="Secondary">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/">Register</Link>
          </li>
          <li className="cart">
            <Link to="/">
              <img
                src="http://seansmyth.ie/wp-content/uploads/2020/01/cart.svg"
                alt="cart icon"
              />
              Cart
            </Link>
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
