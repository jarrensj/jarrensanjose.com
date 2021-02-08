import { Link } from "gatsby"
import React from "react"

const Nav = () => (
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
      <a href="https://twitter.com/jarrensj">twitter</a>
    </li>
    <li style={liStyle}>
      <a style={{color: 'white'}} href="https://docs.google.com/document/d/1wGJXaHWwPDMBMRmuAhoWFZUAjDOR0blQVs62ZwJ8BRk/edit?usp=sharing">resume</a>
    </li>
  </ul>
)

export default Nav

const ulStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  marginLeft: '0'
}

const liStyle = {
  marginRight: '1.5em'
}