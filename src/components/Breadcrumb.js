import React, { PureComponent } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Breadcrumb.css'
import RightIcon from 'react-icons/lib/fa/angle-right'

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

  getOrganizationName(){
    const { organizations, params } = this.props
    console.log(params)
    const category = organizations.reduce((prev, next) => {
      if (next._id === params.organizationId) {
        return next
      }
      return prev
    }, {})
    return category.name
  }

  render() {
    const { params } = this.props

    return (
      <ul className="breadCrumb">
        <li><Link to={'/'}  >Home</Link> <RightIcon className="right-arrow" /></li>
        <li><Link to={`/categories/${params.categorieId}`}  >{this.getCategoryName()}</Link> {params.categorieId === undefined ? null : <RightIcon className="right-arrow" />}</li>
        <li>{this.getOrganizationName()}</li>
      </ul>
    )
  }
}

const mapStateToProps = ({ categories, organizations }) => ({categories, organizations})



export default connect(mapStateToProps, null)(BreadCrumb )
