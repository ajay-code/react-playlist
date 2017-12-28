import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {
      // color: this.props.color,
      // width: '40%',
      // display: 'inline-block'
    };
    return (
      <div style={{ ...style, color: this.props.color }}>
        <input type="text" />
      </div>
    );
  }
}

Filter.defaultProps = {
  color: '#fff',
};
export default Filter;
