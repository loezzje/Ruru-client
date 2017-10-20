import React, { PureComponent } from 'react'
import Mailto from 'react-mailto'
// import ContactForm from '../containers/ContactForm'
import { connect } from 'react-redux'
import './Contact.css'

export class Contact extends PureComponent {
  render() {
    const { email } = this.props

    return(
      <div className='contactpage main-container'>
        <header>
          <h3>Contact</h3>
        </header>

        <main>
          <p>Keen to help us grow? Send us an <Mailto email={ email } obfuscate={true}>e-mail</Mailto>.</p>
        </main>
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

export default connect(mapStateToProps, null)(Contact)
