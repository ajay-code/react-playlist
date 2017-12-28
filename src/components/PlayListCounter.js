import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayListCounter extends Component {
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
    return (
      <div style={{ ...style, color: this.props.color }}>
        {this.props.playlists.length}
        &nbsp; PlayLists
      </div>
    );
  }
}

PlayListCounter.propTypes = {
  color: PropTypes.string,
  playlists: PropTypes.arrayOf(PropTypes.object),
};
PlayListCounter.defaultProps = {
  color: '#fff',
  playlists: [],
};

export default PlayListCounter;
