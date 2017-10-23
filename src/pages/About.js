import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Logo from '../assets/logos/ruruLogo.png'
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
    const { about } = this.props

    return(
      <div className='aboutpage main-container'>
        <header>
        <img className="big-logo" src={ Logo } alt="RURU icon"/>
          <h3>ABOUT RURU</h3>
        </header>

        <main>
          <p>{ this.renderAbout(about) }</p>
        </main>
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
