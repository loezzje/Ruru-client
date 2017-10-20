import React, { PureComponent } from 'react'

export class ContactForm extends PureComponent {
  constructor(props) {
    super()

    const { email, name, message } = props

    this.state = {
      email,
      name,
      message,
    }
  }

  updateEmail(event) {
    this.setState({
      email: this.refs.email.value
    })
  }

  updateName(event) {
    this.setState({
      name: this.refs.name.value
    })
  }

  updateMessage(event) {
    this.setState({
      message: this.refs.message.value
    })
  }

  saveMail() {
    const {
      email,
      name,
      message,
    } = this.state

    const NewMail = {
      email,
      name,
      message,
    }

    this.props.sendMail(NewMail)

    this.state = {
      email: '',
      name: '',
      message: '',
    }
  }

  render() {
    return (
      <div className="editor">

          <p>From (e-mail):</p>
          <input
            type="text"
            ref="email"
            className="email"
            placeholder="example@example.com"
            value={this.state.email}
            onChange={this.updateEmail.bind(this)}
            onKeyDown={this.updateEmail.bind(this)} />

          <p>Name:</p>
          <input
            type="text"
            ref="name"
            className="name"
            placeholder="Name Last-Name"
            value={this.state.name}
            onChange={this.updateName.bind(this)}
            onKeyDown={this.updateName.bind(this)} />

          <p>Message:</p>
          <input
            type="text"
            ref="message"
            className="message"
            placeholder="Do tell"
            value={this.state.message}
            onChange={this.updateMessage.bind(this)}
            onKeyDown={this.updateMessage.bind(this)} />

          <div className="actions">
            <button className="submitbutton" onClick={this.saveMail.bind(this)}>Send</button>
          </div>
      </div>
    )
  }
}

export default ContactForm
