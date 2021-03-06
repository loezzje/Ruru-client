import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchRuru from '../actions/ruru/fetch'
import './Footer.css'
import Eye from '../assets/logos/RURU_eye.png'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'

export class Footer extends PureComponent {
  componentWillMount() {
    this.props.fetchRuru()
  }

  render () {
    const { instagram, facebook, twitter } = this.props

    return (
      <div className='footer'>
        <div className="footer-container">
          <img className='eye' src={ Eye } alt="ruru-icon" />
          <nav className='footerPageLinks'>
            <ul>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='/faq'>FAQs</Link></li>
              <li><Link to='/events'>Events</Link></li>
              <li><Link to='/contact'>Contact us</Link></li>
            </ul>
          </nav>
          <div className='footerSocialLinks'>
              <a href={ instagram } target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon"/></a>
              <a href={ facebook } target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon"/></a>
              <a href={ twitter } target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon"/></a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ ruru }, { params }) => {
  const thisruru = ruru[0]
  return {
    ...thisruru
  }
}
const mapDispatchToProps = { fetchRuru }

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
