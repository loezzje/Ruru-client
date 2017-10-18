import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './categoryButton.css'

export class categoryButton extends PureComponent {
  render () {
    const { _id, icon, name, description } = this.props

    return(
      <article className='categoryButton'>
        <Link to={`/categories/${_id}`}>
          <div className='icon'><img src={ icon } alt='icon' /></div>
          <span className='name'>{ name }</span>
          <div className='description'>{ description }</div>
        </Link>
      </article>
    )
  }
}

export default categoryButton
