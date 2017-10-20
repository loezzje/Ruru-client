import React, { PureComponent } from 'react'
import AdminSignIn from '../actions/users/sign-in'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class SignIn extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      fireRedirect: false
    }
  }

  updateEmail(event, value) {
    this.setState({
      email: event.target.value
    })
  }

  updatePassword(event, value) {
    this.setState({
      password: event.target.value
    })
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.AdminSignIn(user)
    this.setState({ fireRedirect: true })
    // this.props.push('/admin')
  }

  render() {
    const { fireRedirect } = this.state;

    if (fireRedirect) {
      return <Redirect to='/admin' />
    }

    return (
      <form>
        <h3>Admin sign-in</h3>

        <label for="email">Username</label><br />
        <input id="email" type="text" onChange={this.updateEmail.bind(this)} /><br />

        <label for="password">Password</label><br />
        <input id="password" type="password" onChange={this.updatePassword.bind(this)} /><br /><br />

        <div className="submitbutton">
          <input type="submit" value="Submit" onClick={this.submitForm.bind(this)} />
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = { AdminSignIn }

export default connect(null, mapDispatchToProps)(SignIn)
