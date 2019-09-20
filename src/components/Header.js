import React from "react";
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="ui centered">
      <div className="welcome-page-link">
        <Link to="/">Welcome Page</Link>
      </div>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
        <SearchForm />
      </div>
    </header>
  );
}
