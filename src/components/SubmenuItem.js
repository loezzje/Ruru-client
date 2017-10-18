import React, { PureComponent } from 'react'
import './SubmenuItem.css'
import { Link } from 'react-router-dom'
import hideMenu from '../actions/menuHidden.js'
import { connect } from 'react-redux'

class SubMenuItem extends PureComponent {


  render() {
    const { name, _id } = this.props
    
    return (
      <li className="submenu-item">
        <Link to={{ pathname: `/organizations/${_id}`, category: this.props.content }} onClick={this.props.hideMenu} >{name}</Link>
      </li>

    )
  }
}
const mapDispatchToProps = ({hideMenu})

export default connect(null, mapDispatchToProps)(SubMenuItem)
