import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
          let result = response.data.results;
          console.log(result);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();


  }, []);

  return (
    <section className="character-list">

      {characters.map(character => {
        return (

          <div className="save-wrapper" key={character.id}>

            <Link to={`/characters/${character.id}`} className="link">
              <CharacterCard
                key={character.id}
                image={character.image}
                name={character.name}
                gender={character.gender}
                status={character.status}
                species={character.species}
                type={character.type}

              />
            </Link>
          </div>
        )
      })}

    </section>
  );
}
