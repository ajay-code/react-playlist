import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, songs } = this.props.playlist;
    const style = {
      color: this.props.color,
      textAlign: 'left',
      width: '20%',
      display: 'inline-block',
    };
    return (
      <div style={{ ...style }}>
        <h3>{name}</h3>
        <ul style={{ padding: '20px' }}>{songs.map(song => <li>{song.name}</li>)}</ul>
      </div>
    );
  }
}

PlayList.propTypes = {
  color: PropTypes.string,
  playlist: PropTypes.shape({
    name: PropTypes.string,
    songs: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      duration: PropTypes.number,
    })),
  }).isRequired,
};

PlayList.defaultProps = {
  color: '#fff',
};

export default PlayList;
