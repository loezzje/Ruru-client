import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import categoryButton from '../components/categoryButton'

export class Home extends PureComponent {

  render() {
    return(
      <div className='homepage'>
        <header>
          <h3>Welcome to RuRu</h3>
          <h5>An information handbook for newcomers to the Netherlands</h5>
        </header>
        <main>
          <categoryButton />
        </main>
      </div>
    )
  }
}

export default connect(null, null)(Home)
