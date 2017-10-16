import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Menu from './Menu.js'
import './Navbar.css'
import showMenu from '../actions/menuShow.js'
import hideMenu from '../actions/menuHidden.js'

class Navbar extends PureComponent {

  toggleMenu(){
    const { menuShow} = this.props

    if (menuShow) {

      this.props.hideMenu()
    } else {
      this.props.showMenu()
    }


  }

  render() {

    return (
      <div>
        <div className="navbar">

          <div className="hamburger">
            <i className="material-icons md-46" onClick={this.toggleMenu.bind(this)} >menu</i>
          </div>

        </div>
        <Menu />
      </div>


    )
  }
}

const mapStateToProps = ({ menuShow }) => ({ menuShow })
const mapDispatchToProps = { showMenu, hideMenu }
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
