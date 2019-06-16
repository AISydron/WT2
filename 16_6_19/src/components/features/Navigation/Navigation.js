import React from 'react';
import './styles.css'
import SelectBox from '../select-box';
import { Button } from 'react-bootstrap';
import Login from '../Login/Login';


class Navigation extends React.PureComponent {


  render() {

    return (
      <div>
        <ul className='select'>
          <li>
              <SelectBox
                onChange={(e) => this.props.handleDefaultPlan(e.target.value)}
                handleDefaultPlan = {this.props.handleDefaultPlan}
                name ="venue[country_id]"
                items = {this.props.items}
              />
          </li>
          <li id="button">
              <Button className="btn btn-primary btn-sm" onClick={this.props.handleSafeChanges}>Save Changes</Button>
          </li>
          <li id="login">
              <Login 
                handleLogin = {this.props.handleLogin}
                ref= "child" //Ein Referenzpunkt "child" auf Login wird gesetzt. Nötig damit der parent eine methode vom child ausführen kann.
              />
          </li>
        </ul>

      </div>
    );
  }
}

export default Navigation;
