import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createCategory from '../actions/categories/create'
import getCategory from '../actions/categories/get'
import patchCategory from '../actions/categories/patch'

class CategoryEditor extends PureComponent {
  constructor(props) {
    super(props);

    const { name } = props

    this.state = {
      name: '',
      icon: '',
      frontpage: false,
      tagline: '',
      mode: '',
    }
  }

  componentDidMount() {
    console.log('Component will mount:')
    console.log("Detected categoryId from URI: ", this.props.match.params.categoryId)

    const { getCategory } = this.props

    if (this.props.match.params.categoryId !== undefined) {
      getCategory(this.props.match.params.categoryId)
      // getCategory()
      this.setState({
        mode: 'edit',
      })
    } else {
      this.setState({
        mode: 'create'
      })
    }
  }

  showName() {
    const { name } = this.props.category
    console.log("Name is ", name)
    if (name === null) {
      return ""
    } else {
      return name
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
    frontpage: event.target.checked,
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
      tagline,
      frontpage,
    }

    this.props.save(newCategory)
    console.log('Clicked Submit for Category form')

    this.setState({
      name: '',
      icon: '',
      frontpage: false,
      tagline: '',
  })
}

  render() {
    console.log("Category form is in", this.state.mode, "mode!")
    console.log("Category ==========> ", this.props.category)
    console.log("What is: ", typeof this.props.category)
    return (
      <div className="editor">
      <form>
        <label for="name">Category name</label>
        <br />
          <input
            id="name"
            type="text"
            // value={this.state.mode === 'edit' ? this.showName() : this.state.name}
            value={this.state.name}
            onChange={this.updateName.bind(this)}
          />
        {/* ===================================== */}
        <br />
          <label for="tagline">Tagline</label>
        <br />
          <input
            type="text"
            value={this.state.tagline}
            onChange={this.updateTagline.bind(this)}
            id="tagline"
            placeholder="e.g. organizations where you can find more information about..."
          />
        {/* ===================================== */}
        <br />
          <label for="icon">Icon</label>
        <br />
          Please choose an Icon of your liking on <a href="https://material.io/icons/" target="_blank">this page</a>. Copy the name in the field below.
        <br />
          <input
            type="text"
            value={this.state.icon}
            onChange={this.updateIcon.bind(this)}
            id="icon"
          />
        {/* ===================================== */}
        <br />
          <label for="frontpage">Frontpage</label>
          <input
            id="frontpage"
            type="checkbox"
            value={this.state.frontpage}
            onChange={this.updateFrontPage.bind(this)} />
        <br />
        {/* ===================================== */}
        <br />
          <input type="submit"
            value="Submit"
            onClick={this.saveCategory.bind(this)} />
          </form>
        </div>
    )
  }
}

const mapStateToProps = ({ category, categories }) => ({
  category,
  categories
})

const mapDispatchToProps = { save: createCategory, getCategory }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditor)
