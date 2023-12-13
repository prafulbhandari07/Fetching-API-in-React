import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([])

  const apiUrl = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetchCountry();
  }, [])

  useEffect(() => {
    const filteredItems = countries.filter((country) => country.name.official.toLowerCase().includes(inputText.toLowerCase()))

    setFilteredCountries(filteredItems)
  }, [inputText])


  async function fetchCountry() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    setCountries(data)
    setFilteredCountries(data)
  }

  return (<>
    <div className='container'>
      <Header inputText={inputText} setInputText={setInputText} />
      <div className='card-container'>
        <Card countries={filteredCountries} />
      </div>
    </div>
  </>);
}

export default App;
// img,p tat, explore button api url https://restcountries.com/v3.1/all async function to fetch api,... 