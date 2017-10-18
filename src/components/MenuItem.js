import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './MenuItem.css'
import DownIcon from 'react-icons/lib/fa/angle-down'
import UpIcon from 'react-icons/lib/fa/angle-up'
import SubmenuItem from './SubmenuItem.js'

class MenuItem extends PureComponent {
  constructor(props) {
    super()



    this.state = {
      submenu: false
    }
  }




  toggleSubMenu(){
    const { submenu } = this.state

    if (submenu) {
      this.setState({
        submenu: false
      })
    } else {
      this.setState({
        submenu: true
      })
    }

  }

  toggleArrow(){
    const { submenu } = this.state
    if (submenu) {
      return <UpIcon className="down-arrow" />
    } else {
      return  <DownIcon className="down-arrow" />
    }

  }

  renderSubMenu(organization, index){
    const { submenu } = this.state
    const {name} = this.props

    if (submenu) {
      return <SubmenuItem  key={index} { ...organization} content={name}/>
    } else {
      return null
    }
  }

  mapOrganisations(){
    const { organizations} = this.props
    if (organizations === undefined) {

      return null
    } else if(organizations.length > 1) {

      return organizations.map(this.renderSubMenu.bind(this))
    } else {
      return this.renderSubMenu(organizations)

    }

  }



  render() {
    const { name } = this.props

    return (
      <li className="menu-item">
        <div className="menu-category" onClick={this.toggleSubMenu.bind(this)}>
          <h1>
            {name}
          </h1>
          {this.toggleArrow()}
        </div>
        <nav>
          <ul className="submenu">

          {this.mapOrganisations()}

          </ul>
        </nav>

      </li>

    )
  }
}
const mapStateToProps = ({ categories }) => ({  ...categories })

export default connect(mapStateToProps)(MenuItem)
