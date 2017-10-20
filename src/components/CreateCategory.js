import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
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
      redirect: false
    }
  }

  setCategoryState() {
    const {category} = this.props
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

  updateIcon = (event, value) => {
    this.setState({
    icon: event.target.value,
    });
  };

  updateFrontPage = (event, value) => {
    this.setState({
    frontpage: event.target.value,
    });
  };

  updateTagline = (event, value) => {
    this.setState({
    tagline: event.target.value,
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

    if(!this.props.category._id)
    {this.props.createCategory(newCategory)
    this.setState({redirect: true})}

    else {

      this.props.updateCategory(this.props.category._id, newCategory)
      this.setState({redirect: true})
    }

  }

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/admin' />
    }


    if (!this.state.name) {
      this.setCategoryState()
    }

    return (
      <div className="editor-container">

        <div className="editor">
          <form>
            <p>Name of the Category:</p>

            <input type="text"
              value={this.state.name}
              onChange={this.updateName.bind(this)}
              className="name" />

            <p>Tagline:</p>

            <input type="text"
              value={this.state.tagline}
              onChange={this.updateTagline.bind(this)}
              className="tagline"
              placeholder="e.g. organizations where you can find more information about..."/>

            <p>Icon:</p>

            <p className="instruction">please choose an Icon of your liking on <span><a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer">this page</a></span>. Copy the name in the field below.</p>

            <input type="text"
              value={this.state.icon}
              onChange={this.updateIcon.bind(this)}
              className="icon" />

            <p>Frontpage:</p>

            <p>***add the radio button for this.</p>

            <div className="submitbutton">
              <input type="submit"
                value="Submit"
                onClick={this.saveCategory.bind(this)} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }, { match }) => {

  const category = categories.reduce((prev, next) => {
    if (next._id === match.params.categoryId) {
      return next
    }
    return prev
  }, {})

  return {
    category,
  }
}



const mapDispatchToProps = { createCategory, updateCategory }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditor)
