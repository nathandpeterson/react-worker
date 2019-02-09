import React, { Component} from 'react'
import worker from './app.worker.js';
import WebWorker from './WebWorker';

export default class Home extends Component {

  componentDidMount = () => {
 
      this.worker = new WebWorker(worker)

      let data = { a: 1, b: 2 }

      this.worker.addEventListener('message', (event) => {
        console.log('in react', event)
      })
   
	}

  render(){
    return (
      <div>
         <h1>Worker Stuff</h1>
      </div>
    )
  }
  
}