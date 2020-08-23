import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"


// Styles
import '../style/index.css';

import Image1 from "../images/toronto.jpg"

export default function Home() {
  return (
    <Layout>
      <Header />
    <div className="frontPage">
      <h1 className="mainHeader">CityScape</h1>
      <h3 className="intro">The ultimate city guide</h3>
      <p className="paragraph">Whether we know it or not, we are natural-born explorers. There are many reasons why
we explore. From birth we learn about life and how it works by exploring. No one can
be satisfied for very long without exploring. Whether you are talking to someone next to
you or looking around the room, you are exploring. Exploration is the act of searching for the purpose of discovery of information or resources. Exploration occurs in all non-sessile animal species, including humans. In human history, its most dramatic rise was during the Age of Discovery when European explorers sailed and charted much of the rest of the world for a variety of reasons. Since then, major explorations after the Age of Discovery have occurred for reasons mostly aimed at information discovery.</p>
      <div className="frontPic">
      <img src={Image1} alt="main" />
      </div>
      <div className="cards">

      <p className="paragraph"></p> 
      </div>
      </div>
  </Layout>
  
  )
}
