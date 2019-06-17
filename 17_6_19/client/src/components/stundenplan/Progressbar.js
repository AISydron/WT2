import React, { Component } from 'react';

class Progressbar extends Component {

    render() { 
        
        return ( 
            <div className="progress">
                <div id="bar" className="progress-bar progress-bar-striped bg-info" role="progressbar"  style={{width: this.props.value + "%"}}></div>
            </div>
         );
    }
}
 
export default Progressbar;

