import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Home extends PureComponent {

  render() {
    return(
      <div className='homepage'>
        <header>
          <h1>Homepage</h1>
        </header>
        <main>
        </main>
      </div>
    )
  }
}

export default connect(null, null)(Home)
