import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters-page" component={CharacterList} />
      <Route exact path="/characters-page" render={props => (<CharacterList {...props} />)}
      />
    </main>


  );
}
