import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Crousel() {
  return (
     <div className='py-1 width-100%'>
    <Carousel slide={false}>
    <Carousel.Item>
      <img className="d-block w-100 "
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=pexels-robin-stickel-70497.jpg&fm=jpg"
        alt="First slide" style={{height:'450px'}}
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets-global.website-files.com/5ceda27bc61ed23757d6d8d9/5edc5584cd084e9c313c9820_Xn77eApsxlTNIq_r8fVN3aDZt_WlMiZgnd7VhrE7Zc7P0nOqQY-luI1uzbZ0Gt6NI7HKRRYLpMECWtlfJT8XObiwzNpu2Eax87h5tXSqXFBg5PyBtQ4awwSU4n7bn5jbH8eqkDjw.png"
        alt="Second slide" style={{height:'450px'}} />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
        alt="Third slide" style={{height:'450px'}}/>

      
    </Carousel.Item>
  </Carousel>
  </div> 
  )
}

export default Crousel