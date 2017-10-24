import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Logo from '../assets/logos/ruruLogo.png'
import './About.css'

export class About extends PureComponent {
  render() {
    // const { about } = this.props

    return(
      <div className='aboutpage main-container'>
        <header>
          <img className="big-logo" src={ Logo } alt="RURU icon"/>
          <h3>ABOUT RURU</h3>
        </header>

        <main>
          {/* <p>{ about }</p> */}
          <p>
            RURU is a community-driven, online information platform for newcomers to the Netherlands. Centralising the many services, organisations, groups and abundance of information into ONE reliable, up to date, easy to use platform.
          </p>

          <p>
            RURU works with newcomers to provide essential information and tips on their new home, including LIFE, HEALTH, EDUCATION, RIGHTS & LAWS, JOBS, HOUSING and EVENTS.
          </p>

          <p>
            Currently there is a lot available to newcomers, however finding what is out there is difficult and time consuming. RURU makes sense of it all and allows newcomers to access what already exists fast and easy.
          </p>
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
