import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Menu from './Menu.js'
import './Navbar.css'
import showMenu from '../actions/menuShow.js'
import hideMenu from '../actions/menuHidden.js'
import fetchCatagories from '../actions/categories/fetch.js'
import fetchOrganizations from '../actions/organizations/fetch.js'
import ruruLogo from '../assets/logos/ruruLogo.png'
import { Link } from 'react-router-dom'
import Headroom from '../headroom/index'
import { CSSTransitionGroup } from 'react-transition-group'

class Navbar extends PureComponent {

  componentWillMount(){
    this.props.fetchCatagories()
    this.props.fetchOrganizations()
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
    const { menuShow } = this.props
    return (


        <Headroom>
          <div className="navbar">


          <Link to={`/`} ><img src={ruruLogo} className="rurulogo" alt="logo" onClick={this.props.hideMenu}/></Link>
          <div id="hamburger" className={menuShow ? "open": "close"} onClick={this.toggleMenu.bind(this)}>

              <span></span>
              <span></span>
              <span></span>
              </div>
          </div>

          <Menu />
          

        </Headroom>



    )
  }
}

const mapStateToProps = ({ menuShow }) => ({ menuShow })
const mapDispatchToProps = { showMenu, hideMenu, fetchCatagories, fetchOrganizations }
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
