import React, { Component } from 'react';
//import './App.css';
import Table from "./table";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import Navigation from './features/Navigation/Navigation';
import Progressbar from './Progressbar';


class Stundenplan extends Component {
  state = {
    feacher: [//für die verschiedenen zur auswahl stehenden Fächer
      { value: '-', id: 0},
      { value: 'Informatik 4.Sem', id: 1},
      { value: 'Elektrotechnik 2.Sem', id: 2},
      { value: 'Architektur 2.Sem', id: 3},
      { value: 'BWL 6.Sem', id: 4 },
    ], 

    montag: [
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]}
    ],
    dienstag: [
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]}
    ],
    mittwoch: [
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]}
    ],
    donnerstag: [
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]}
    ],
    freitag: [
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
      {stunde:[{fach:'-', id: 0}]},
    ],

    //----Benutzer Profil-Array Erzeugung 5x12Felder---------
    Profil: [
      [{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0}],//montag
      [{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0}],//dienstag
      [{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0}],//mittwoch
      [{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0}],//donnerstag
      [{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0},{id: 0}] //freitag
    ],

    //Benutzer-Profil des Nutzers
    Benutzer: {name: "-", lvl: ["-","-"], bild: "-", email: "-", password: "-", defaultPlan: "-"}, //lvl: index0=level index1=prozent
    LoggedIn: false,
    progressValue: 0, //fürs Progressbar

  };

  /*
  (async () => {
    const rawResponse = await fetch('/', {
      method: 'POST',                                    //http send form
      headers: {                                         //http headers
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: id, b: 'Textual content'})//http body
    });
    const content = await rawResponse.json();            //response from server
  
    console.log(content);
  })();
  */

  componentWillMount() {
    //console.log(this.state.feacher)
    fetch('/default')
    .then(res => res.json()) //das resultat wird in res.json gemappt
    .then(feacher => this.setState({feacher}))
    //.then(feacher => this.setState({feacher}, () => console.log('Customers fetched...', this.state.feacher)));
  }


  //anpassen des Persönlichen Profiles
  handleProfile = (day, hour, id) => {          //day=0-4 hour=0-11
    this.state.Profil[day][hour].id = id
  };

  handleSafeChanges = () => {
    //console.log("gespeichert")
    //Änderungen werden im DB abgelegt, per login daten
    //  Profile->DB

    const Profile = {Profile: this.state.Profile, defaultPlan: this.state.Benutzer.defaultPlan}

    if(this.state.LoggedIn == true){
    (async () => {
      const rawResponse = await fetch('/safeChanges', {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Profile)
      });
      //const content = await rawResponse.body
    
      //console.log(content);
    })();
    console.log("Changes Safed")
    }
    else{console.log("nicht eingeloggt")};
  }

  loadPlan_fromUser = (plan) => {

      var montag = this.state.montag;
      for(var i=0; i<plan.userPlan[0].length; i++)
        montag[i].stunde.unshift(plan.userPlan[0][i]);

      var dienstag = this.state.dienstag;
      for(var i=0; i<plan.userPlan[1].length; i++)
        dienstag[i].stunde.unshift(plan.userPlan[1][i]);

      var mittwoch = this.state.mittwoch;
      for(var i=0; i<plan.userPlan[2].length; i++)
        mittwoch[i].stunde.unshift(plan.userPlan[2][i]);
  
      var donnerstag = this.state.donnerstag;
      for(var i=0; i<plan.userPlan[3].length; i++)
        donnerstag[i].stunde.unshift(plan.userPlan[3][i]);

      var freitag = this.state.freitag;
      for(var i=0; i<plan.userPlan[4].length; i++)
        freitag[i].stunde.unshift(plan.userPlan[4][i]);
    

      this.setState(montag);
      this.setState(dienstag);
      this.setState(mittwoch);
      this.setState(donnerstag);
      this.setState(freitag);

  }

  loadPlan_fromDefault = (plan) => {  //bezeichnungen unglücklich gewählt, so das dieser auch entstehen musste :(
    
    var montag = this.state.montag;
    for(var i=0; i<plan.feacher[0].length; i++)
      montag[i].stunde.unshift(plan.feacher[0][i]);

    var dienstag = this.state.dienstag;
    for(var i=0; i<plan.feacher[1].length; i++)
      dienstag[i].stunde.unshift(plan.feacher[1][i]);

    var mittwoch = this.state.mittwoch;
    for(var i=0; i<plan.feacher[2].length; i++)
      mittwoch[i].stunde.unshift(plan.feacher[2][i]);

    var donnerstag = this.state.donnerstag;
    for(var i=0; i<plan.feacher[3].length; i++)
      donnerstag[i].stunde.unshift(plan.feacher[3][i]);

    var freitag = this.state.freitag;
    for(var i=0; i<plan.feacher[4].length; i++)
      freitag[i].stunde.unshift(plan.feacher[4][i]);
  

    this.setState(montag);
    this.setState(dienstag);
    this.setState(mittwoch);
    this.setState(donnerstag);
    this.setState(freitag);

  }

  handleDefaultPlan = (id) => {
    //console.log(id)
    /*fetch('/lala')
    .then(res => res.json()) //aus dem response wird nur der json teil gefiltert
    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)))
    */

    /*
    fetch('/profile', { method: 'POST', data: {ids: "nono", name: "yaulayaula"}, headers: new Headers({'Content-Type': 'application/json'}) })
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(error => console.error('Error: ${error}'));
    //.then(json => this.setState({testDaten : json}));
    */
    this.state.Benutzer.defaultPlan = id;
    
    (async () => {
      const rawResponse = await fetch('/defaultPlan', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
      });
      const content = await rawResponse.json();
    
      console.log(content);

      if(content != null){

        this.loadPlan_fromDefault(content);//stundenplan schreiben
      }

    })();
    console.log(this.state.feacher)
  }


  handleLogin = (email, password) => {
    console.log("login versuch");  //email oder password falsch oder nicht vorhanden handeling

    var benutzer = this.state.Benutzer;
    benutzer.email = email;
    benutzer.password = password;

    this.setState({Benutzer: benutzer});
    
   (async () => {

      const rawResponse = await fetch('/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.Benutzer)
      });
      var content = await rawResponse.json();

      console.log(content);
      
      if(content != null){

        var benutzer = this.state.Benutzer;
        benutzer.email = content.email;
        benutzer.password = content.password;
        benutzer.name = content.name;
        benutzer.gruppe = content.gruppe;
        benutzer.lvl = content.lvl;
        benutzer.bild = content.bild;

        this.setState({Benutzer: benutzer});
        this.setState({LoggedIn: true})

        var montag= {stunde:[{fach:'-', id: 0}]};

        console.log(this.state.montag[0].stunde[1] = '')
        //this.setState({montag: montag});
        //console.log(this.state.Benutzer);

        //user-profil befüllen:
        for(var i=0; i<content.userPlan.length; i++){
          for(var k=0; k<content.userPlan[i].length; k++){
            this.handleProfile(i, k, content.userPlan[i][k].id)
          }
        }

        this.loadPlan_fromUser(content);//stundenplan schreiben
      }

      this.refs.child.refs.child.tryLogin(content, this.state.Benutzer.email) // Stundenplan->Navigation->Login
      

    })();
    
  }

  progressIncrease = () => {
    
    var progressValue = this.state.progressValue + 5;
    this.setState({progressValue});
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
          feacher = {this.state.feacher}
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
        <Progressbar value={this.state.progressValue}/>
        <Button onClick={this.progressIncrease}>increase</Button>
        {/*<FachSelect 
          onInsert= {this.handleInsert}
          onClear = {this.handleClear}
        />*/}
      </React.Fragment>
    );
  }
}

export default Stundenplan;