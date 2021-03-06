import React, { Component } from 'react';
import Calendar from './Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerlinks-wrap">
          <div id="link">
            <a href="https://adventofcode.com/" className="headerlinks">Advent of Code 2019</a>
          </div>
          <div id="name">
            <a href="https://github.com/lawreka" className="headerlinks">lawreka</a>
          </div>
        </div>
        <header className="App-header">
          <Calendar />
        </header>
      </div>
    );
  }
}
export default App;
