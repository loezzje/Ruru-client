import React, { PureComponent } from 'react'
import Mailto from 'react-mailto'
import './Contact.css'

export class Contact extends PureComponent {

  render() {
    return(
      <div className='contactpage'>
        <header>
          <h3>Contact</h3>
        </header>

        <main>
          <p>Keen to help us grow? Send us an <Mailto email="e.a.peene@gmail.com" obfuscate={true}>
          e-mail</Mailto>.</p>
        </main>
      </div>
    )
  }
}

export default Contact
