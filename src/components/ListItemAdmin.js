import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './ListItemAdmin.css'

class ListItemAdmin extends PureComponent {

  render() {
    const { _id } = this.props

    return (
      <li className="listitem-admin">
        <span>{ this.props.name }</span>
        <Link to={{ pathname: `/admin`}}>Edit</Link>
      </li>

    )
  }
}

export default ListItemAdmin
