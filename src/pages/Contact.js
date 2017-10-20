import React, { PureComponent } from 'react'
// import Mailto from 'react-mailto'
import ContactForm from '../containers/ContactForm'
import './Contact.css'

export class Contact extends PureComponent {

  render() {
    return(
      <div className='contactpage main-container'>
        <header>
          <h3>Contact</h3>
        </header>

        <main>
          <p>Keen to help us grow? Send us an e-mail:</p>
          <ContactForm />
        </main>
      </div>
    )
  }
}

export default Contact
