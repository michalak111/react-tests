import React, { Component } from 'react'
import TeachersContainer from './containers/Teachers/TeachersContainer'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="section">
          <div className="container">
            <TeachersContainer/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
