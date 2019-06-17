import React, { Component } from 'react'
import {Button, Dropdown} from "react-bootstrap"

export class LevelUp extends Component {


    // handleClick = () => {
    //     console.log("clicked");
    //     if( document.getElementById('kairos').className == "spot")
    //         document.getElementById('kairos').className = "newspot";
    //     else
    //         document.getElementById('kairos').className = "spot";
    // }



    render() {
        return (
            <div className="progress">
                <div class="progress-bar progress-bar-striped bg-info" onClick={this.handleClick} role="progressbar" style={{width: "50%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        );
    }
}

export default LevelUp
