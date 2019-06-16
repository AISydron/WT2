import React from 'react';
import './styles.css'
import { Button } from 'react-bootstrap';

class Login extends React.PureComponent{


    loginScreen = (email, password) => {
        this.props.handleLogin(email, password);
    }

    tryLogin(content) {

        //wenn login gescheitert
        if(content == null){
            console.log("falsch");
            document.getElementById("wrongData").className = "";
            document.getElementById("password").value= "";
        }
        //wenn login erfolgreich
        else{
            document.getElementById("wrongData").className = "notFailed";
            console.log("logged in");
        }

    }


    render() {
        return (
            <div>
                <div id="logScreen" className='neutral' >
                    <div className="elements">
                        <i id="wrongData" className="notFailed">Falsche Daten eingegeben!</i>
                        <label >
                            Email adress<br />
                            <input type="text" id="email" placeholder="Enter email" />
                        </label>
                    </div>
                    <div className="elements">
                        <label >
                            Password<br />
                            <input type="password" id="password" placeholder="Password" />
                        </label>
                        <Button variant="primary" type="submit" onClick={() => this.loginScreen(document.getElementById('email').value, document.getElementById('password').value)}>Anmelden</Button>
                    </div>
                </div>
            </div>
            );
        }
      }
      
      export default Login;