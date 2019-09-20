import React from "react";

const CharacterCard = props => {
  return (

    <div className="character-card">
      <div className="character-name">
        Name: <em>{props.name}</em>
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
