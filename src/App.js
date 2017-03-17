import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='filtered'>
            <div>
            <h1> Filtered Lists </h1>
              <input type="text" className="search" placeholder="Filter...">
              </input>
            </div>

        </div>
      </div>
    );
  }
}

export default App;
