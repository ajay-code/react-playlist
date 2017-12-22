import React, { Component } from 'react';
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ ...style, color: this.props.color }}>
                <img/>
                <input type="text"/>
            </div>
         )
    }
}

let style = {
    // color: this.props.color,
    // width: '40%',
    // display: 'inline-block'
}

Filter.defaultProps = {
    color: '#fff'
};
export default Filter;