import React from 'react'
import chai, { expect } from 'chai'
import wrapper from '../test/wrapper'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { Organization } from './Organization'

chai.use(chaiEnzyme())
chai.use(spies)

const data = {
  _id: 1,
  name: 'I Amsterdam',
  logo: 'http://allemediavacatures.nl/wp-content/uploads/2017/02/I-amsterdam-logo.png',
  tagline: 'All about visiting, living and working in Amsterdam',
  about: 'You can find practical information about where to look for work, accommodation or studying in Amsterdam. It is meant for tourists, but also acts as the English information site of City Counsil',
  features: ['Finding work', 'Practical information about living in Amsterdam, inclusing taxes', 'Information about Universities in Amsterdam'],
  website: 'www.iamsterdam.com/en',
  frontpage: false,
  categorieId: 2,
}

describe('<Organization />', () => {
  const hideMenuSpy = chai.spy()
  const container = wrapper(<Organization { ...data } hideMenu={ hideMenuSpy } />)

  it('is wrapped in a div tag with className "organization"', () => {
    expect(container).to.have.tagName('div')
    expect(container).to.have.className('organization')
  })
})
