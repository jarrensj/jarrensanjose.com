import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BucketList = (props) => (
  <Layout>
    <SEO title="Jarren's bucket list" />
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
        <Link to="/bucket-list/">bucket-list</Link>
      </li>
    </ul>
    <h1>Jarren's bucket list</h1>
    <ul>
      <li><s>Win a CES Innovation Award</s></li>
      <li><s>Get a dog</s></li>
      <li><s>Train my dog to be a super good boy</s></li>
      <li>8 Figure Startup Exit</li>
      <li>
        <s>
          Startup part of accelerator program
        </s>
      </li>
      <li>Find the love of my life (does my dog count?)</li>
      <li>Win an Official Pokemon Tournament (Regional, National, International)</li>
      <li>Release a mixtape</li>
      <li>Launch a successful clothing brand</li>
      <li>Finish my personal website</li>
      <li><s>Work for a research lab</s></li>
      <li>Buy a house</li>
      <li>Buy my parents a house</li>
      <li><s>Work on a nonprofit</s></li>
      <li>Try all the best omakse</li>
      <li>Meet Kobe Bryant</li>
      <li>Join a coffee competition</li>
      <li>Record the JSJ Coffee method and put it on YouTube</li>
      <li><s>Win a hackathon</s></li>
      <li><s>Win another hackathon so I know it's not a fluke</s></li>
      <li><s>Create an artificial intelligence</s></li>
      <li><s>Create a blockchain application</s></li>
      <li><s>Work remote for an extended period of time</s></li>
      <li><s>Create a product with 100,000 monthly users</s></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BucketList

const ulStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  marginLeft: '0'
}

const liStyle = {
  marginRight: '1.5em'
}