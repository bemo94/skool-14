import React from 'react';
import './App.css';
import stations_json from './stations.json'

function App() {
  const [chosenQuadrigramme, setChosenQuadrigramme] = useState();

  let stations = stations_json.data

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
