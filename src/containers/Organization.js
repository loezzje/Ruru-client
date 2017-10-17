import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'

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

  renderRecipe(feature, index) {
    return <li key={index}>{ feature }</li>
  }

  renderFB(facebook) {
    if (!facebook) return null

    return <p><FaFacebookSquare /> { facebook }</p>
  }

  render() {
    const { name, logo, about, features, website, phone, address, facebook } = this.props

    if (!name) return null

    return(
      <div className="organization">
        <div className="routeToThisOrg">
         <p>Where the intelligent routing goes</p>
        </div>
        <span className="logo"><img src={ logo } alt='logo_of_organization' /></span>
        <div className="name"><h3>{ name }</h3></div>
        <div className="about"><p>{ about }</p></div>
        <div className="features">
          <p>They can help you with:</p>
          <ul>
            { features.map(this.renderFeatures.bind(this)) }
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

const mapStateToProps = ({ organization }) => ({ organization })

export default connect(mapStateToProps, null)(Organization)
