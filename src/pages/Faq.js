import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchFaq from '../actions/faq/fetch'
import FaqItem from '../containers/FaqItem'
import './Faq.css'

export class Faq extends PureComponent {
  componentWillMount() {
    this.props.fetchFaq()
  }

  renderFaq(question) {
    return <FaqItem key={question._id} { ...question } />
  }

  render() {
    return(
      <div className='faqpage'>
        <header>
          <h3>FAQ</h3>
          <p>Here answer some frequently asked questions about our organization and about refugees in general.</p>
        </header>

        <main>
          { this.props.faq.map(this.renderFaq.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ faq }) => ({ faq })
const mapDispatchToProps = { fetchFaq }

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
