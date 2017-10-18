import React, { PureComponent } from 'react'

export class FaqItem extends PureComponent {
  render () {
    const { question, answer } = this.props

    return(
      <article className='FaqItem'>
          <div className='question'><p>{ question }</p></div>
          <div className='answer'><p>{ answer }</p></div>
      </article>
    )
  }
}

export default FaqItem
