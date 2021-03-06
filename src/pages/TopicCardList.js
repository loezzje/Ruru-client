import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchOrganizations from '../actions/organizations/fetch'
import getCategory from '../actions/categories/get'
import CategoryButton from '../components/categoryButton'
import TopicCard from '../components/TopicCard'
import './TopicCardList.css'

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
      } else if (category.organizations === null) {
        return null
      } else if (category.organizations.name) {

        return this.renderTopic(category.organizations)
      } else {
        return category.organizations.map(this.renderTopic.bind(this))
      }
    }

  /* It should be read from the 'tagline' property in organizations schema */
  renderTopic(topics, index) {

    if (topics === null ) {
      return null
    } else {
      return (
          <Link to={'/organizations/' + topics._id}>
            <TopicCard
              key={index}
              title={topics.about}
              image={topics.logo} />
          </Link>
      )
    }
  }

  render() {
    return (
      <div className="catpage main-container">
        <div className="catheader"><CategoryButton { ...this.props.category } /></div>
        <div className="topicorgs">
          { this.mapOrganisationsFromCategory() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ organizations, category }) => ({
  organizations,
  category
})

export default connect(mapStateToProps, {fetchOrganizations, getCategory})(TopicCardList)
