import React, { Component } from 'react';
export class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ ...style, color: this.props.color }}>
                <h3>Playlist Name</h3>
                <ul>
                    <li>song 1</li>
                    <li>song 2</li>
                    <li>song 3</li>
                </ul>      
            </div>
         )
    }
}

let style = {
    // color: this.props.color,
    width: '20%',
    display: 'inline-block'
}

PlayList.defaultProps = {
    color: '#fff'
};
 
export default PlayList;