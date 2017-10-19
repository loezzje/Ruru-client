import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Menu.css'
import MenuItem from './MenuItem.js'
import { CSSTransitionGroup } from 'react-transition-group'




class Menu extends PureComponent {
  renderMenu(categorie, index){
  return  <MenuItem key={index} {...categorie}/>

  }



  render() {
    const { menuShow } = this.props
     if (!menuShow) return null

    return (
      <div id="menu" className={menuShow ? "openMenu": ""}>
        <ul>
          <CSSTransitionGroup
          transitionAppear={true}
          transitionName="example"
          transitionEnter={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.props.categories.map(this.renderMenu.bind(this))}
        </CSSTransitionGroup>

        </ul>
      </div>



    )
  }
}
const mapStateToProps = ({ menuShow, categories }) => ({ menuShow, categories })

export default connect(mapStateToProps)(Menu)
