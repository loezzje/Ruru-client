import React, { PureComponent } from 'react'
import './TopicCard.css'

class TopicCard extends PureComponent {
  render() {
    return (
      <div>
        <div className='thumbnail'>
          <img src="http://via.placeholder.com/100x100" alt='thumbnail' />
        </div>
        <div className='topic'>
          <span>{this.props.title}</span>
        </div>
        <hr />
      </div>
    )
  }
}

export default TopicCard
