import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Logo from '../assets/logos/ruruLogo.png'
import './About.css'

export class About extends PureComponent {
  render() {
    const { about } = this.props

    return(
      <div className='aboutpage main-container'>
        <header>
        <img className="big-logo" src={ Logo } alt="RURU icon"/>
          <h3>ABOUT RURU</h3>
        </header>

        <main>
          <p>{ about }</p>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ ruru }, { params }) => {
  const thisruru = ruru[0]
  return {
    ...thisruru
  }
}

export default connect(mapStateToProps, null)(About)
