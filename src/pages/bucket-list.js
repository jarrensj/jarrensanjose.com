import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"

const BucketList = (props) => (
  <Layout>
    <SEO title="Jarren's bucket list" />
    <Nav />
    <h1>Jarren's bucket list</h1>
    <p>This is not in a specific order.</p>
    <ul>
      <li>Find the love of my life (does my dog count?)</li>
      <li>8 Figure Startup Exit</li>
      <li>Place in an Official Pokemon Tournament (Regional, National, or International)</li>
      <li>Release a mixtape</li>
      <li>Launch a clothing brand</li>
      <li>Finish my personal website (never gonna happen)</li>
      <li>Buy a house</li>
      <li>Buy my parents a house</li>
      <li>Try all the best omakse (always in progress)</li>
      <li>Meet Kobe Bryant</li>
      <li>Join a coffee competition</li>
      <li>Record the JSJ Coffee method and put it on YouTube</li>
      <li>Get verified on social media</li>
      <li>Get 100k views on a YouTube video</li>
      <li>Get 10k followers on Instagram</li>
      <li>Get a patent</li>
      <li>Enter a dog show/competition</li>
      <li>Get my first 5 digit day trading</li>
      <li><s>Win a CES Innovation Award</s></li>
      <li><s>Get a dog</s></li>
      <li><s>Train my dog to be a super good boy</s></li>
      <li>
        <s>
          Startup part of accelerator program
        </s>
      </li>
      <li><s>Work for a research lab</s></li>
      <li><s>Work on a nonprofit</s></li>
      <li><s>Get my first 4 digit day trading</s></li>
      <li><s>Win a hackathon</s></li>
      <li><s>Create an artificial intelligence</s></li>
      <li><s>Create a blockchain application</s></li>
      <li><s>Try working remote for an extended period of time</s></li>
      <li><s>Create a product/service with monthly users</s></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BucketList