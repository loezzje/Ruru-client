import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class ListItemAdmin extends PureComponent {

  render() {
    const { _id } = this.props

    return (
      <li className="listitem-admin">
        <span>{ this.props.name }   </span>
        <Link to={{ pathname: `/admin`}}>edit</Link>
      </li>

    )
  }
}

export default ListItemAdmin
