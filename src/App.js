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
    {stations.map(station => { return <p>{station}</p> })}
    </div>
  );
}

export default App;
