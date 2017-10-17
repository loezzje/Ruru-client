import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import FaInstagram from 'react-icons/lib/fa/instagram'

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
          <span className="instagram">
            <FaInstagram className="instagram"/>
          </span>
        </div>
      </div>
    )
  }
}

export default Footer
