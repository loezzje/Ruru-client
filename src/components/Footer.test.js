import React from 'react'
import chai, { expect } from 'chai'
import wrapper from '../test/wrapper'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import {Footer} from './Footer'
import { Link, } from 'react-router'
import FaInstagram from 'react-icons/lib/fa/instagram'

chai.use(chaiEnzyme())
chai.use(spies)


describe('<Footer />', () => {
  // const onChange = chai.spy()
  const container = wrapper(<Footer  />)

  it('is wrapped in a div tag with className "footer"', () => {
    expect(container).to.have.tagName('div')
    expect(container).to.have.className('footer')
  })

  it('contains a link to about us, faq, contact us', () => {
    expect(container).to.contain(<Link to='/about'></Link>)

  })

  it('contains link to social media: instagram', () =>
  {
    expect(container).to.contain(<FaInstagram className="instagram"/>)

  })

})
