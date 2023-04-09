import Carousel from 'react-bootstrap/Carousel';
import Image1 from './img/1.png'
import Image2 from './img/2.png'
import Image3 from './img/3.png'
import './carousel.css'
function UncontrolledExample() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block slideshow"
          src={Image1}
          alt="First slide"
          style={{ width: 500, height: 600 ,margin: "auto"}}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block slideshow"
          src={Image2}
          alt="Second slide"
          style={{ width: 500, height: 600 ,margin: "auto"}}
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slideshow"
          src={Image3}
          alt="Third slide"
          style={{ width: 500, height: 600 ,margin: "auto"}}
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;