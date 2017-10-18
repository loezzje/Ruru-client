import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchOrganizations from '../actions/organizations/fetch'
import getCategory from '../actions/categories/get'
import TopicCard from '../components/TopicCard'

class TopicCardList extends PureComponent {
  componentWillMount() {
    const { fetchOrganizations, getCategory } = this.props
    fetchOrganizations()
    getCategory(this.props.match.params.categorieId)
  }

  /* It should be read from the 'tagline' property in organizations schema */
  renderTopic(topics, index) {
    return (
        <Link to={'/organizations/' + topics._id}>
          <TopicCard
            key={index}
            title={topics.about} />
        </Link>
    )
  }

  render() {
    // console.log("Match params: ", this.props.match.params)
    console.log('Show single category: ', this.props.category)
    return (
      <div>
        Category full width tile here.
        <hr />
        {this.props.organizations.map(this.renderTopic.bind(this))}
      </div>
    )
  }
}

// const mapStateToProps = ({ organizations, categories }, { match }) => ({
//
//   const category = categories.reduce((prev, next) => {
//     if (next._id === match.params.categorieId) {
//       return next
//     }
//     return prev
//   }, {})
//
//   return {
//     category,
//     ...category,
//     organizations
//   }
// })

const mapStateToProps = ({ organizations, category }) => ({
  organizations,
  category
})

export default connect(mapStateToProps, {fetchOrganizations, getCategory})(TopicCardList)
