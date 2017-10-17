import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class categoryButton extends PureComponent {
  render () {
    const { _id, name } = this.props

    return(
      <article className='categoryButton'>
        <Link to={`/categories/${_id}`}>{ name }</Link>
      </article>
    )
  }
}

export default categoryButton
