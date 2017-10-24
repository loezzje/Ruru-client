/*global FB*/

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CategoryButton from '../components/categoryButton'
import fetchCategories from '../actions/categories/fetch'
import TopicCard from '../components/TopicCard'
import './Home.css'
import Slider from '../components/Slider'
import fb from '../actions/facebook/get'





export class Home extends PureComponent {

  componentWillMount() {
    const { fetchCategories, fb } = this.props

    fetchCategories()
    fb()
  }

  showOrgs() {
    const frontOrgs = this.filterOrg()

    return frontOrgs.map((organization) => {
      console.log(organization.logo)
      return <Link to={'/organizations/' + organization._id}><TopicCard key={organization._id} title={organization.about} image={organization.logo} /></Link>
    })
  }

  filterOrg() {
    const { organizations } = this.props
    return organizations.filter(organization => organization.frontpage === true )
  }

  showButton() {
    const frontCats = this.filterCat()
    return frontCats.map((category) => <CategoryButton key={category._id} { ...category } />)
  }

  filterCat() {
    const { categories } = this.props
    return categories.filter((category) => category.frontpage === true)
  }

  getTheStyle() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    // https://stackoverflow.com/questions/35170581/how-to-access-styles-from-react
    // var elem = ReactDOM.findDOMNode(this.refs.container)
    // var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color")
    // debugger

    // var test = document.getElementById('Health')
    // var test2 = test === null ? "koekoe" : test.style.backgroundColor = "red"
    //
    // console.log(test2)
   }


  render() {
    const { menuShow } = this.props
    if (menuShow) return null
    // this.getfbevents()

    return(
      <div className="homepage main-container">
        <header>
          <h2>Welcome to RuRu</h2>
          <h5>An information handbook for newcomers to the Netherlands</h5>
        </header>
        <Slider />
        <main className="main-container">
          <h4>EXPLORE</h4>
          <div className="catbuttons">{this.showButton()}</div>
            <h4>Highlighted Organizations</h4>
          <div className="frontorgs">{this.showOrgs()}</div>
        </main>

      </div>
    )
  }
}

const mapStateToProps = ({ categories, organizations, menuShow }) => ({ categories, organizations, menuShow })
const mapDispatchToProps = { fetchCategories, fb }

export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  organizations: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuShow: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fb: PropTypes.func.isRequired
}
