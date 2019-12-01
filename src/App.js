import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let stations = [
    { name: "Saint O'Lazare",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "MADEleine",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "P'YAMAdes",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "ChâTOPI",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "Gare d'ADZO",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "BEMOrcy",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "Cour St ZEMAlion",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "BNFMI",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    },
    { name: "VAALympiade",
      reponses: [
        {
          quadrigramme: "ADZO",
          hobbies: "",
          mission: "",
          funfact: "",
          citation: "",
          technos: "",
        }
      ]
    }
  ]


  return (
    <div className="App">
      <h1>C'est la grève ? Prenez la 14 !</h1>
      <div id="metro-line">
        <div id="line"></div>
        <div class="xl-circle"></div>
        <div class="s-circle"></div>
        <div id="stations">
        {stations.map(station => { return <div class="station-name">{station.name}</div> })}
        </div>
      </div>

      <div id="presentation">
      </div>
    </div>
  );
}

export default App;
