// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"
import("./hero.scss")

const Hero = () => (
  <section className="hero">
    <h1>
      BioTech{" "}
      <span>
        A recognised world leader in the production and development of chemical
        agents & chemical kits.
      </span>
    </h1>

    <img
      src="static/hero_bg-c86fd551be070cdd37425a2bc683ae9a.jpeg"
      alt="A scientist looking through a Microscope"
    />

    <Link className="btn" to="/#">
      See All Of Our Products
    </Link>
  </section>
)

export default Hero
