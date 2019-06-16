import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

//Das ist veraltet

class FachSelect extends Component {

    state = {
        modul: ['-', 'Mathe', 'Informatik', 'Mathe Praktikum', 'Datenbanken', 'Web-Technologie', 'Web-Technologie 2', 'C-Übung']
    };

    render() { 
        return ( 

        <React.Fragment>
            <select name="Fachrichtung" id="Fachrichtung" method="post">
                <option value="none">None</option>
                <option value="informatik">Informatik</option>
                <option value="elektrotechnik">Elektrotechnik</option>
                <option value="maschinenbau">Maschinenbau</option>
                <option value="wirtschaftsinformatik">Wirtschaftsinformatik</option>
            </select>


            <div id="Planner">
                <form name="nextChange" action="#" method="GET">
                    <label htmlFor="formGroupExampleInput">Wochentag:</label>
                    <select id="nextDay" className="form-control">
                        <option value="1">Montag</option>
                        <option value="2">Dienstag</option>
                        <option value="3">Mittwoch</option>
                        <option value="4">Donnerstag</option>
                        <option value="5">Freitag</option>
                    </select>
                    <label htmlFor="formGroupExampleInput">Stunde:</label>
                    <select id="nextHour" className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>


                    <label htmlFor="formGroupExampleInput">Modul/ Fach:</label>
                    <select id="target" className="form-control">
                        { this.state.modul.map(moduls => <option key={moduls}> { moduls }</option>) }
                    </select>

                    <br />
                    <button className="btn btn-primary btn-sm m-2" onClick={() => this.props.onInsert(document.getElementById("nextHour").value, document.getElementById("nextDay").value, document.getElementById("target").value)}>Add</button>
                    <button className="btn btn-danger  btn-sm m-2" onClick={() => this.props.onClear(document.getElementById("nextHour").value, document.getElementById("nextDay").value)}>Clear</button>	
					
				</form>
            </div>  


 
        </React.Fragment>


         );
    }
}
 
export default FachSelect;