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
  if (str.split(" ").length > 6)
    return (str.split(" ").splice(0, no_words).join(" ")) + "...";
  else return str
}

export class AdminHome extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      fireRedirect: false
    }
  }

  componentWillMount() {
    const { currentUser, fetchCategories, fetchOrganizations, fetchFaq } = this.props

    fetchCategories()
    fetchOrganizations()
    fetchFaq()

    if (currentUser === null) {
      this.setState({
        fireRedirect: true
      })
    }
  }

  renderOrgs(org) {
    return <ListItemAdmin key={org._id} name={ org.name } path={`/admin/${org._id}/create-organization`} />
  }

  renderCats(cat) {
    return <ListItemAdmin key={cat._id} name={ cat.name } path={`/admin/${cat._id}/create-category`}  />
  }

  renderFaq(faq) {
    return <ListItemAdmin key={faq._id} name={truncate(faq.question, 6)} path={`/admin/${faq._id}/create-faq`} />
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

    if (fireRedirect) return <Redirect to='/admin/signin' />

    return (
      <div className='adminpage main-container'>
        <header>
          <h2>ADMIN HOME</h2>
          <button onClick={this.signOut.bind(this)}>Sign out</button>
        </header>

        <main className="main-admin">
          <div className="catlist">
            <p>CURRENT CATEGORIES</p>
            <ul>
              { this.props.categories.map(this.renderCats.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-category'}}>Add category</Link></div>
          </div>

          <div className="orglist">
            <p>CURRENT ORGANIZATIONS</p>
            <ul>
              { this.props.organizations.map(this.renderOrgs.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-organization'}}>Add organization</Link></div>
          </div>

          <div className="faqlist">
            <p>CURRENT FAQ</p>
            <ul>
              { this.props.faq.map(this.renderFaq.bind(this)) }
            </ul>
            <div className="addbutton"><Link to={{ pathname: '/admin/create-faq'}}>Add FAQ</Link></div>
          </div>
          <div className="rurustatus">
            <p>CURRENT RURU-INFO</p>
            <div className="ruruinfos">
              <table>
                <tbody>
                <tr>
                  <th>E-mail</th>
                  <td>{ this.props.ruru[0] === undefined ? null : this.props.ruru[0].email }</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{ this.props.ruru[0] === undefined ? null : this.props.ruru[0].phone }</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{ this.props.ruru[0] === undefined ? null : this.props.ruru[0].address }</td>
                </tr>
                <tr>
                  <th>Instagram</th>
                  <td>{ this.props.ruru[0] === undefined ? null : this.props.ruru[0].instagram }</td>
                </tr>
                <tr>
                  <th>Facebook</th>
                  <td>{ this.props.ruru[0] === undefined ? null : this.props.ruru[0].facebook }</td>
                </tr>
                <tr>
                  <th>Twitter</th>
                  <td>{ this.props.ruru[0] === undefined ? null : this.props.ruru[0].twitter }</td>
                </tr>
                <tr>
                  <th>About</th>
                  <td>{ this.props.ruru[0] === undefined ? null : this.props.ruru[0].about }</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="addbutton"><Link to={{ pathname: '/admin/update-ruru'}}>Edit RURU-info</Link></div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ faq, organizations, categories, currentUser, ruru }) => ({ faq, organizations, categories, currentUser, ruru })
const mapDispatchToProps = { fetchFaq, fetchOrganizations, fetchCategories, signOut }

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome)
