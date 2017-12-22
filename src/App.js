import './App.css';
import React, { Component } from 'react';
import Filter from './components/Filter.js';
import Aggrigate from './components/Aggrigate.js';
import { PlayList } from './components/PlayList';

let defaultColor = '#fff';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: defaultColor }}>Title</h1>
        </header>
        <Aggrigate color={defaultColor} />
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
