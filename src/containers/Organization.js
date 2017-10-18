import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import hideMenu from '../actions/menuHidden.js'
import './Organization.css'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/Breadcrumb'
export class Organization extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    about: PropTypes.string,
    features: PropTypes.array,
    website: PropTypes.string,
    phone: PropTypes.number,
    address: PropTypes.string,
    facebook: PropTypes.string,
  }



  renderFeatures(feature, index) {
    return <li key={index}>{ feature }</li>
  }

  componentWillMount(){
    this.props.hideMenu()
  }



  renderFB(facebook) {
    if (!facebook) return null

    return <p><FaFacebookSquare /> { facebook }</p>
  }

  render() {
    const { match, menuShow, name, logo, about, features, website, phone, address, facebook, } = this.props

    if (menuShow) {
      return null
    }
    console.log(this.props.match.params.categorieId)
    return(

      <div className="organization">
        <div className="routeToThisOrg">
          <BreadCrumb {...match}/>
        </div>
        <span className="organization-logo"><img src={ logo } alt='logo_of_organization' /></span>
        <div className="name"><h3>{ name }</h3></div>
        <div className="about"><p>{ about }</p></div>
        <div className="features">
          <p>They can help you with:</p>
          <ul>
          
            { features === undefined ? null :features.map(this.renderFeatures.bind(this)) }
          </ul>
        </div>
        <p>Contact</p>
        <p>Website: { website }</p>
        <p>Phone: { phone }</p>
        <p>Address: { address }</p>
        <div className="facebook">{ this.renderFB(facebook) }</div>
      </div>
    )
  }
}

const mapStateToProps = ({ organizations, menuShow }, { match }) => {

  const organization = organizations.reduce((prev, next) => {
    if (next._id === match.params.organizationId) {
      return next
    }
    return prev
  }, {})

  return {
    match,
    menuShow,
    organization,
    ...organization
  }

}

const mapDispatchToProps = ({hideMenu})

export default connect(mapStateToProps, mapDispatchToProps)(Organization)
// { features.map(this.renderFeatures.bind(this)) }
