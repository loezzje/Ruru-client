import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Logo from '../assets/logos/ruruLogo.png'
import Maps from '../components/Maps'
import './About.css'

export class About extends PureComponent {

  renderAbout(text) {
    if (text === undefined) return null
    return text.split("\n").map(function(item) {
      return (
        <span>
          { item }
          <br/>
        </span>
      )
    })
  }

  render() {
    const { about, phone, address } = this.props

    return(
      <div className='aboutpage main-container'>
        <br />
        <div className="aboutcontainer">
          <header>
          <img className="big-logo" src={ Logo } alt="RURU icon"/>
            <h3>ABOUT RURU</h3>
          </header>

          <main>
            <div className="abouttext">
              <p>{ this.renderAbout(about) }</p>
            </div>

            <div className="contact">
              <h3>Contact</h3>
              <ul>
                <li>Phone: +31(0){ phone }</li>
                <li>Address: { address }</li>
              </ul>
            </div>
          </main>
        </div>
        <div className="map"><Maps address={ address }/></div>
      </div>
    )
  }
}

const mapStateToProps = ({ ruru }, { params }) => {
  const thisruru = ruru[0]
  return {
    ...thisruru,
  }
}

export default connect(mapStateToProps, null)(About)
