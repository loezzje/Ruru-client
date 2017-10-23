import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import fetchRuru from '../actions/ruru/fetch'
import updateRuru from '../actions/ruru/update'
import './Forms.css'

class UpdateRuru extends PureComponent {
  constructor(props) {
    super()

    const { about, phone, email, address, instagram, facebook, twitter } = props

    this.state = {
      about,
      phone,
      email,
      address,
      instagram,
      facebook,
      twitter,
      fireRedirect: false,
      redirect: false,
    }
  }

  componentWillMount() {
    this.props.fetchRuru()

    const { currentUser } = this.props

    if (currentUser === null) {
      this.setState({
        fireRedirect: true
      })
    }
  }

  setRuru() {
    const { thisruru } = this.props
    if (thisruru === undefined) {
      return null
    }

    this.state = {
      about: thisruru.about,
      phone: thisruru.phone,
      email: thisruru.email,
      address: thisruru.address,
      instagram: thisruru.instagram,
      facebook: thisruru.facebook,
      twitter: thisruru.twitter,
    }
  }

  updateAbout(event) {
    this.setState({
      about: this.refs.about.value
    })
  }

  updatePhone(event) {
    this.setState({
      phone: this.refs.phone.value
    })
  }

  updateEmail(event) {
    this.setState({
      email: this.refs.email.value
    })
  }

  updateAddress(event) {
    this.setState({
      address: this.refs.address.value
    })
  }

  updateInstagram(event) {
    this.setState({
      instagram: this.refs.instagram.value
    })
  }

  updateFB(event) {
    this.setState({
      facebook: this.refs.facebook.value
    })
  }

  updateTwitter(event) {
    this.setState({
      twitter: this.refs.twitter.value
    })
  }

  saveRuru() {
    const {
      about,
      phone,
      email,
      address,
      instagram,
      facebook,
      twitter,
    } = this.state

    const NewRuru = {
      about,
      phone,
      email,
      address,
      instagram,
      facebook,
      twitter,
    }

    const ruruId = this.props.ruru[0]._id
    this.props.updateRuru(ruruId, NewRuru)
    this.setState({redirect: true})

  }

  render() {
    if (!this.state.about) {
      this.setRuru()
    }

    const { fireRedirect, redirect } = this.state;
    if (fireRedirect) { return <Redirect to='/admin/signin' /> }
    if (redirect) { return <Redirect to='/admin' /> }

    return (
      <div>
      <div className="editor">
          <p>About Ruru:</p>
          <textarea
            type="text"
            ref="about"
            className="about"
            value={this.state.about}
            onChange={this.updateAbout.bind(this)}
            onKeyDown={this.updateAbout.bind(this)} />

          <p>Phone number:</p>
          <input
            type="number"
            ref="phone"
            className="phone"
            value={this.state.phone}
            onChange={this.updatePhone.bind(this)}
            onKeyDown={this.updatePhone.bind(this)} />

          <p>E-mail:</p>
          <input
            type="text"
            ref="email"
            className="email"
            value={this.state.email}
            onChange={this.updateEmail.bind(this)}
            onKeyDown={this.updateEmail.bind(this)} />

          <p>Address:</p>
          <input
            type="text"
            ref="address"
            className="address"
            value={this.state.address}
            onChange={this.updateAddress.bind(this)}
            onKeyDown={this.updateAddress.bind(this)} />

          <p>Instagram link:</p>
          <input
            type="text"
            ref="instagram"
            className="insta"
            value={this.state.instagram}
            onChange={this.updateInstagram.bind(this)}
            onKeyDown={this.updateInstagram.bind(this)} />

          <p>Facebook link:</p>
          <input
            type="text"
            ref="facebook"
            className="facebook"
            value={this.state.facebook}
            onChange={this.updateFB.bind(this)}
            onKeyDown={this.updateFB.bind(this)} />

          <p>Twitter link:</p>
          <input
            type="text"
            ref="twitter"
            className="twitter"
            value={this.state.twitter}
            onChange={this.updateTwitter.bind(this)}
            onKeyDown={this.updateTwitter.bind(this)} /><br /><br />

          <div className="submitbutton">
            <input type="submit"
              value="Update"
              onClick={this.saveRuru.bind(this)} />
          </div>
      </div>
      <div className="back"><Link to='/admin'>Back to overview</Link></div>
      </div>
    )
  }
}

const mapStateToProps = ({ ruru, currentUser }, { params }) => {
  console.log("yoooooo", ruru)
  const thisruru = ruru[0]
  return {
    thisruru,
    ruru,
    currentUser
  }
}

const mapDispatchToProps = { fetchRuru, updateRuru }

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRuru)
