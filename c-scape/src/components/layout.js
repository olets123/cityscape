import React from "react"
import { Link } from "gatsby"
import "../style/layout.css"
import Footer from "../components/footer"

// import images
//import Picture1 from "../images/scrapers.jpg"

const ListLink = props => (
  <li className="navList">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
      <div>
    <div className="navbar">
      <header >
        <Link to="/">
            <h3>CityScape</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/destinations/">Destinations</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
    <div className="image">
    <h1 className="mainHeader2">CityScape</h1>
    </div>
    <div className="content">
    </div>
    < Footer />
    </div>
  )
}