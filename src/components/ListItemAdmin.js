import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class ListItemAdmin extends PureComponent {

  render() {
    const { _id } = this.props

    return (
      <li className="listitem-admin">
        <span>
        <p>{ this.props.name }</p>
        <Link to={{ pathname: `/admin`}}>edit</Link>
        </span>
      </li>

    )
  }
}

export default ListItemAdmin
