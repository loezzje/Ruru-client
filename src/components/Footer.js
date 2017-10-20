import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Eye from '../assets/logos/RURU_eye.png'
import FaInstagram from 'react-icons/lib/fa/instagram'

export class Footer extends PureComponent {
  render () {
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
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="instagram"/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
