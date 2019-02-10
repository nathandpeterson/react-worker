import React, { Component } from 'react'
import worker from './app.worker.js'
import WebWorker from './WebWorker'
import "./styles/main.scss"
import { MagicLoader } from './components/MagicLoader'
import { Chart } from './components/Chart'

class App extends Component {

  state = {
    input: '',
    data: null,
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
        if(event.data && event.data.payload){
          this.setState({ loading: false, data: event.data.payload })
        } else {
          this.setState({ loading: false })
        }
       
      })
    })
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    const { loading } = this.state 
    return (
      <div className="main-container">
        <div className="flex-center">
          <h1>worker demo</h1>
        </div>
        <MagicLoader loading={loading} />
        <div>
          <input
            onChange={(e) => this.handleChange(e)}
            className={`input ${loading && 'input__left'}`} 
            type='text'
            value={this.state.input}
            />
        </div>
        <button
          onClick={this.handleClick} 
          className={`btn ${loading && 'btn__left'}`}>
          calculate
        </button>
        <Chart data={this.state.data} />
      </div>
    );
  }
}

export default App
