import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './About.css'

export class Events extends PureComponent {
  render() {

    return(
      <div className='aboutpage main-container'>
        <header>
          <h3>EVENTS</h3>
        </header>

        <main>
          <p>taking events from fb</p>
        </main>
      </div>
    )
  }
}

const mapStateToProps = null

export default connect(mapStateToProps, null)(Events)
