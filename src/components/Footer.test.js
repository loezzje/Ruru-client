import React from 'react'
import chai, { expect } from 'chai'
import wrapper from '../test/wrapper'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { Footer } from './Footer'

chai.use(chaiEnzyme())
chai.use(spies)


describe('<Footer />', () => {
  // const onChange = chai.spy()
  const container = wrapper(<Footer  />)

  it('is wrapped in a div tag with className "footer"', () => {
    expect(container).to.have.tagName('div')
    expect(container).to.have.className('footer')
  })


})
