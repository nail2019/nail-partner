import React, { Component } from 'react';
import './App.css';
import MainRoute from '../routers/main-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-container">
          <MainRoute/>
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
