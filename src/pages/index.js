import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import Quality from "../components/home/quality"
import Products from "../components/home/products"
import Testimonials from "../components/home/testimonials"

import Newsletter from "../components/home/newsletter"

import Careers from "../components/home/careers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Quality></Quality>
    <Products></Products>
    <Testimonials></Testimonials>
    <Newsletter></Newsletter>
    <Careers></Careers>
    <h1> Hi people </h1> <p> Welcome to your new Gatsby site. </p>{" "}
    <p> Now go build something greatish. </p>{" "}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>{" "}
    <Link to="/page-2/"> Go to page 2 </Link>{" "}
  </Layout>
)

export default IndexPage
