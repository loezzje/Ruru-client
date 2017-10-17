import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import store from '../store'
import { BrowserRouter } from 'react-router-dom'

export default (component) => (
  mount(
    <Provider store={store}>
    <BrowserRouter>
      {component}
      </BrowserRouter>
    </Provider>
  )
)
