import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter';
import Aggrigate from './components/Aggrigate';
import { PlayList } from './components/PlayList';
import FakeServerData from './fakeServerData';

const defaultColor = '#fff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: {},
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: FakeServerData });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ color: defaultColor }}>
              {this.state.serverData.user.name} &apos; PlayList
            </h1>
            <Aggrigate color={defaultColor} playlists={this.state.serverData.user.playlists} />
            <Aggrigate color={defaultColor} />

            <Filter color={defaultColor} />
            <PlayList color={defaultColor} />
            <PlayList color={defaultColor} />
            <PlayList color={defaultColor} />
            <PlayList color={defaultColor} />
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default App;
