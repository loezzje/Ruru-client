import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TopicCardList from './pages/TopicCardList'
import Organization from './containers/Organization.js'
import Home from './pages/Home'
import CreateOrganization from './components/CreateOrganization'
import CreateCategory from './components/CreateCategory'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import AdminHome from './pages/AdminHome'


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
        <Route exact path="/admin/:categoryId/create-category" component={ CreateCategory } />
        <Route exact path="/admin/:organizationId/create-organization" component={ CreateOrganization } />
        <Route exact path="/admin/create-category" component={ CreateCategory } />
        <Route exact path="/admin/create-organization" component={ CreateOrganization } />
        <Route path="/admin" component={ AdminHome } />
        <Route path="/faq" component={ Faq } />
        <Route path="/contact" component={ Contact } />
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
