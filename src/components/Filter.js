import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {};
    return (
      <div style={{ ...style, color: this.props.color }}>
        <input onKeyUp={event => this.props.onTextChange(event.target.value)} type="text" />
      </div>
    );
  }
}

Filter.propTypes = {
  color: PropTypes.string,
  onTextChange: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  color: '#fff',
};
export default Filter;
