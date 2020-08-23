import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div>
    <Link to="/destinations/">Destinations</Link>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
    <Header />

  </div>
  )
}
