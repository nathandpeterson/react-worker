import React, { Component } from 'react'
import worker from './app.worker.js'
import WebWorker from './WebWorker'
import "./styles/main.scss"
import { MagicLoader } from './components/MagicLoader'

class App extends Component {

  state = {
    input: '',
    loading: false
  }

  componentDidMount(){
    this.worker = new WebWorker(worker)
  }

  handleClick = () => {
    let { input } = this.state

    this.worker.postMessage({input, type: 'input'})

    this.setState({loading: true}, () => {
      this.worker.addEventListener('message', event => {
        console.log('event in react callback', event)
        this.setState({ loading: false })
      })
    })
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div className="main-container">
        <div className="flex-center">
          <h1>worker demo</h1>
        </div>
        <MagicLoader loading={this.state.loading} />
        <div>
          <input
            onChange={(e) => this.handleChange(e)}
            className='input' 
            type='text'
            value={this.state.input}
            />
        </div>
        <button
          onClick={this.handleClick} 
          className='btn calculate-btn'>
          calculate
        </button>
      </div>
    );
  }
}

export default App
