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

  const [countries, setCountries] = useState<Countries[] | null>();
  useEffect(() => {
    const url = 'http://localhost:3001/countries'
    axios.get(url).then((response) => {
      setCountries(response.data)
    })
    // use empty dependency arr execute once the page load
  }, []);
  return <div className="App">{countries ? countries.map((countries) => {
    return <p>{countries.name}</p> }) : null}</div>
}

export default App;