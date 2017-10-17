import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Menu.css'
import MenuItem from './MenuItem.js'





class Menu extends PureComponent {
  renderMenu(categorie, index){
  return  <MenuItem key={index} {...categorie}/>

  }



  render() {
    const { menuShow } = this.props
    if (!menuShow) return null

    return (
      <div className="menu">
        <ul>
          { this.props.categories.map(this.renderMenu.bind(this))}
        </ul>
      </div>


    )
  }
}
const mapStateToProps = ({ menuShow, categories }) => ({ menuShow, categories })

export default connect(mapStateToProps)(Menu)
