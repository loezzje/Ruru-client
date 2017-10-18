import React from 'react'
import wrapper from './test/wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'


chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = wrapper(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })
})
