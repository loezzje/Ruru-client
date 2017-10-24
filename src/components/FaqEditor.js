import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import createFaq from '../actions/faq/create'
import updateFaq from '../actions/faq/update'
import fetchFaqs from '../actions/faq/fetch'
import fetchCategories from '../actions/categories/fetch'
import './Forms.css'

class FaqEditor extends PureComponent {
  constructor(props) {
    super()
    const { question, answer, categories } = props

    this.state = {
      question,
      answer,
      categories,
    }
  }

  componentWillMount(){
    this.props.fetchFaqs()
  }

  setFaqState() {
    const { thisFaq, categories } = this.props
    if (categories === undefined) {
      return null
    }
    this.state = {
      question: thisFaq.question,
      answer: thisFaq.answer,
      categories: thisFaq.categoriesId,
    }
  }


  updateQuestion(event, value) {
    this.setState({
      question: event.target.value
    })
  }

  updateAnswer = (event, value) => {
    this.setState({
    answer: event.target.value,
    });
  };

  handleCheck = (event, value) => {

    if (!this.state.categories) {
      this.setState({categories: [event.target.value]})
    }
    var addCategories = this.state.categories
    if (addCategories.includes(event.target.value)) {
      var index = addCategories.indexOf(event.target.value)
      addCategories.splice(index, 1)
    } else {
      addCategories.push(event.target.value)
      this.setState({
        categories: addCategories
      })
    }
  }



  validate() {
    const isQuestionValid = this.validateQuestion()
    this.setState({
      errors: {
        title: isQuestionValid ? null : 'The question can not be blank!',
      }
    })
    return isQuestionValid
  }

  validateQuestion() {
    const { question } = this.state
    return question && question.length > 0
  }

  containsCategory(category) {
    return this.state.categories.includes(category._id)
  }

  saveFaq(event) {
    event.preventDefault()
    if (!this.validate()) return

    const {
    question,
    answer,
    categories,
    } = this.state

    const newFaq = {
      question,
      answer,
      categories
    }

    if(!this.props.category._id)
    {this.props.createFaq(newFaq)
    this.setState({redirect: true})}

    else {

      this.props.updateFaq(this.props.thisFaq._id, newFaq)
      this.setState({redirect: true})
    }
  }

  render() {

    if (!this.state.question) {
      this.setFaqState()
    }

    const { categories } = this.props
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/admin' />
    }
    return (
      <div className="editor-container">

        <div className="editor">
          <form>
            <p>Question:</p>

            <input type="text"
              value={this.state.question}
              onChange={this.updateQuestion.bind(this)}
              className="question" />
            <p>Answer:</p>

            <input type="text"
              value={this.state.answer}
              onChange={this.updateAnswer.bind(this)}
              className="answer" />

            <div className="edit-cats">
            Categories:
            <br />
              {categories.map((category) => (
                <div key={category._id}><input type="checkbox"
                value={category._id}
                onClick={this.handleCheck.bind(this)}
                defaultChecked={
                  this.state.categories ?
                  this.state.categories.includes(category._id) :
                  false }/>
                <label>{category.name}</label></div>
              ))}
              <br />
            ))}
            <br />
          </div>
            <div className="submitbutton">
              <input type="submit"
                value="Submit"
                onClick={this.saveFaq.bind(this)} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ faq, categories }, { match }) => {
  const thisFaq = faq.reduce((prev, next) => {
    if (next._id === match.params.faqId) {
      return next
    }
    return prev
  }, {})

  return {
    faq,
    thisFaq,
    categories,
  }
}

const mapDispatchToProps = { createFaq, updateFaq, fetchFaqs, fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(FaqEditor)
