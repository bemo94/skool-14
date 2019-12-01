import React from 'react';
import './Presentation.css';

function Presentation(props) {
  return (
    <div className="Presentation">
      Quadrigamme: { props.station && props.station.quadrigramme }<br />
      Hobbies: { props.station && props.station.reponses.hobbies }<br />
      Fun fact: { props.station && props.station.reponses.funfact }<br />
      Citation: { props.station && props.station.reponses.citation }<br />
      Technos: { props.station && props.station.reponses.technos }<br />
    </div>
  );
}

export default Presentation;
