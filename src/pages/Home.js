import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CategoryButton from '../components/categoryButton'
import fetchCategories from '../actions/categories/fetch'
import TopicCard from '../components/TopicCard'
import './Home.css'

export class Home extends PureComponent {
  componentWillMount() {
    this.props.fetchCategories()
  }

  showOrgs() {
    const frontOrgs = this.filterOrg()

    return frontOrgs.map(function(organization){
      return <Link to={'/organizations/' + organization._id}><TopicCard key={organization._id} title={organization.about} image={organization.logo} /></Link>
    })
  }

  filterOrg() {
    const { organizations } = this.props

    return organizations.filter(function(organization) {
        if(organization.frontpage){
          return true
        }
        return false
    })
  }

  showButton() {
    const frontCats = this.filterCat()

    return frontCats.map(function(category){
      return <CategoryButton key={category._id} { ...category } />
    })
  }

  filterCat(){
    const { categories } = this.props

    return categories.filter(function(category) {
        if(category.frontpage){
          return true
        }
        return false
    })
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
    if (menuShow) {
      return null
    }

    return(
      <div className='homepage main-container'>
        <header>
          <h2>Welcome to RuRu</h2>
          <h5>An information handbook for newcomers to the Netherlands</h5>
        </header>
        <main className="main-container">
          <h4>EXPLORE</h4>
          <div className="catbuttons">{ this.showButton() }</div>
          <h4>Highlighted Organizations</h4>
          <div className="frontorgs">{ this.showOrgs() }</div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, organizations, menuShow }) => ({ categories, organizations, menuShow })
const mapDispatchToProps = { fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
