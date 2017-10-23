import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Events.css'
import facebookEvents from '../actions/facebook/get'
import Event from '../components/Event'

export class Events extends PureComponent {
  componentWillMount() {
    const { facebookEvents } = this.props
    facebookEvents()
  }

  renderEvent(event){
    if(this.props.fbEvents.data === undefined ){return null}
    return <Event key={event.id} { ...event } />
  }

  render() {
    if(this.props.fbEvents.data === undefined ){return null}
    return(
      <div className='eventpage main-container'>
        <header>
          <h3>EVENTS</h3>
        </header>

        <main>
          <div className="events">
            {this.props.fbEvents.data.map(this.renderEvent.bind(this))}
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ fbEvents }) => ({ fbEvents })
const mapDispatchToProps = { facebookEvents }

export default connect(mapStateToProps, mapDispatchToProps)(Events)
