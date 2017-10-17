import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CategoryButton from '../components/categoryButton'
import fetchCategories from '../actions/categories/fetch'
import './Home.css'

export class Home extends PureComponent {
  componentWillMount() {
    this.props.fetchCategories()
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
        if(category.frontPage){
          return true
        }
        return false
    })
  }

  render() {
    return(
      <div className='homepage'>
        <header>
          <h3>Welcome to RuRu</h3>
          <h5>An information handbook for newcomers to the Netherlands</h5>
        </header>
        <main>
          { this.showButton()}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories })
const mapDispatchToProps = { fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
