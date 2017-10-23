import React, { PureComponent } from 'react'
import Eye from '../assets/logos/RURU_eye.png'
import Timestamp from 'react-timestamp'
import './Event.css'

function truncate(str, no_words) {
  if (str.split(" ").length > 50)
    return (str.split(" ").splice(0, no_words).join(" ")) + "...";
  else return str
}

class Event extends PureComponent {
  render() {
    const { cover, name, description, place, start_time } = this.props

    return (
      <article className="eventitem">
        <div className='smallcover'>
          <img src={ cover.source } alt='fbcover' />
        </div>
        <div className="date">
        { start_time === undefined ? "no date" : <Timestamp time={start_time} format="date" /> }
        </div>
        <div className="event-details">
            <h2>{ name }</h2>
            <span className="eyecon"><img src={ Eye } alt="location-icon" />{ place === undefined ? "no location set" : place.name }</span>
        </div>
        <div className="description">
          <p>{ description === undefined ? "no description" : truncate(description, 50) }</p>
        </div>
      </article>
    )
  }
}

export default Event
