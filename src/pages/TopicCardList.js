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

  mapOrganisationsFromCategory() {
      const { category } = this.props
      if (category === null) {
        return null
      } else if (category.organizations.length > 1) {
        return category.organizations.map(this.renderTopic.bind(this))
      } else {
        return this.renderTopic(category.organizations)
      }
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
    return (
      <div>
        Category full width tile here.
        <hr />
        { this.mapOrganisationsFromCategory() }
      </div>
    )
  }
}

const mapStateToProps = ({ organizations, category }) => ({
  organizations,
  category
})

export default connect(mapStateToProps, {fetchOrganizations, getCategory})(TopicCardList)
