import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './MenuItem.css'
import DownIcon from 'react-icons/lib/fa/angle-down'


class MenuItem extends PureComponent {
  constructor(props) {
    super()

    const {  } = props

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

  renderSubMenu(){
    const { submenu } = this.state

    if (submenu) {
      return <div> submenu</div>
    } else {
      return null
    }
  }

  render() {
    const { name } = this.props
    return (
      <li className="menu-item">
        <div onClick={this.toggleSubMenu.bind(this)}>
          <h1>
            {name}
          </h1>
          <DownIcon className="down-arrow" />
        </div>
        <nav>
          <ul>
            {this.renderSubMenu()}
          </ul>
        </nav>

      </li>

    )
  }
}
const mapStateToProps = ({ categories, organizations }) => ({ organizations, ...categories })

export default connect(mapStateToProps)(MenuItem)
