import React from 'react';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
//
export type Countries = {
  "name": string,
  "capital": string,
  "subregion": string,
  "region": string,
  "population": number,
  "demonym": string,
}
function App() {

  const [countries, setCountries] = useState<Countries[]>([]);
  useEffect(() => {
    const url = 'http://localhost:3001/countries'
    axios.get(url).then((response) => {
      setCountries(response.data)
    })
    // use empty dependency arr execute once the page load
  }, []);

  // If length property exists map countries
  // If length doesn't exist render the p tag with Loading...
  return countries.length ? (countries.map((countries) => <p>{countries.name}</p>)) : (<p>Loading...</p>)
}

export default App;
