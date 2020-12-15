import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {

  return(
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Bridget, a Full Stack Developer</h2>
      <p>Learn more <Link to="/about">about </Link>  me and my work</p>
      <p>Need a Developer? <Link to="/contact"> Contact Me </Link></p>
    </Layout>
  )
}

export default IndexPage