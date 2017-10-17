import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './SubmenuItem.css'
import { Link } from 'react-router-dom'


class SubMenuItem extends PureComponent {


  render() {
    const { name, _id } = this.props
    return (
      <li className="submenu-item">
        <Link to={`/organizations/${_id}`} >{name}</Link>
      </li>

    )
  }
}


export default SubMenuItem
