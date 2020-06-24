import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ImageJarren from "../components/imageJarren"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul style={ulStyle}>
      <li style={liStyle}>
        <a href="mailto:sanjose.jarren@gmail.com">email</a>
      </li>
      <li style={liStyle}>
        <a href="https://instagram.com/jarrensj">instagram</a>
      </li>
      <li style={liStyle}>
        <a href="https://linkedin.com/in/jarrensanjose">linkedin</a>
      </li>
      <li style={liStyle}>
        <Link to="/bucket-list/">bucket list</Link>
      </li>
    </ul>
    <h1>jarrensj</h1>
    <h2>Current</h2>
    <ul>
      <li>Hanging out with my dog, <a href="https://instagram.com/kwajidog" style={{textDecoration: 'none'}}>Bash</a>.</li>
      <li>Wearing mismatched socks.</li>
      <li>Learning how to take pictures with my camera.</li>
    </ul>
    <h2>Experience</h2>
    <ul>
      <li>
        Software Engineer at Amazon Lab126
      </li>
      <li>
        <s>Lead Software Engineer at DiagnosisAI</s>
      </li>
    </ul>
    <h2>Projects</h2>
    <ul>
      <li>
        <a href="https://ineedanote.com">ineedanote.com</a>
      </li>
      <p>Providing Work Release and Return to Work Notes for COVID-19 #FlattenTheCurve</p>
      <li>
        DexMD: Ask me medical questions
      </li>
      <p>Alexa Skill that had 100,000 monthly users</p>
    </ul>
    <small>Learn more about my experience and projects on my <a href="https://linkedin.com/in/jarrensanjose" style={{textDecoration: 'none'}}>LinkedIn</a>.</small>
    <div style={{ maxWidth: `300px`, marginTop: `2rem`, marginBottom: `1.45rem` }}>
        <ImageJarren />
    </div>
    <a href="https://instagram.com/kwajidog">
      <div style={{ maxWidth: `300px`, marginTop: `2rem`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </a>
    <small><a href="mailto:sanjose.jarren@gmail.com">Contact</a></small>
  </Layout>
)

export default IndexPage

const ulStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  marginLeft: '0'
}

const liStyle = {
  marginRight: '1.5em'
}