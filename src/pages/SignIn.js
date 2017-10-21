import React, { PureComponent } from 'react'
import { Form, Label, Input } from 'reactstrap'
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
    this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect } = this.state;

    if (fireRedirect) return <Redirect to='/admin' />

    return (
      <div className="editor-container">
        <div className="editor">
          <Form>
            <h3>Admin sign-in</h3>

            <Label for="email"><p>Email</p></Label>
            <Input id="email" type="text" onChange={this.updateEmail.bind(this)} />

            <Label for="password"><p>Password</p></Label>
            <Input id="password" type="password" onChange={this.updatePassword.bind(this)} />

            <div className="submitbutton">
              <Input type="submit" value="Submit" onClick={this.submitForm.bind(this)} />
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
const mapDispatchToProps = { AdminSignIn }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
