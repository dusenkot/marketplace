import React, { useState } from 'react';
import App from '../home/form-send/forms-sends';
import logot from './pp.png';

const peopleData = [
  { id: 1, name: 'Ivan', age: 25 },
  { id: 2, name: 'Maria', age: 30 },
  { id: 3, name: 'Pitro', age: 35 },
  { id: 4, name: 'Oksana', age: 28 },
  { id: 5, name: 'Andrzej', age: 32 },
];

const SearchPeople = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filterByAge, setFilterByAge] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = peopleData.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleFilterByAge = (event) => {
    const selectedAge = event.target.value;
    setFilterByAge(selectedAge);

    const results = peopleData.filter((person) =>
      selectedAge ? person.age === parseInt(selectedAge) : true
    );
    setSearchResults(results);
  };

  const filteredResults = searchTerm
    ? searchResults.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : searchResults;

  return (
    <div style={styles.body}>
      <div style={styles.middle}>
        <App />
      </div>
      <p style={styles.search}>
        <img src={logot} style={styles.logot} alt="logo" />
        <div style={styles.div1}>Search</div>
      </p>
      <p>Find your future partner</p>
      <div style={styles.filters}>
        <input
          style={styles.input}
          type="text"
          placeholder="Write name of people"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          style={styles.select}
          value={filterByAge}
          onChange={handleFilterByAge}
        >
          <option value="">All ages</option>
          <option value="25">25 years</option>
          <option value="28">28 years</option>
          <option value="30">30 years</option>
          <option value="32">32 years</option>
          <option value="35">35 years</option>
        </select>
      </div>
      {filteredResults.length > 0 ? (
        <ul>
          {filteredResults.map((person) => (
            <li key={person.id}>
              {person.name} - {person.age} years old
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

const styles = {
  body: {
    background: '#4040ff',
    minHeight: '100vh',
    textAlign: 'center',
  },
  div1: {
    marginTop: '0px',
    fontSize: '40px',
  },
  logot: {
    marginTop: '5px',
    height: '120px',
  },
  search: {
    marginTop: '40px',
    marginLeft: '1%',
    fontSize: '20px',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    textAlign: 'center',
    width: '200px',
    height: '30px',
    borderRadius: '5%',
    marginRight: '10px',
  },
  select: {
    width: '150px',
    height: '30px',
    borderRadius: '5%',
  },
};

export default SearchPeople;
