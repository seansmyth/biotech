import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// import containerStyles from "./products.module.scss"
import("./products.scss")

const Products = () => (
  <section className="products  capped_width">
    <h2>Some of Our Products</h2>
    <p>
      At BioTech, we offer a wide range of high quality products from unique to
      foundational. Below you’ll find some of our most popular items.
    </p>
    <ul className="productsGrid">
      <li class="card">
        {" "}
        <Link className="" to="/#">
          <img
            src="https://seansmyth.ie/wp-content/uploads/2020/01/beaker.jpg"
            alt="Beakers"
          />
          <h4>Beakers</h4>
          <p>Efficitur nisl interdum turpis mollis, at finibus</p>{" "}
        </Link>
      </li>

      <li class="card">
        <Link className="" to="/#">
          <img
            src="https://seansmyth.ie/wp-content/uploads/2020/01/robot-machine.jpg"
            alt="Robotics"
          />
          <h4>Robotics</h4>
          <p>Efficitur nisl interdum turpis mollis, at finibus</p>{" "}
        </Link>
      </li>

      <li class="card">
      
        <Link className="" to="/#">
          <img
            src="https://seansmyth.ie/wp-content/uploads/2020/01/petri_dishes.jpg"
            alt="Petri Dishes"
          />
          <h4>Petri Dishes</h4>
          <p>Efficitur nisl interdum turpis mollis, at finibus</p>{" "}
        </Link>
      </li>

      <li class="card">
        {" "}
        <Link className="" to="/#">
          <img
            src="https://seansmyth.ie/wp-content/uploads/2020/01/packs.jpg"
            alt="Medi Packs"
          />
          <h4>Medi Packs</h4>
          <p>Efficitur nisl interdum turpis mollis, at finibus</p>{" "}
        </Link>
      </li>
    </ul>
  </section>
)

export default Products
