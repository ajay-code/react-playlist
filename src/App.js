import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter';
import PlayList from './components/PlayList';
import FakeServerData from './fakeServerData';
import HoursCounter from './components/HoursCounter';
import PlayListCounter from './components/PlayListCounter';

const defaultColor = '#fff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: {},
      filterString: '',
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
            <PlayListCounter
              color={defaultColor}
              playlists={this.state.serverData.user.playlists}
            />
            <HoursCounter color={defaultColor} playlists={this.state.serverData.user.playlists} />
            <Filter
              onTextChange={text => this.setState({ filterString: text })}
              color={defaultColor}
            />
            {this.state.serverData.user.playlists
              .filter(playlist =>
                playlist.name.toLowerCase().includes(this.state.filterString.toLowerCase()))
              .map(playlist => <PlayList key={playlist.name} playlist={playlist} />)}
          </div>
        ) : (
          <h1 style={{ color: defaultColor }}>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
