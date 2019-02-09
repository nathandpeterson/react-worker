import React, { Component } from 'react'
import worker from './app.worker.js'
import WebWorker from './WebWorker'
import "./styles/main.scss"

class App extends Component {

  componentDidMount(){
    this.worker = new WebWorker(worker)
    this.worker.postMessage('message', e => {
    })
  }

  render() {
    return (
      <div className="main-container">
        <h1>worker demo</h1>
        <button className='btn calculate-btn'>calculate</button>
      </div>
    );
  }
}

export default App
