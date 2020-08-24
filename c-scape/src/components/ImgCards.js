import React from "react"
//import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import '../style/ImgCards.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import images
import Img1 from "../images/LA-landscape.jpg"

export default function ImgCards() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    
    )
}


/**
 *    <Card className="bg-dark text-white">
        <Card.Img src={Img1} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        <Card.Img src={Img1} alt="Card image" />
    <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
    </Card>
 */