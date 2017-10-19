import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchRuru from '../actions/ruru/fetch'
import updateRuru from '../actions/ruru/update'
import './Forms.css'

class UpdateRuru extends PureComponent {
  componentWillMount() {
    this.props.fetchRuru()
  }

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
  }

  render() {
    return (
      <div className="editor">
        <form>
          <p>About Ruru:</p>
          <input
            type="text"
            ref="about"
            placeholder="about Ruru"
            className="about"
            defaultValue={this.state.about}
            onChange={this.updateAbout.bind(this)}
            onKeyDown={this.updateAbout.bind(this)} />

          <p>Phone number:</p>
          <input
            type="number"
            ref="phone"
            className="phone"
            placeholder="phone number"
            defaultValue={this.state.phone}
            onChange={this.updatePhone.bind(this)}
            onKeyDown={this.updatePhone.bind(this)} />

          <p>E-mail:</p>
          <input
            type="text"
            ref="email"
            className="email"
            placeholder="E-mailadres"
            defaultValue={this.state.email}
            onChange={this.updateEmail.bind(this)}
            onKeyDown={this.updateEmail.bind(this)} />

          <p>Address:</p>
          <input
            type="text"
            ref="address"
            className="address"
            placeholder="Address"
            defaultValue={this.state.address}
            onChange={this.updateAddress.bind(this)}
            onKeyDown={this.updateAddress.bind(this)} />

          <p>Instagram link:</p>
          <input
            type="text"
            ref="instagram"
            className="insta"
            placeholder="Instagram link"
            defaultValue={this.state.instagram}
            onChange={this.updateInstagram.bind(this)}
            onKeyDown={this.updateInstagram.bind(this)} />

          <p>Facebook link:</p>
          <input
            type="text"
            ref="facebook"
            className="facebook"
            placeholder="FB link"
            defaultValue={this.state.facebook}
            onChange={this.updateFB.bind(this)}
            onKeyDown={this.updateFB.bind(this)} />

          <p>Twitter link:</p>
          <input
            type="text"
            ref="twitter"
            className="twitter"
            placeholder="Twitter link"
            defaultValue={this.state.twitter}
            onChange={this.updateTwitter.bind(this)}
            onKeyDown={this.updateTwitter.bind(this)} />

          <div className="actions">
            <button className="submitbutton" onClick={this.saveRuru.bind(this)}>Update</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ ruru }) => ({ ruru })
const mapDispatchToProps = { fetchRuru, updateRuru }

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRuru)
