import React from 'react';
import './App.css';

function App() {
  let stations = [
    { name: "Saint O'Lazare",
      reponses: [
        {
          quadrigramme: "SOL",
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
          quadrigramme: "MADE",
          hobbies: "Avoir le style de Rafaël Nadal sans le talent",
          mission: "Distribuer des applications sur vos mobiles",
          funfact: "Je suis la seule personne à aimer les capsules nespresso vanilla",
          citation: "\"Je lis plein de livres, après les gens il me croivent ou ils me croivent pas\" - Steevy Boulay",
          technos: "Rails, React",
        }
      ]
    },
    { name: "P'YAMAdes",
      reponses: [
        {
          quadrigramme: "YAMA",
          hobbies: "",
          mission: "Je maintiens Twig sur les rails",
          funfact: "",
          citation: "\"Tomorrow is a magic place where 99% of all human creativity, motivation and goals are achived\"",
          technos: "React, Rails, Javascript",
        }
      ]
    },
    { name: "ChâTOPI",
      reponses: [
        {
          quadrigramme: "TOPI",
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
          hobbies: "Déguiser mon canard OCTO avec de la patafix",
          mission: "",
          funfact: "Je ne suis encore jamais allé au K1ZE !",
          citation: "\"Avec l’application OCTO AR, les publications OCTO prennent du relief !\" - VGU",
          technos: "Kotlin, Ruby",
        }
      ]
    },
    { name: "BEMOrcy",
      reponses: [
        {
          quadrigramme: "BEMO",
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
          quadrigramme: "ZEMA",
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
          quadrigramme: "FMI",
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
          quadrigramme: "VAAL",
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
        Texte de présentation
      </div>
    </div>
  );
}

export default App;
