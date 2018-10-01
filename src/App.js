import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberContext  from "./context";

const Counter = (props) => {
  return (
    <NumberContext.Consumer>{val => <h1>{val}</h1>}</NumberContext.Consumer>
  )
}

class App extends Component {
  state = {
    number:0
  };

  onInc = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  onDec = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  onReset = () => {
    this.setState({
      number: 0
    })
  }

  render(){
    return(
      <React.Fragment>
      <div align="center" style={{margin:80}}>
        <button onClick={this.onInc} style={{backgroundColor:'green', color:'white',padding:20}}>Increment</button>
        <NumberContext.Provider value={this.state.number}>
          <Counter />
        </NumberContext.Provider>
        <button onClick={this.onDec} style={{backgroundColor:'red', color:'white',padding:20}}>Dec</button>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
