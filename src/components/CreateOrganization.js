import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


import createOrganization from '../actions/organizations/create'

class OrganizationEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tagline: '',
      about: '',
      logo: '',
      features: '',
      website: '',
      phone: '',
      address: '',
      facebook: '',
      categories: '',
    }
  }

  updateName(event, value) {
    this.setState({
      name: event.target.value
    })
  }

  updateTagline = (event, value) => {
    this.setState({
    tagline: event.target.value,
    });
  };

  updateAbout = (event, value) => {
    this.setState({
    about: event.target.value,
    });
  };

  updateLogo = (event, value) => {
    this.setState({
    logo: event.target.value,
    });
  };

  updateFeatures = (event, value) => {
    this.setState({
    features: event.target.value
    });
  };

  updateWebsite = (event, value) => {
    this.setState({
    website: event.target.value,
    });
  };

  updatePhone = (event, value) => {
    this.setState({
    phone: event.target.value,
    });
  };

  updateAddress = (event, value) => {
    this.setState({
    address: event.target.value,
    });
  };

  updateFacebook = (event, value) => {
    this.setState({
    facebook: event.target.value,
    });
  };

  // need to update this to fit with api
  updateCategories = (event, value) => {
    this.setState({
    categories: event.target.value,
    });
  };

  validate() {
    const isNameValid = this.validateName()
    this.setState({
      errors: {
        title: isNameValid ? null : 'The name can not be blank!',
      }
    })
    return isNameValid
  }

  validateName() {
    const { name } = this.state
    return name && name.length > 0
  }

  saveOrganization(event) {
    event.preventDefault()
    if (!this.validate()) return
    const {
      name,
      tagline,
      about,
      logo,
      features,
      website,
      phone,
      address,
      facebook,
    } = this.state

    const newOrganization = {
      name,
      tagline,
      about,
      logo,
      features,
      website,
      phone,
      address,
      facebook,
    }

    this.props.save(newOrganization)

    this.setState({
      name: '',
      tagline: '',
      about: '',
      logo: '',
      features: [],
      website: '',
      phone: '',
      address: '',
      facebook: '',
      categories: [],
    })
  }


  render() {

    return (
      <div className="editor">
      <form>Name of the Organization:
      <br />
        <input type="text"
          value={this.state.name}
          onChange={this.updateName.bind(this)}
          className="name" />
        <br />
        (English) description:
        <br />
        <input type="text"
          value={this.state.tagline}
          onChange={this.updateTagline.bind(this)}
          className="tagline"
          placeholder="e.g. Immigration and naturalization office"/>
        <br />
        About the organization:
        <br />
        <input type="text"
          value={this.state.about}
          onChange={this.updateAbout.bind(this)}
          className="about" />
        <br />
        Features:
        <br />
        please seperate different features by a semicolon (e.g. ';')
        <br />
        <input type="text"
          value={this.state.features}
          onChange={this.updateFeatures.bind(this)}
          className="feature-1"
          placeholder="first feature"/>
        <br />
        Logo:
        <br />
        ***add help text for size and file type of logo.
        <br />
        <input type="text"
          value={this.state.logo}
          onChange={this.updateLogo.bind(this)}
          className="logo"
          placeholder="e.g. 'mylogo.jpg'"/>
        <br />
        Website:
        <br />
        <input type="text"
          value={this.state.website}
          onChange={this.updateWebsite.bind(this)}
          className="website"
          placeholder="e.g. www.thiswebsite.nl" />
        <br />
        Phone number:
        <br />
        <input type="text"
          value={this.state.phone}
          onChange={this.updatePhone.bind(this)}
          className="phone"
          placeholder="e.g. 0612345678"/>
        <br />
        Address:
        <br />
        <input type="text"
          value={this.state.address}
          onChange={this.updateAddress.bind(this)}
          className="address"
          placeholder="e.g. Street 1, 1234XX Amsterdam"/>
        <br />
        Facebook:
        <br />
        <input type="text"
          value={this.state.facebook}
          onChange={this.updateFacebook.bind(this)}
          className="facebook"
          placeholder="link to the facebook page"/>
        <br />
        Categories:
        <br />
        ** need to build
        <br />
        <input type="submit"
          value="Submit"
          onClick={this.saveOrganization.bind(this)} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createOrganization }

export default connect(null, mapDispatchToProps)(OrganizationEditor)
