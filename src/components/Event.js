import React, { PureComponent } from 'react'
import './TopicCard.css'

class Event extends PureComponent {
  render() {
    const { image, name, description, location, date } = this.props

    return (
      <article className="event-item">
        <div className='small-cover'>
          <img src={ image } alt='fbcover' />
        </div>
          <h3 className="event-title">{ name }</h3>
          <p>{ date }</p>
        <div className="event-details">
          <p>{ location }</p>
          <p>{ description }</p>
        </div>
      </article>
    )
  }
}

export default Event
