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
    autoplay: false,
    autoplaySpeed: 8000
  }

export class Silder extends PureComponent {

  render() {
    console.log(this.props.fbEvents.data === undefined ? null : this.props.fbEvents.data[0].name)

    return(
      <div className="slider-container">
        <Slick {...settings} >
          <div className="silderimage" >
          <p>{this.props.fbEvents.data === undefined ? null : this.props.fbEvents.data[0].name}</p>
          <img src="http://blog.colourfulrebel.com/files/2017/10/headings_8619_69773.jpeg" alt="pand" /></div>
          <div className="silderimage" ><img src="http://cdn.history.com/sites/2/2017/03/GettyImages-157278376.jpg" alt="pand" /></div>
        </Slick>
      </div>
    )
  }
}

const mapStateToProps = ({ fbEvents }) => ({ fbEvents })

export default connect(mapStateToProps)(Silder)
