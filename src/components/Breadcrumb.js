import React, { PureComponent } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

class BreadCrumb extends PureComponent {

  render() {
    const { params } = this.props
    return (
      <div>
        <p><Link to={'/'}  >Home</Link></p>
        <p><Link to={'/'}  >{params.categorieId}</Link></p>
      </div>
    )
  }
}

export default BreadCrumb
