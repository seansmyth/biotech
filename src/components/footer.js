// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

import React from "react"
import("./footer.scss")

const Footer = ({}) => (
  <footer className="footer">
    <ul>
      <li className="main-menu-items">About Us</li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Vision</Link>
      </li>
      <li>
        <Link to="/">Awards</Link>
      </li>
      <li>
        <Link to="/">CSR</Link>
      </li>
      <li>
        <Link to="/">Industries</Link>
      </li>
      <li>
        <Link to="/">Careers</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </ul>
    <ul>
      <li className="main-menu-items">Accreditation</li>
      <li>
        <Link to="/">Validated Methods</Link>
      </li>
      <li>
        <Link to="/">ISO</Link>
      </li>
      <li>
        <Link to="/">REACH</Link>
      </li>
    </ul>
    <ul>
      <li className="main-menu-items">Customer Support</li>
      <li>
        <Link to="/">Ordering</Link>
      </li>
      <li>
        <Link to="/">Payment</Link>
      </li>
      <li>
        <Link to="/">Shipping & Delivery</Link>
      </li>
      <li>
        <Link to="/">Returns</Link>
      </li>
      <li>
        <Link to="/">My Account</Link>
      </li>
      <li>
        <Link to="/">FAQs</Link>
      </li>
      <li>
        <Link to="/">Customer Support</Link>
      </li>
      <li>
        <Link to="/">Ask A Scientist</Link>
      </li>
    </ul>

    <ul>
      <li className="main-menu-items">Services</li>
      <li>
        <Link to="/">Analytical Services</Link>
      </li>
      <li>
        <Link to="/">Consultancy</Link>
      </li>
    </ul>

    <ul>
      <li className="main-menu-items">News</li>
      <li>
        <Link to="/">Press</Link>
      </li>
      <li>
        <Link to="/">News</Link>
      </li>
      <li>
        <Link to="/">Conferencers & Events</Link>
      </li>
      <li>
        <Link to="/">New Products</Link>
      </li>
    </ul>

    <ul>
      <li className="main-menu-items">Legal</li>
      <li>
        <Link to="/">Imprint</Link>
      </li>
      <li>
        <Link to="/">Ts&Cs</Link>
      </li>
      <li>
        <Link to="/">Privacy Policy</Link>
      </li>
      <li>
        <Link to="/">Cookies</Link>
      </li>
    </ul>
    <div className="copyright">Copyright © 2020 Biotech Inc </div>
  </footer>
)

export default Footer
