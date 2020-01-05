// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"
import("./hero.scss")

const Hero = () => (
  <section className="hero">
    <div className="capped_width">
      <h1>
        BioTech{" "}
        <span>
          A recognised world leader in the production and development of
          chemical agents & chemical kits.
        </span>
      </h1>

      <Link className="btn" to="/#">
        See All Of Our Products
      </Link>
    </div>

    <img
      src="https://seansmyth.ie/wp-content/uploads/2020/01/hero_bg.jpeg"
      alt="A scientist looking through a Microscope"
    />
  </section>
)

export default Hero
