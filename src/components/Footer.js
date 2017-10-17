import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Footer extends PureComponent {
  render () {
    return (
      <div className='footer'>
        <div className='footerPageLinks'>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to='/faq'>FAQs</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
          </ul>
        </div>
        <div className='footerSocialLinks'>
          <div className="instagram">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
