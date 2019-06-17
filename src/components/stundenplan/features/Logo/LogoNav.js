import React, { Component } from 'react'
import kairos from './Kairos.png'
import './logoNav.css'

export class LogoNav extends Component {
    render() {
        return (
            <div>
                <div class='spot'><img src={kairos} alt='LOGO'/></div>    
                <div class='spotHighlight'><p><b>Your EZ' better study Planner</b></p></div>           
            </div>
        )
    }
}

export default LogoNav
