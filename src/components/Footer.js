import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import FaInstagram from 'react-icons/lib/fa/instagram'

export class Footer extends PureComponent {
  render () {
    return (
      <div className='footer'>
        <nav className='footerPageLinks'>
          <ul>
            <li><Link to='/about'></Link></li>
            <li><Link to='/faq'>FAQs</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
          </ul>
        </nav>
        <div className='footerSocialLinks'>
            <FaInstagram className="instagram"/>
        </div>
      </div>
    )
  }
}

export default Footer
