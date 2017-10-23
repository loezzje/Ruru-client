import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import deleteCategory from '../actions/categories/delete'
import deleteOrganization from '../actions/organizations/delete'
import deleteFaq from '../actions/faq/delete'
import { Link } from 'react-router-dom'
import './ListItemAdmin.css'

class ListItemAdmin extends PureComponent {

  deleteEntry(event) {
    event.preventDefault()

    const { deleteCategory, deleteOrganization, deleteFaq, name } = this.props

    var parseURI = this.props.path.split('/')
    var ObjectId = parseURI[2] // Make sure order of URI in routes has the ObjectId after /admin/

    if (parseURI.includes('create-category')) {
      if (window.confirm(`Are you sure you want to delete Category: "${name}"`))
      deleteCategory(ObjectId)
    } else if (parseURI.includes('create-organization')) {
      if (window.confirm(`Are you sure you want to delete Organization: "${name}"`))
      deleteOrganization(ObjectId)
    } else {
      if (window.confirm(`Are you sure you want to delete Faq: "${name}"`))
      deleteFaq(ObjectId)
    }
  }

  render() {
    return (
      <li className="listitem-admin">
        <span>{ this.props.name }</span>
        <Link to={{ pathname: this.props.path }} onClick={this.deleteEntry.bind(this)}>Delete</Link>
        <Link to={{ pathname: this.props.path }}>Edit</Link>
      </li>
    )
  }
}

const mapDispatchToProps = { deleteCategory, deleteOrganization, deleteFaq }

export default connect(null, mapDispatchToProps)(ListItemAdmin)
