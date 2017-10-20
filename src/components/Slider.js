import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Slick from 'react-slick'
import './Slider.css'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

export class Silder extends PureComponent {

  render() {
    return(
      <div className="slider-container">
        <Slick {...settings} >
          <div className="silderimage" ><img src="http://blog.colourfulrebel.com/files/2017/10/headings_8619_69773.jpeg" alt="pand" /></div>
          <div className="silderimage" ><img src="http://cdn.history.com/sites/2/2017/03/GettyImages-157278376.jpg" alt="pand" /></div>
        </Slick>
      </div>
    )
  }
}



export default connect(null)(Silder)
