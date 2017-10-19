import React, { PureComponent } from 'react'
import './TopicCard.css'

class TopicCard extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className='thumbnail'>
          <img src={this.props.image} alt='thumbnail' />
        </div>
        <div className='topic'>
          <span>{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default TopicCard
