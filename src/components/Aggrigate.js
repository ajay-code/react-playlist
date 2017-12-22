import React, { Component } from 'react';

class Aggrigate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ ...style, color: this.props.color}}>
                Number Text
            </div>
         )
    }
}

let style = {
    // color: this.props.color,
    width: '40%',
    display: 'inline-block'
}

Aggrigate.defaultProps = {
    color: '#fff'
};
 
export default Aggrigate;