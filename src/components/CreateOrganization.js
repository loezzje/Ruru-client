import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import fetchCategories from '../actions'
import './Forms.css'

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
      frontpage: false,
      categories: []
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
  // updateCategories = (event, value) => {
  //   this.setState({
  //   categories: event.target.value,
  //   });
  // };

  handleCheck = (event, value) => {
    var addCategories = this.state.categories
     if (addCategories.includes(event.target.value)) {
       var index = addCategories.indexOf(event.target.value)
       addCategories.splice(index, 1)
     } else {
    addCategories.push(event.target.value)
    this.setState({
      categories: addCategories
    })
  }}

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
      categories
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
      categories
    }

    this.props.save(newOrganization)
    console.log(newOrganization)

    // if form is used as editor too, the below should only be in the create new org form page, not on the edit page

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

    })
  }





  render() {
    const { categories } = this.props


    return (
      <div className="editor">
        <form>
          <p>Name of the Organization:</p>

          <input type="text"
            value={this.state.name}
            onChange={this.updateName.bind(this)}
            className="name" />

          <p>(English) description:</p>

          <input type="text"
            value={this.state.tagline}
            onChange={this.updateTagline.bind(this)}
            className="tagline"
            placeholder="e.g. Immigration and naturalization office"/>

          <p>About the organization:</p>

          <input type="text"
            value={this.state.about}
            onChange={this.updateAbout.bind(this)}
            className="about" />

          <p>Features:</p>

          <p><div className='instruction'>please seperate different features by a semicolon (e.g. ';')</div></p>

          <input type="text"
            value={this.state.features}
            onChange={this.updateFeatures.bind(this)}
            className="feature-1"
            placeholder="first feature"/>

          <p>Logo:</p>

          <p><div className='instruction'>add help text for size and file type of logo.</div></p>

          <input type="text"
            value={this.state.logo}
            onChange={this.updateLogo.bind(this)}
            className="logo"
            placeholder="e.g. 'mylogo.jpg'"/>

          <p>Website:</p>

          <input type="text"
            value={this.state.website}
            onChange={this.updateWebsite.bind(this)}
            className="website"
            placeholder="e.g. www.thiswebsite.nl" />

          <p>Phone number:</p>

          <input type="text"
            value={this.state.phone}
            onChange={this.updatePhone.bind(this)}
            className="phone"
            placeholder="e.g. 0612345678"/>

          <p>Address:</p>

          <input type="text"
            value={this.state.address}
            onChange={this.updateAddress.bind(this)}
            className="address"
            placeholder="e.g. Street 1, 1234XX Amsterdam"/>

          <p>Facebook:</p>

          <input type="text"
            value={this.state.facebook}
            onChange={this.updateFacebook.bind(this)}
            className="facebook"
            placeholder="link to the facebook page"/>

          <p>Categories:</p>

          <div className="categorylist">
          {categories.map((category) => (
            <p><input className="check" type="checkbox"
            value={category._id}
            onClick={this.handleCheck} />
            <label>{category.name}</label></p>
          ))}
          </div>

          <div className="submitbutton">
            <input type="submit"
              value="Submit"
              onClick={this.saveOrganization.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({categories}) => ({categories})
const mapDispatchToProps = { save: createOrganization }

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationEditor)
