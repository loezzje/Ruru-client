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

  componentWillMount() {
    const { currentUser } = this.props

    if (!!currentUser && !!currentUser._id) {
      this.setState({
        fireRedirect: true
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentUser !== nextProps.currentUser)

    this.setState({
      fireRedirect: true
    })
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
    console.log("Signing in...")
    this.setState({ fireRedirect: true })
    // this.props.push('/admin')
  }

  render() {
    const { fireRedirect } = this.state;

    if (fireRedirect) {
      return <Redirect to='/admin' />
    }

    return (
      <div className="editor-container">
        <div className="editor">
          <form>
            <h3>Admin sign-in</h3>

            <label for="email"><p>Username</p></label>
            <input id="email" type="text" onChange={this.updateEmail.bind(this)} />

            <label for="password"><p>Password</p></label>
            <input id="password" type="password" onChange={this.updatePassword.bind(this)} />

            <div className="submitbutton">
              <input type="submit" value="Submit" onClick={this.submitForm.bind(this)} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

const mapDispatchToProps = { AdminSignIn }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
