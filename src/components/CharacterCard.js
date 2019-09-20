import React from "react";

const CharacterCard = props => {
  return (

    <div className="character-card">
      <div className="character-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="character-name">
        Name: <em>{props.name}</em>
      </div>
      <div className="character-gender">
        Gender: <strong>{props.gender}</strong>
      </div>
      <div className="character-status">
        Status: <em>{props.status}</em>
      </div>
      <div className="character-species">
        Species: <strong>{props.species}</strong>
      </div>
      <div className="character-type">
        Type: <strong>{props.type}</strong>
      </div>

    </div>
  )
}


export default CharacterCard;
