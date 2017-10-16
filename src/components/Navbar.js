import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Navbar.css'




class Navbar extends PureComponent {

  render() {

    return (
      <div className="navbar">

        <div className="hamburger">
          <i className="material-icons md-46">menu</i>
        </div>

      </div>


    )
  }
}


export default Navbar;
