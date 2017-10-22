import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Input, Label, Form, FormGroup, FormText } from 'reactstrap';
import createCategory from '../actions/categories/create'
import updateCategory from '../actions/categories/patch'
import './Forms.css'

class CategoryEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      icon: '',
      frontpage: false,
      tagline: '',
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

  setCategoryState() {
    const { category } = this.props

    this.state = {
      name: category.name,
      icon: category.icon,
      frontpage: category.frontpage,
      tagline: category.tagline,
      redirect: false
    }
  }

  updateName(event, value) {
    this.setState({
      name: event.target.value
    })
  }

  updateIcon(event, value) {
    this.setState({
    icon: event.target.value,
    });
  };

  // DUPLICATE
  updateFrontPage = (event, value) => {
    this.setState({
    frontpage: event.target.value,
    });
  };

  updateTagline(event, value) {
    this.setState({
    tagline: event.target.value,
    });
  };

  // DUPLICATE
  updateFrontPage = (event, value) => {
    this.setState({
      frontpage: event.target.value === "true" ? true : false
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

  saveCategory(event) {
    event.preventDefault()

    if (!this.validate()) return
    const {
      name,
      icon,
      frontpage,
      tagline,
    } = this.state

    const newCategory = {
      name,
      icon,
      frontpage,
      tagline,
    }

    if (!this.props.category._id) {
      this.props.createCategory(newCategory)
      this.setState({redirect: true})
    } else {
      this.props.updateCategory(this.props.category._id, newCategory)
      this.setState({redirect: true})
    }
  }

  render() {
    const { redirect, fireRedirect } = this.state;

    if (redirect) return <Redirect to='/admin' />
    if (fireRedirect) return <Redirect to='/admin/signin' />

    if (!this.state.name) this.setCategoryState()

    return (
      <div className="editor-container">
        <div className="editor">
          <Form>
            <FormGroup>
              <Label for="name">Category name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.updateName.bind(this)}
                placeholder="Please enter the category name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="tagline">Tagline</Label>
              <Input
                type="text"
                name="tagline"
                id="tagline"
                value={this.state.tagline}
                onChange={this.updateTagline.bind(this)}
                placeholder="e.g. organizations where you can find more information about..."
              />
            </FormGroup>

            <FormGroup>
              <Label for="icon">Icon</Label>
              <Input
                type="text"
                name="icon"
                id="icon"
                value={this.state.icon}
                onChange={this.updateIcon.bind(this)}
              />
              <FormText color="black">
                Please choose an icon of your liking on <span><a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer">this page</a></span>. Copy the name in the field below.
              </FormText>
            </FormGroup>

            <div className="edit-cats">
              <FormGroup tag="fieldset">
                <legend>Show on Front page?</legend>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="frontpage"
                      value="false"
                      checked={this.state.frontpage === false}
                      onChange={this.updateFrontPage.bind(this)}
                    />
                    False
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="frontpage"
                      value="true"
                      checked={this.state.frontpage === true}
                      onChange={this.updateFrontPage.bind(this)}
                    />
                    True
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>

            <div className="submitbutton">
              <FormGroup check>
                <Label check>
                <Input
                  type="submit"
                  value="Submit"
                  onClick={this.saveCategory.bind(this)}
                />
                </Label>
              </FormGroup>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, currentUser }, { match }) => {

  const category = categories.reduce((prev, next) => {
    if (next._id === match.params.categoryId) {
      return next
    }
    return prev
  }, {})

  return {
    category,
    currentUser
  }
}

const mapDispatchToProps = { createCategory, updateCategory }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditor)
