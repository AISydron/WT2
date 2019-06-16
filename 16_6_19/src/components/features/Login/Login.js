import React from 'react';
import './styles.css'
import { Button } from 'react-bootstrap';


class Login extends React.PureComponent{


    loginScreen = (email, password) => {
        this.props.handleLogin(email, password);
    }

    tryLogin(account, Benutzer) {
        console.log('clicked');
        console.log(account);
        console.log(Benutzer);

        if(account == 0){

        }
        if(account == 1){
            console.log("lolo")
        }
        if(account == -1){
            console.log("lala")
            document.getElementById("wrongData").className = "";
        }
    }


    render() {
        return (
            <div>
                <div id="logScreen" className='neutral' >
                    <div className="elements">
                        <i id="wrongData" className="failed">Falsche Daten eingegeben!</i>
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