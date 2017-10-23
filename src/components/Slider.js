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

  fbOnlinecheck(){

    if (this.props.fbEvents === null || this.props.fbEvents.data === undefined) {
      return false
    } else{
      return true
    }

  }

  renderEventSlide(slideNr){

    if (!this.fbOnlinecheck()) {return null }

    return <div className="silderimage" >
            <p>{this.props.fbEvents.data[slideNr].name} </p>
            <img src={this.props.fbEvents.data[slideNr].cover.source} alt="panda" />
            </div>
  }

  render() {
    // console.log(this.props.fbEvents.data === undefined ? null : this.props.fbEvents.data[0].name)
    // console.log("dataaa",this.props.fbEvents.data[0])
    if (!this.fbOnlinecheck()) {return null }
    return(
      <div className="slider-container">
        <Slick {...settings} >
          {this.renderEventSlide(0)}
          {this.renderEventSlide(1)}


        </Slick>
      </div>
    )
  }
}

const mapStateToProps = ({ fbEvents }) => ({ fbEvents })

export default connect(mapStateToProps)(Silder)
