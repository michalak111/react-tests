import React, { Component } from 'react'
import TeachersCollectionContainer from './containers/Teachers/TeachersCollectionContainer'
import './App.scss'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="section">
          <div className="container">
            <TeachersCollectionContainer/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
