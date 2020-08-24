import React from "react"
//import { Link } from "gatsby"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Layout from "../components/layout"
import Header from "../components/header"



// Styles
import '../style/index.css';

// Images
//import Image1 from "../images/toronto.jpg"
import Image2 from "../images/LA.jpg"
import Image3 from "../images/toronto2.jpg"
import Image4 from "../images/Tokyo.jpg"



/** <img src={Image1} alt="main" /> */

export default function Home() {
  
  return (
    
    <Layout>
      <Header />
    <div className="frontPage">
      <h1 className="mainHeader">CityScape</h1>
      <h3 className="intro"></h3>
      <p className="paragraph"></p>
      <div className="frontPic">
      </div>
      <div className="cards">
      <CardGroup>
    <Card>
      
    <Card.Img src={Image2} alt="main" variant="top" />
    <Card.Body>
      <Card.Title>Los Angeles</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img src={Image3} alt="main" variant="top" />
    
    <Card.Body>
      <Card.Title>Toronto</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img src={Image4} alt="main" variant="top" />
    
    <Card.Body>
      <Card.Title>Tokyo</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
      <p className="paragraph"></p> 
      
      </div>
      </div>
  </Layout> 
  
  )
}