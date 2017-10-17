import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './MenuItem.css'

class MenuItem extends PureComponent {


  render() {
    const { name } = this.props
    return (
      <li className="menu-item">
        <h1>
          {name}
        </h1>
      </li>

    )
  }
}
const mapStateToProps = ({ categories }) => ({ ...categories })

export default connect(mapStateToProps)(MenuItem)
