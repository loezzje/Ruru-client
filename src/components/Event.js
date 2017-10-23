import React, { PureComponent } from 'react'
import Eye from '../assets/logos/RURU_eye.png'
import './Event.css'

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

class Event extends PureComponent {
  render() {
    const { cover, name, description, place, start_time } = this.props

    return (
      <article className="eventitem">
        <div className='smallcover'>
          <img src={ cover.source } alt='fbcover' />
        </div>
          <h3 className="event-title">{ name }</h3>
          <p>{ start_time === undefined ? "no date" : start_time }</p>
        <div className="event-details">
          <span className="eyecon"><img src={ Eye } alt="location-icon" />{ place === undefined ? "no location set" : place.name }</span>
          <p>{ description === undefined ? "no description" : truncate(description, 50) }</p>
        </div>
      </article>
    )
  }
}

export default Event
