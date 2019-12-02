import React, { useState } from 'react';
import Presentation from './Presentation';
import './App.css';
import stations_json from './stations.json'

function App() {
  const [chosenQuadrigramme, setChosenQuadrigramme] = useState();

  let stations = stations_json.data

  return (
    <div className="App">
      <h1>C'est la grève ? Prenez la 14 !</h1>
      <div id="metro-line">
        <div id="stations">
            {stations.map(station => { return <span className="station-name" key={station.quadrigramme} onClick={() => { setChosenQuadrigramme(station.quadrigramme)} }>{station.name}</span> })}
        </div>
        <div id="line"></div>
        <div className="xl-circle"></div>
        <div className="s-circle"></div>
      </div>

      <h2>Cliquez sur le nom des stations pour découvrir les détails</h2>

      <div id="presentation-container">
        {chosenQuadrigramme && <Presentation station={stations.find(station => station.quadrigramme === chosenQuadrigramme)} />}
      </div>
    </div>
  );
}

export default App;
