import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchFaq from '../actions/faq/fetch'
import fetchCategories from '../actions/categories/fetch'
import fetchOrganizations from '../actions/organizations/fetch'
import ListItemAdmin from '../components/ListItemAdmin'
import './AdminHome.css'

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

export class AdminHome extends PureComponent {
  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchOrganizations()
    this.props.fetchFaq()
  }

  renderOrgs(org, index) {
    return <ListItemAdmin key={index} name={ org.name } />
  }

  renderCats(cat, index) {
    return <ListItemAdmin key={index} name={ cat.name } />
  }

  renderFaq(faq, index) {
    return <ListItemAdmin key={index} name={truncate(faq.question, 5)} />
  }

  render() {
    return(
      <div className='adminpage'>
        <header>
          <h2>ADMIN HOME</h2>
          <p>Introduction to admin.</p>
          <hr />
        </header>

        <main>
          <div classname="catlist">
            <p>CURRENT CATEGORIES</p>
            <ul>
              { this.props.categories.map(this.renderCats.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-category'}}>Add</Link></div>
          </div>
          <div classname="orglist">
            <p>CURRENT ORGANIZATIONS</p>
            <ul>
              { this.props.organizations.map(this.renderOrgs.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-organization'}}>Add</Link></div>
          </div>
          <div classname="faqlist">
            <p>CURRENT FAQ</p>
            <ul>
              { this.props.faq.map(this.renderFaq.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-faq'}}>Add</Link></div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ faq, organizations, categories }) => ({ faq, organizations, categories })
const mapDispatchToProps = { fetchFaq, fetchOrganizations, fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome)
