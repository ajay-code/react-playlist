import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Aggrigate extends Component {
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
        {this.props.playlists && this.props.playlists.length}
        &nbsp; TEXT
      </div>
    );
  }
}

Aggrigate.propTypes = {
  color: PropTypes.string,
  playlists: PropTypes.arrayOf(PropTypes.string),
};
Aggrigate.defaultProps = {
  color: '#fff',
  playlists: null,
};

export default Aggrigate;
