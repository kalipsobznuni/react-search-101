import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

    changeSearch = (e) => {
      const search = e.currentTarget.value.toLowerCase();
      this.setState({ search });
    }

  render() {

    const {data} = this.props;
    const {search} = this.state;
    const countriesList = data.map((erkir, idx)=>{
      //console.log(search)
      if(erkir.name.toLowerCase().includes(search)) {
        return <div className='erkir' key={idx}> {erkir.name} </div>
   }
    });

    return (
      <div className="App">
        <div className='filtered'>
          <div>
          <h1> Filtered Lists </h1>
            <input type="text"
              className="search"
              placeholder="Filter..."
              value={this.state.search}
              onChange={(e) => this.setState({search: e.currentTarget.value})}
              />
              <div className='list'>{countriesList}</div>
        </div>
    </div>
</div>
);
}
}

export default App;

/*
const countriesList= data.filter(
  (country)=>{
    return data.name.indexOf(this.state.search) !== -1;
  }
)
*/
