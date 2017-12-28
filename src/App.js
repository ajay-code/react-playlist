import './App.css';
import React, { Component } from 'react';
import Filter from './components/Filter.js';
import Aggrigate from './components/Aggrigate.js';
import { PlayList } from './components/PlayList';
import  FakeServerData from './fakeServerData';

let defaultColor = '#fff';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      serverData: FakeServerData
    }
  };
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: defaultColor }}>
            { this.state.serverData.user && 
              this.state.serverData.user.name }
          </h1>
        </header>
        <Aggrigate color={defaultColor} playlists={this.state.FakeServerData.user && this.state.FakeServerData.user.playlists} />
        <Aggrigate color={defaultColor} />
        <Filter color={defaultColor} />
        <PlayList color={defaultColor} />
        <PlayList color={defaultColor} />
        <PlayList color={defaultColor} />
        <PlayList color={defaultColor} />
      </div>
    );
  }
}

export default App;
