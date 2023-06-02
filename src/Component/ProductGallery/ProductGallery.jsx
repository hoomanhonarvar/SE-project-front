import React from 'react';
import { Carousel } from "react-carousel-minimal";

function Gallery() {
 const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },

  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">

        <div className='Car' style={{
          padding: "0 20px"
          ,width:"600px !important"
        }}>
          <Carousel
            data={data}
            
            height="500px"
            radius="10px"
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
             Width: "800px",
             Height: "500px",
              margin: "40px auto",
              
            }}
          />
        </div>
    </div>
  );
}

export default Gallery;
