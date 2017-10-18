import React, { PureComponent } from 'react'
import './SubmenuItem.css'
import { Link } from 'react-router-dom'
import hideMenu from '../actions/menuHidden.js'
import { connect } from 'react-redux'

class SubMenuItem extends PureComponent {


  render() {
    const { name, _id } = this.props
    // console.log("cat name",this.props.content)
    return (
      <li className="submenu-item">
        <Link to={{ pathname: `/categories/${this.props.content}/organizations/${_id}`, catId: _id }} onClick={this.props.hideMenu} >{name}</Link>
      </li>

    )
  }
}
const mapDispatchToProps = ({hideMenu})

export default connect(null, mapDispatchToProps)(SubMenuItem)
