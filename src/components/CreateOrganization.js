import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import fetchOrganizations from '../actions/organizations/fetch'
import fetchCategories from '../actions/categories/fetch'
import './Forms.css'
import createOrganization from '../actions/organizations/create'
import updateOrganization from '../actions/organizations/patch'

class OrganizationEditor extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
    name: "",
    tagline: "",
    about: "",
    logo: "",
    features: "",
    website: "",
    phone: "",
    address: "",
    facebook: "",
    frontpage: "",
    categories: "",
    redirect: false,
    fireRedirect: false
    }
  }

  componentWillMount() {

    const { currentUser } = this.props
    if (currentUser === null) {
      this.setState({
        fireRedirect: true
      })
    }
  }

  setOrgsState() {
    const { organization } = this.props

      this.state = {
      name: organization.name,
      tagline: organization.tagline,
      about: organization.about,
      logo: organization.logo,
      features: organization.features ? organization.features.join('; ') : '',
      website: organization.website,
      phone: organization.phone,
      address: organization.address,
      facebook: organization.facebook,
      frontpage: organization.frontpage,
      categoryIds: organization.categoryIds,
      redirect: false
    }
    console.log('This.props.categories: ' + this.props.categories.map(cat => cat.name + cat._id))
    console.log('This.state.categories, ids of the categories the org belongs to: ' + this.state.categories)
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

  updateFrontPage = (event, value) => {
    this.setState({
      frontpage: event.target.value === "true" ? true : false
    });
  };

  handleCheck = (event, value) => {
    if (!this.state.categoryIds) {
      this.setState({ categoryIds: [event.target.value]})

    }
    else {
      var orgCategories = this.state.categoryIds

      orgCategories.includes(event.target.value) ?
        orgCategories.splice(orgCategories.indexOf(event.target.value), 1) :
        orgCategories.push(event.target.value)

       this.setState({
        categoryIds: orgCategories
      })

    }
  }

  // containsOrganization = (category) => {
  //   return (this.state.categoryIds.includes(category._id))
  // }

//   containsOrganization = (category) => {
//
//   return this.state.categoryIds.includes(category._id)
// }


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
      frontpage,
      categoryIds
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
      frontpage,
      categoryIds
    }

    if (!this.props.organization._id)
      {this.props.createOrganization(newOrganization)

      this.setState({redirect: true})}
    else

      {this.props.updateOrganization(this.props.organization._id, newOrganization)
      this.setState({redirect: true})}

  }

  inFrontPage(){
    return this.state.frontpage || false
  }

  render() {
    const { categories } = this.props
    const { redirect, fireRedirect } = this.state;

    if (redirect) { return <Redirect to='/admin' /> }
    if (fireRedirect) { return <Redirect to='/admin/signin' /> }

    if (!this.state.name) {
      this.setOrgsState()
    }

    return (
      <div className="editor-container">
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

          <div className="instruction"><p>please seperate different features by a semicolon (e.g. ';')</p></div>

          <input type="text"
            value={this.state.features}
            onChange={this.updateFeatures.bind(this)}
            className="feature-1"
            placeholder="first feature"/>

          <p>Logo:</p>
          <div className="instruction"><p>***add help text for size and file type of logo.</p></div>

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

          <div className="edit-cats">
            <p>Categories:</p>
            {categories.map((category) => (
              <div key={category._id}><input type="checkbox"
              value={category._id}
              onClick={this.handleCheck.bind(this)}
              defaultChecked={
                this.state.categoryIds ?
                this.state.categoryIds.includes(category._id) :
                false
              }/>
              <label>{category.name}</label></div>
            ))}
          </div>
          <div className="edit-cats">
            <p>Show on Front page?</p>
            <input type="radio"
            name="frontpage"
            value="false"
            checked={(!this.inFrontPage())}
            onChange={this.updateFrontPage.bind(this)}/><label>No</label>
            <input type="radio"
            name="frontpage"
            value="true"
            checked={this.inFrontPage()}
            onChange={this.updateFrontPage.bind(this)} /><label>Yes</label>
          </div>
          <div className="submitbutton">
            <input type="submit"
              value="Submit"
              onClick={this.saveOrganization.bind(this)} />
          </div>
          </form>
        </div>
        <div className="back"><Link to='/admin'>Back to overview</Link></div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, organizations, currentUser }, { match }) => {

  const organization = organizations.reduce((prev, next) => {
    if (next._id === match.params.organizationId) {
      return next
    }
    return prev
  }, {})

  return {
    categories,
    organization,
    currentUser
  }
}

const mapDispatchToProps = { createOrganization, fetchOrganizations, updateOrganization, fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationEditor)
