import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let stations = [
    "Saint O'Lazare",
"MADEleine",
"P'YAMAdes",
"ChâTOPI",
"Gare d'ADZO",
"BEMOrcy",
"Cour St ZEMAlion",
"BNFMI",
"VAALympiade"]


  return (
    <div className="App">
      <h1>C'est la grève ? Prenez la 14 !</h1>
      <div id="metro-line">
        <div id="line"></div>
        <div class="xl-circle"></div>
        <div class="s-circle"></div>
        <div id="stations">
        {stations.map(station => { return <div class="station-name">{station}</div> })}
        </div>
      </div>

      <div id="presentation">
      </div>
    </div>
  );
}

export default App;
