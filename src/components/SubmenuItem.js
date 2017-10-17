import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './SubmenuItem.css'


class SubMenuItem extends PureComponent {


  render() {
    const { name } = this.props
    return (
      <li className="submenu-item">
        {name}
      </li>

    )
  }
}


export default SubMenuItem
