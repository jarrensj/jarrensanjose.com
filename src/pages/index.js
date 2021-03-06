import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Image from "../components/image"
import SEO from "../components/seo"
import ImageJarren from "../components/imageJarren"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <h1>jarrensj</h1>
    <p>
      I'm Jarren. I'm 26 years old. I am a software engineer and I currently live in the Bay Area. I love BLACKPINK. 
      <br /><br />
      Here's my wallet: jarrensj.eth
    </p>
    <h2>Current</h2>
    <ul>
      <li>Trading (<a href="https://public.com/jarrensj" style={{textDecoration: 'none'}}>Public portfolio</a>).</li>
      <li>Hanging out with my dog, <a href="https://dogoargentino.dog" style={{textDecoration: 'none'}}>Bash</a>.</li>
      <li>Wearing mismatched socks.</li>
      <li><a href="https://www.nbatopshot.com/r/jarrensj" style={{textDecoration: 'none'}}>nbatopshot</a></li>
      <li>Staying at home.</li>
    </ul>
    {/*
    <h2>Featured Projects</h2>
    <ul>
      <li>
        ineedanote
      </li>
      <p>Providing Work Release and Return to Work Notes for COVID-19 #FlattenTheCurve</p>
      <li>
        DexMD: Ask me medical questions
      </li>
      <p>Alexa Skill that had 100,000 monthly users</p>
    </ul>
    */}
    <small>Learn more about my experience and projects on my <a href="https://linkedin.com/in/jarrensanjose" style={{textDecoration: 'none'}}>LinkedIn</a>.</small>
    <div style={{ maxWidth: `300px`, marginTop: `2rem`, marginBottom: `1.45rem` }}>
        <ImageJarren />
    </div>
    <a href="https://dogoargentino.dog">
      <div style={{ maxWidth: `300px`, marginTop: `2rem`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </a>
    <small><a href="mailto:sanjose.jarren@gmail.com">Contact</a></small>
  </Layout>
)

export default IndexPage