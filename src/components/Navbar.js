import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Menu from './Menu.js'
import './Navbar.css'
import showMenu from '../actions/menuShow.js'
import hideMenu from '../actions/menuHidden.js'
import fetchCatagories from '../actions/categories/fetch.js'

class Navbar extends PureComponent {

  componentWillMount(){
    this.props.fetchCatagories()
  }

  toggleMenu(){
    const { menuShow} = this.props

    if (menuShow) {
      this.props.hideMenu()
    } else {
      this.props.showMenu()
    }
  }

  toggleHamburger(){
    const { menuShow} = this.props
    if (menuShow) {
      return <i className="material-icons md-46" onClick={this.toggleMenu.bind(this)} >close</i>
    } else {
      return <i className="material-icons md-46" onClick={this.toggleMenu.bind(this)} >menu</i>
    }
  }

  render() {

    return (
      <div>
        <div className="navbar">

          <div className="hamburger">
            {this.toggleHamburger()}
          </div>

        </div>
        <Menu />
      </div>


    )
  }
}

const mapStateToProps = ({ menuShow }) => ({ menuShow })
const mapDispatchToProps = { showMenu, hideMenu, fetchCatagories }
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
