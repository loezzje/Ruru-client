import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createCategory from '../actions/categories/create'

class CategoryEditor extends PureComponent {
  constructor(props) {
    super(props);

    const { name } = props

    this.state = {
      name: '',
      icon: '',
      frontpage: false,
      tagline: '',
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

    this.props.save(newCategory)

    this.setState({
      name: '',
      icon: '',
      frontpage: false,
      tagline: '',
  })
}


  render() {

    return (
      <div className="editor">
      <form>Name of the Category:
      <br />
        <input type="text"
          value={this.state.name}
          onChange={this.updateName.bind(this)}
          className="name" />
        <br />
        Tagline:
        <br />
        <input type="text"
          value={this.state.tagline}
          onChange={this.updateTagline.bind(this)}
          className="tagline"
          placeholder="e.g. organizations where you can find more information about..."/>
        <br />
        Icon:
        <br />
        please choose an Icon of your liking on <a href="https://material.io/icons/" target="_blank">this page</a>. Copy the name in the field below.
        <br />
        <input type="text"
          value={this.state.icon}
          onChange={this.updateIcon.bind(this)}
          className="icon" />
        <br />
        Frontpage:
        <br />
        ***add the radio button for this.
        <br />

        <br />

        <input type="submit"
          value="Submit"
          onClick={this.saveCategory.bind(this)} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createCategory }

export default connect(null, mapDispatchToProps)(CategoryEditor)
