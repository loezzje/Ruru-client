import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './categoryButton.css'

export class categoryButton extends PureComponent {
  render () {
    const { _id, icon, name, tagline } = this.props

    return(
      <article className='categoryButton'>
        <Link to={`/categories/${_id}`}>
          <div><i className="material-icons md-46">{ icon }</i></div>
          <span className='name'>{ name }</span>
          <div className='tagline'>{ tagline }</div>
        </Link>
      </article>
    )
  }
}

export default categoryButton
