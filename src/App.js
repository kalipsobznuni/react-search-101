import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

const {data} = this.props;

const countriesList = data.map(name=>{
  return(
    <li>{name.name}</li>
  )

});


  return (
      <div className="App">
        <div className='filtered'>
            <div>
            <h1> Filtered Lists </h1>
              <input type="text" className="search" placeholder="Filter...">
              </input>
              {countriesList}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
