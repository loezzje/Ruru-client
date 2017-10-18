import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TopicCardList from './pages/TopicCardList'
import Organization from './containers/Organization.js'
import Home from './pages/Home'
import Faq from './pages/Faq'

// import {
//   Home,
//   About,
//   Faq,
//   Contact,
//   Categories,
//   Category,
//   Service,
//   Events,
//   Event
// } from './containers'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" render={ () => <p>"About us" page</p> } />
        <Route path="/admin" render={ () => <p>"Admin" page</p> } />
        <Route path="/faq" component={ Faq } />
        <Route path="/contact" render={ () => <p>"Contact us" page</p> } />
        {/* <Route exact path="/categories" component={Categories} /> */}
        <Route exact path="/categories" render={ () => <p>"Categories" page</p> } />
        {/* <Route exact path="/categories/:categorieId" component={ ({ match }) => (
          <p>Category { match.params.categorieId } page</p> */}
        <Route exact path="/categories/:categorieId" component={ TopicCardList } />
        <Route exact path="/service/:serviceId" component={ ({ match }) => (
          <p>Service { match.params.serviceId } page</p>
        )} />
        <Route exact path="/categories/:categorieId/organizations/:organizationId" component={Organization}/>
        <Route exact path="/organizations/:organizationId" component={Organization}/>
        <Route exact path="/events" render={ () => <p>"Events" page</p> } />
        <Route exact path="/events/:eventId" component={ ({ match }) => (
          <p>Event { match.params.eventId } page</p>
        )} />
      </Switch>
    )
  }
}
