import React, { Component } from 'react';
//import './App.css';
import Table from "./components/table";
import FachSelect from './fachselect';
import SelectBox from "./components/features/select-box/index";
import "bootstrap/dist/css/bootstrap.css";
import {Button, Dropdown} from "react-bootstrap";
import Navigation from './components/features/Navigation/Navigation';


class Stundenplan extends Component {
  state = {
    feacher: [//für die verschiedenen zur auswahl stehenden Fächer
      { value: '-', id: 0},
      { value: 'Informatik', id: 1 },
      { value: 'Elektrotechnik', id: 2 },
      { value: 'Maschinenbau', id: 43 },
      { value: 'BWL', id: 21 },
    ], 

    montag: [
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2},{fach:'Englisch', id: 3}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]}
    ],
    dienstag: [
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]}
    ],
    mittwoch: [
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]}
    ],
    donnerstag: [
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]}
    ],
    freitag: [
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]},
      {stunde:[{fach:'Informatik', id: 1},{fach:'Elektrotechnik', id: 2}]}
    ],

    //----Benutzer Profil-Array Erzeugung 5x12Felder---------
    Profil: [
      [{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'}],//montag
      [{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'}],//dienstag
      [{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'}],//mittwoch
      [{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'}],//donnerstag
      [{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'},{id: '-'}] //freitag
    ],

    //Benutzer-Profil des Nutzers
    Benutzer: {name: "-", lvl: ["-","-"], bild: "-"}, //lvl: index0=level index1=prozent

    //login daten
    Login: {email: "-", password: "-"},
  };

  

  //anpassen des Persönlichen Profiles
  handleProfile = (day, hour, id) => {          //day=0-4 hour=0-11
    this.state.Profil[day][hour].id = id
    //console.log(this.state.Profil[day][hour].id)
  };

  handleSafeChanges = () => {
    console.log("gespeichert")
    //Änderungen werden im DB abgelegt, per login daten
    //  Profile->DB
  }

  handleDefaultPlan = (id) => {
    console.log(id)
    //Es wird der Stundenplan vom Ausgewählten Fach vom DB geladen.
    //this.setState({montag: this.state.new_montag})
    //this.setState({dienstag: ????})
    //this.setState({mittwoch: ????})
    //this.setState({donnerstag: ????})
    //this.setState({freitag: ????})
  }


  handleLogin = (email, password) => {
    console.log("login versuch");  //email oder password falsch oder nicht vorhanden handeling
    console.log(email);
    console.log(password);
    //Login->DB
    /*    //-1 falsches Password. 0=null. 1 für korrektes Account
    this.state.Benutzer = {name: "Peter", lvl: ["5","30"], bild: "xxxx"}
    var account = -1; //-1 falsches Password. 0=null. 1 für korrektes Account
    this.refs.child.refs.child.tryLogin(account, this.state.Benutzer) // Stundenplan->Navigation->Login
    */
  }

  /*
  handleInsert = (hour, day, modul) => {  //ursprüngliche Funktion zum hinzufügen von Elementen(veraltet)
    var feacher = this.state.feacher
    feacher[hour].splice(day, 1, modul);
    this.setState({feacher: feacher})
  };

  handleClear = (hour, day) => {  //ursprüngliche Funktion zum löschen von Elementen(veraltet)
    var feacher = this.state.feacher
    feacher[hour].splice(day, 1, "");
    this.setState({feacher: feacher})
  };
  */


  render(){

    //this.handleProfile(0,0,2);
    //this.state.Profil[0].montag[0].id = 'erfolgreich'
    //console.log(this.state.Profil[0].montag[0].id)

    return (
      <React.Fragment>
        <Navigation           
          onChange={(e) => this.props.handleDefaultPlan(e.target.value)}
          handleDefaultPlan = {this.handleDefaultPlan}
          style ={{position: "absolute", left: "10em"}}
          name ="venue[country_id]"
          items = {this.state.feacher}
          handleSafeChanges = {this.handleSafeChanges}
          handleLogin = {this.handleLogin}
          ref="child"
        />
        {/*<button onClick={this.onClick.bind(this)}>Click</button>*/}
        <Table 
          montag={this.state.montag}
          dienstag={this.state.dienstag}
          mittwoch={this.state.mittwoch}
          donnerstag={this.state.donnerstag}
          freitag={this.state.freitag}
          handleProfile= {this.handleProfile}
        />
        {/*<FachSelect 
          onInsert= {this.handleInsert}
          onClear = {this.handleClear}
        />*/}
        <div>
          
      {/*<SelectBox  //innerhalb dessen funktion muss eine allgemeine request des fachs gemacht werden.
          onChange={(e) => this.props.handleDefaultPlan(e.target.value)}
          handleDefaultPlan = {this.handleDefaultPlan}
          style ={{position: "absolute", left: "10em"}}
          name ="venue[country_id]"
          items = {this.state.feacher}
      />*/}
      </div>
      </React.Fragment>
    );
  }
}

export default Stundenplan;