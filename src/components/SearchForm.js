import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from 'axios';


function SearchForm({ props, values, status }) {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (status) {
      status && setCharacters(characters => [...characters, status]);
    }
  }, [status]);

  return (
    <section className="search-form">
      <Form>
        <label>Search Characters: </label>
        <Field type="text" name="search" placeholder="Search... " />
      </Form>

      {characters.map(character => (
        <ul key={character.id}>
          <li>Name: {character.name}</li>
          <li>Status: {character.status}</li>
          <li>Species: {character.species}</li>
          <li>Type: {character.type}</li>
        </ul>
      ))}
    </section>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({ name, status, species, type }) {
    return {
      name: name || "",
      status: status || "",
      species: species || "",
      type: type || ""

    };
  },


  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(error => console.log(error.res));
  }

})(SearchForm);


export default FormikSearchForm;
