import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      inventory:[
      ]
    }
  }
componentDidMount(){
  axios.get('/api/inventory').then (response => {
    console.log(response)
    this.setState({
      inventory: response.data
    })
    
  })
  
}

updateProducts = (inventory) => {
  this.setState({inventory})
}


  render() {
    return (
      <div className="App">
        <Dashboard inventoryList={this.state.inventory} updateProducts={this.updateProducts}/>
        <Form updateProducts={this.updateProducts} />
        <Header/>
      </div>
    );
  }
}

export default App;
