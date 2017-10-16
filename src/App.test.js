import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })
})
