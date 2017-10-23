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
    autoplaySpeed: 8000
  }

export class Silder extends PureComponent {

  render() {
    // console.log(this.props.fbEvents.data === undefined ? null : this.props.fbEvents.data[0].name)
    // console.log("dataaa",this.props.fbEvents.data[0])
    if(this.props.fbEvents.data === undefined ){return null}
    return(
      <div className="slider-container">
        <Slick {...settings} >
          <div className="silderimage" >
          <p>{this.props.fbEvents.data[0].name}</p>
          <a href={`https://www.facebook.com/events/${this.props.fbEvents.data[0].id}`} ><img src={this.props.fbEvents.data[0].cover.source} alt="pand" /></a></div>
          <div className="silderimage" >
          <p>{this.props.fbEvents.data[1].name}</p>
          <a href={`https://www.facebook.com/events/${this.props.fbEvents.data[1].id}`} ><img src={this.props.fbEvents.data[1].cover.source} alt="pand" /></a>
          </div>
        </Slick>
      </div>
    )
  }
}

const mapStateToProps = ({ fbEvents }) => ({ fbEvents })

export default connect(mapStateToProps)(Silder)
