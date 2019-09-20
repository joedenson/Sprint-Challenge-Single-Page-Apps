import React from "react";


export default function WelcomePage(props) {
  const goToCharacterList = event => {
    event.preventDefault();
    props.history.push("/characters-page");
  };

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <button onClick={goToCharacterList} className="character-list-btn">
          Characters Page
      </button>
      </header>
    </section>
  );
}
