import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchOrganizations from '../actions/organizations/fetch'
import TopicCard from '../components/TopicCard'

class TopicCardList extends PureComponent {
  componentWillMount() {
    const { fetchOrganizations } = this.props
    fetchOrganizations()
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
        {this.props.organizations.map(this.renderTopic.bind(this))}
      </div>
    )
  }
}

const mapStateToProps = ({ organizations }) => ({
  organizations
})

export default connect(mapStateToProps, {fetchOrganizations})(TopicCardList)
