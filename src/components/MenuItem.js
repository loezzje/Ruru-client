import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Menu.css'

class MenuItem extends PureComponent {


  render() {
    const { name } = this.props
    return (
      <h1 className="menu-item">
        {name}
      </h1>


    )
  }
}
const mapStateToProps = ({ categories }) => ({ ...categories })

export default connect(mapStateToProps)(MenuItem)
