import React, { Component } from 'react';
import './App.css';

class LTab extends Component {

    state = {
        size: this.props.size
    };

    render() {

        if(this.state.size === 'L') {
            return (
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            )
        }
        if(this.state.size === 'M') {
            return (
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            )
        }
        if(this.state.size === 'S') {
            return (
                <span>&emsp;&emsp;&emsp;</span>
            )
        }
    }
}

export default LTab;