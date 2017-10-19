import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './ListItemAdmin.css'

class ListItemAdmin extends PureComponent {

  render() {
    return (
      <li className="listitem-admin">
        <span>{ this.props.name }</span>
        <Link to={{ pathname: this.props.path }}>Edit</Link>
      </li>

    )
  }
}

export default ListItemAdmin
