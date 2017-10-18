import React, { PureComponent } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class BreadCrumb extends PureComponent {

  getCategoryName(){
    const { categories, params } = this.props

    const category = categories.reduce((prev, next) => {
      if (next._id === params.categorieId) {
        return next
      }
      return prev
    }, {})
    return category.name
  }

  render() {
    const { params } = this.props

    return (
      <div>
        <p><Link to={'/'}  >Home</Link></p>
        <p><Link to={`/categories/${params.categorieId}`}  >{this.getCategoryName()}</Link></p>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({categories})



export default connect(mapStateToProps, null)(BreadCrumb )
