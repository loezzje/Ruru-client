import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchFaq from '../actions/faq/fetch'
import fetchCategories from '../actions/categories/fetch'
import fetchOrganizations from '../actions/organizations/fetch'
import ListItemAdmin from '../components/ListItemAdmin'

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

export class AdminHome extends PureComponent {
  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchOrganizations()
    this.props.fetchFaq()
  }

  renderFaq(faq, index) {
    return <li><ListItemAdmin key={index} name={truncate(faq.question, 5)} /></li>
  }

  render() {
    return(
      <div className='adminpage'>
        <header>
          <h3>EDITS</h3>
          <p>admin!</p>
        </header>

        <main>
          <p>Orgs</p>
          <p>Cats</p>
          <div classname="faqlist">
            <p>CURRENT FAQ</p>
            <ul>
              { this.props.faq.map(this.renderFaq.bind(this)) }
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ faq, organizations, categories }) => ({ faq, organizations, categories })
const mapDispatchToProps = { fetchFaq, fetchOrganizations, fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome)
