import React, { PureComponent } from 'react'
import './TopicCard.css'

class TopicCard extends PureComponent {
  render() {
    return (
      <article className="card">
        <div className='thumbnail'>
          <img src={this.props.image} alt='thumbnail' />
        </div>
          <p>{this.props.title}</p>
      </article>
    )
  }
}

export default TopicCard
