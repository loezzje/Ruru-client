import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import hideMenu from '../actions/menuHidden.js'
import './Organization.css'
import Maps from '../components/Maps'


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

    return(

      <div className="organization ">
        <div className="routeToThisOrg">
          <BreadCrumb {...match} />
        </div>
        <div className="organization-info main-container">
          <div className="organization-info">
            <div className="organization-logo"><img src={ logo } alt='logo_of_organization' /></div>
            <div className="name"><h2>{ name }</h2></div>
            <div className="about"><p>{ about }</p></div>
            <div className="features">
              <h3>They can help you with:</h3>
              <ul>

                { features === undefined ? null :features.map(this.renderFeatures.bind(this)) }
              </ul>
            </div>
          </div>

          <div className="contact-org">
            <h3>Contact</h3>
            <ul>

              <li>Website: { website }</li>
              <li>Phone: { phone }</li>
              <li>Address: { address }</li>
            </ul>
          </div>

          <div className="facebook">{ this.renderFB(facebook) }</div>
        </div>
        <Maps address={ address }/>
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
