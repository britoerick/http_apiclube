import React, { Component } from 'react';

import Header from './components/header'
import './style.css';

import Routes from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes />
      </div>
    );
  }
}

export default App;
