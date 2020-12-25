import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"

const Rules = (props) => (
  <Layout>
    <SEO title="Jarren's rules" />
    <Nav />
    <h1>Jarren's rules</h1>
    <p>Jarren, please always follow these rules and stick by these principles.</p>
    <h2>Stocks</h2>
    <ul>
      <li>Don't trade more than your comfortable with -- leads to emotional trading</li>
      <li>Never buy break outs</li>
      <li>Statistically, I lose if I chase over upper vwap band</li>
      <li>Don't sell until power hour or the next morning if you are wrong</li>
      <li>Put top swings in my charts display</li>
      <li>Do not overstay welcome</li>
      <li>Don't need to chase an existing one, there will always be more</li>
      <li>Alway trust yourself over others</li>
      <li>Do not scalp news unless you are really sure of it. </li>
      <li>Always withdraw profits from day trading account and put into swing account.</li>
      <li>Trust yourself -- you put in the work.</li>
    </ul>
    <h2>Health (mental and physical)</h2>
    <ul>
      <li>Avoid using disposable containers (paper plates, paper cups)</li>
      <ul>
        <li>Not worth the mental and physical stress</li>
      </ul>
      <li>Avoid touching thermal paper (shipping labels, receipts</li>
      <li>Drink at least a glass of water in the morning.</li>
      <li>Drink at least a glass of water in the eventing.</li>
      <li>What you believe is dirty, is dirty.</li>
      <li>In and out of garages as soon as possible.</li>
      <li>Do not drink coffee out of disposable contaienrs.</li>
      <li>Minimum: Run for 30 minutes three times a week.</li>
      <li>I will not die (God will not take me) before I accomplish everything that God wants me to complete in this life.</li>
      <li>You are a hypochondriac and a germaphobe and do not fight that. All I believe is rational and true. </li>
    </ul>
    <h2>General</h2>
    <ul>
      <li>Do not work on startups with other people unless they prove with work they are willing to put in work.</li>
      <li>Do not eat sushi if it's not $100 worth or more. It's a waste of money and mercury intake.</li>
      <li>Do not pay for tacos outside of SoCal (ahem in NorCal). It's a waste of money and you will regret it.</li>
      <li></li>
    </ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Rules