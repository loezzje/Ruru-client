import React, { PureComponent } from 'react'
import './TopicCard.css'

class Event extends PureComponent {
  render() {
    const { cover, name, description, place, start_time } = this.props


    return (
      <article className="event-item">
        <div className='small-cover'>
          <img src={ cover.source } alt='fbcover' />
        </div>
          <h3 className="event-title">{ name }</h3>
          <p>{ start_time === undefined ? "no date" : start_time }</p>
        <div className="event-details">
          <p>{ place === undefined ? "no location set" : place.name }</p>
          <p>{ description === undefined ? "no description" : description }</p>
        </div>
      </article>
    )
  }
}

export default Event
