import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchFaq from '../actions/faq/fetch'
import fetchCategories from '../actions/categories/fetch'
import fetchOrganizations from '../actions/organizations/fetch'

export class AdminHome extends PureComponent {
  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchOrganizations()
    this.props.fetchFaq()
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
          <p>Faq</p>
        </main>
      </div>
    )
  }
}

//{ this.props.faq.map(this.renderFaq.bind(this)) }

const mapStateToProps = ({ faq, organizations, categories }) => ({ faq, organizations, categories })
const mapDispatchToProps = { fetchFaq, fetchOrganizations, fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome)
