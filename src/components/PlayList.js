import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {
      // color: this.props.color,
      width: '20%',
      display: 'inline-block',
    };
    return (
      <div style={{ ...style, color: this.props.color }}>
        <h3>Playlist Name</h3>
        <ul>
          <li>song 1</li>
          <li>song 2</li>
          <li>song 3</li>
        </ul>
      </div>
    );
  }
}

PlayList.propTypes = {
  color: PropTypes.string,
};
PlayList.defaultProps = {
  color: '#fff',
};

export default PlayList;
