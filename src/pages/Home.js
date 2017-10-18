import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom';
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
    return(
      <div className='homepage'>
        <header>
          <h3>Welcome to RuRu</h3>
          <h5>An information handbook for newcomers to the Netherlands</h5>
        </header>
        <main className="cat-btn-container">
          { this.showButton() }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories })
const mapDispatchToProps = { fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
