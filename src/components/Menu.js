import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Menu.css'





class Menu extends PureComponent {
  renderMenu(){
  return  <div>hello</div>

  }



  render() {
    const { menuShow } = this.props
    if (!menuShow) return null

    return (
      <div className="menu">
        { this.renderMenu() }

      </div>


    )
  }
}
const mapStateToProps = ({ menuShow }) => ({ menuShow })

export default connect(mapStateToProps)(Menu)
