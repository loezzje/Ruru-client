import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchFaq from '../actions/faq/fetch'
import fetchCategories from '../actions/categories/fetch'
import fetchOrganizations from '../actions/organizations/fetch'
import signOut from '../actions/users/sign-out'
import { Redirect } from 'react-router-dom'
import ListItemAdmin from '../components/ListItemAdmin'
import './AdminHome.css'

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

export class AdminHome extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      fireRedirect: false
    }
  }
  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchOrganizations()
    this.props.fetchFaq()
  }

  renderOrgs(org) {
    return <ListItemAdmin key={org._id} name={ org.name } path={`/admin/${org._id}/create-organization`} />
  }

  renderCats(cat) {
    return <ListItemAdmin key={cat._id} name={ cat.name } path={`/admin/${cat._id}/create-category`}  />
  }

  renderFaq(faq) {
    return <ListItemAdmin key={faq._id} name={truncate(faq.question, 5)} path={`/admin/${faq._id}/create-faq`} />
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()

    this.setState({
      fireRedirect: true
    })
  }

  render() {
    const { fireRedirect } = this.state;

    if (fireRedirect) {
      return <Redirect to='/admin/signin' />
    }

    return(
      <div className='adminpage'>
        <header>
          <h2>ADMIN HOME</h2>
          <p>Introduction to admin.</p>
          <hr />
          <button onClick={this.signOut.bind(this)}>Sign out</button>
        </header>

        <main className="main-admin">
          <div classname="catlist">
            <p>CURRENT CATEGORIES</p>
            <ul>
              { this.props.categories.map(this.renderCats.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-category'}}>Add category</Link></div>
          </div>

          <div classname="orglist">
            <p>CURRENT ORGANIZATIONS</p>
            <ul>
              { this.props.organizations.map(this.renderOrgs.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-organization'}}>Add organization</Link></div>
          </div>

          <div classname="faqlist">
            <p>CURRENT FAQ</p>
            <ul>
              { this.props.faq.map(this.renderFaq.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-faq'}}>Add</Link></div>
          </div>
          <div classname="rurustatus">
            <p>CURRENT RURU-INFO</p>
            <div className="addbutton"><Link to={{ pathname: '/admin/update-ruru'}}>Edit</Link></div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ faq, organizations, categories }) => ({ faq, organizations, categories })
const mapDispatchToProps = { fetchFaq, fetchOrganizations, fetchCategories, signOut }

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome)
