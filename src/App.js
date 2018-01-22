import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import FunctionMain from "./FunctionMain";

class App extends Component {
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

        <p>
          Main : <Main></Main>          
        </p>
        <p>
        Function : <FunctionMain></FunctionMain>
        </p>
      </div>
    );
  }
}

export default App;
