import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import createFaq from '../actions/faq/create'
import updateFaq from '../actions/faq/update'
import fetchFaqs from '../actions/faq/fetch'
import fetchCategories from '../actions/categories/fetch'
import './Forms.css'

class FaqEditor extends PureComponent {

  componentWillMount(){
    this.props.fetchFaqs()
  }

  constructor(props) {
    super();
    const { question, answer, categories } = props

    this.state = {
      question,
      answer,
      categories,
    }
  }

  setFaqState() {
    const {thisFaq, faqs, categories} = this.props
    if (faqs === undefined ) {
      return null
    }
    this.state = {
      question: thisFaq.question,
      answer: thisFaq.answer,
      categories: categories.filter(this.containsCategory).map(cat => cat._id),
    }
  }

  containsCategory = (thisFaq) => {
    const { category } = this.props
    return thisFaq.categories.includes(category._id)
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
    const { categories } = this.props
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/admin' />
    }


    if (!this.state.question) {
      this.setFaqState()
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
            <p>Categories:</p>
            {categories.map((category) => (
              <div key={category._id}><input type="checkbox"
              value={category._id}
              onClick={this.handleCheck.bind(this)}/>
              <label>{category.name}</label>
              console.log("yeah baby", category.name)
              </div>
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
        <div className="back"><Link to='/admin'>Back to overview</Link></div>
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
    categories
  }
}

const mapDispatchToProps = { createFaq, updateFaq, fetchFaqs, fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(FaqEditor)
