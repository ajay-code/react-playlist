import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HoursCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {
      // color: this.props.color,
      width: '40%',
      display: 'inline-block',
    };
    const allSongs = this.props.playlists.reduce(
      (songs, eachPlayList) => songs.concat(eachPlayList.songs),
      [],
    );
    const totalDuration = allSongs.reduce((sum, song) => sum + song.duration, 0);
    return (
      <div style={{ ...style, color: this.props.color }}>
        {Math.round(totalDuration * 100 / (1000 * 60 * 60)) / 100}
        &nbsp; Hours
      </div>
    );
  }
}

HoursCounter.propTypes = {
  color: PropTypes.string,
  playlists: PropTypes.arrayOf(PropTypes.string),
};
HoursCounter.defaultProps = {
  color: '#fff',
  playlists: null,
};

export default HoursCounter;
