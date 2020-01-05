// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// import containerStyles from "./products.module.scss"
import("./products.scss")

const Products = () => (
  <section className="products  capped_width">
    <div className="text">
      <h2>Some of Our Products</h2>
      <p>
        Look, don’t take our word for it. we’ve worked with some of the biggest
        names in the industry and pride ourselves in what we have achieved with
        them over the years
      </p>
    </div>

    <img
      src="https://seansmyth.ie/wp-content/uploads/2020/01/testimonials.png"
      alt="testimonials"
    />
  </section>
)

export default Products
