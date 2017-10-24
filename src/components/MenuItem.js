import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './MenuItem.css'
import DownIcon from 'react-icons/lib/fa/angle-down'
import UpIcon from 'react-icons/lib/fa/angle-up'
import SubmenuItem from './SubmenuItem.js'
import { CSSTransitionGroup } from 'react-transition-group'

class MenuItem extends PureComponent {
  constructor(props) {
    super()

    this.state = {
      submenu: false
    }
  }

  toggleSubMenu() {
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

  toggleArrow() {
    const { submenu } = this.state

    return submenu ? <UpIcon className="down-arrow" /> : <DownIcon className="down-arrow" />
  }

  renderSubMenu(organization, index) {
    const { submenu } = this.state
    const { _id } = this.props
    console.log("category name", _id)
    if (submenu) {
      return <SubmenuItem key={index} { ...organization} content={_id}/>
    } else {
      return null
    }
  }

  mapOrganisations() {
    const { organizations} = this.props
    if(organizations.name === null){
      console.log("did")
      return null
    } else if (organizations.name) {
      console.log(organizations)
      return this.renderSubMenu(organizations)
    } else {
      return organizations.map(this.renderSubMenu.bind(this))
    }
    // return organizations.map(this.renderSubMenu.bind(this))

    // return organizations !== null ? organizations.map(this.renderSubMenu.bind(this)) : null
  }

  render() {
    const { name, organizations } = this.props

    if (organizations === null) return null

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
            <CSSTransitionGroup
              transitionName="example"
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {this.mapOrganisations()}
            </CSSTransitionGroup>
          </ul>
        </nav>
      </li>
    )
  }
}

const mapStateToProps = ({ categories }) => ({  ...categories })

export default connect(mapStateToProps)(MenuItem)

MenuItem.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}
