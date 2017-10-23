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
    if(this.props.fbEvents.data === undefined ){return null}
    return(
      <div className='aboutpage main-container'>
        <header>
          <h3>EVENTS</h3>
        </header>

        <main>
          <div className="test-eventy" >
          <img src={this.props.fbEvents.data[1].cover.source} alt="pand" />
          <p>{this.props.fbEvents.data[1].name}</p>
          <p>{this.props.fbEvents.data[1].description}</p>
          <p>{this.props.fbEvents.data[1].place.name}</p>
          </div>

        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ fbEvents }) => ({ fbEvents })
const mapDispatchToProps = { facebookEvents }

export default connect(mapStateToProps, mapDispatchToProps)(Events)
