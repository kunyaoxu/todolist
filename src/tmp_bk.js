import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/style.css';
import App2 from './App2.js';

class App extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {value: ""};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input type="text" value={this.state.value} onChange={(e) => {this.setState({ value: e.target.value })}} />
        </div>
        <App2/>
      </div>
    );
  }
}

export default App;
