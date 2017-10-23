import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './About.css'
import facebookEvents from '../actions/facebook/get'

export class Events extends PureComponent {
  componentWillMount() {
    const { facebookEvents } = this.props
    facebookEvents()
  }

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

const mapStateToProps = ({ fbEvents }) => ({ fbEvents })
const mapDispatchToProps = { facebookEvents }

export default connect(mapStateToProps, mapDispatchToProps)(Events)
