import React, { useState } from 'react';
import App from '../home/form-send/forms-sends';
import Footer from '../home/form-send/footer';
import backgroundImage from './hueta6_2.jpg';

const peopleData = [
  { id: 1, name: 'Ivan', age: 3 },
  { id: 2, name: 'Maria', age: 5 },
  { id: 3, name: 'Pitro', age: 20 },
  { id: 4, name: 'Oksana', age: 7 },
  { id: 5, name: 'Andrzej', age: 1 },
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
    <div style={{ backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height:'800px',
    color:'white',}}>
      <div style={styles.middle}>
        <App />
      </div>
      <p style={styles.search}>
        
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
          <option value="">All work experience</option>
          <option value="3">3 years  work experience</option>
          <option value="5">5 years  work experience</option>
          <option value="20">20 years work experience</option>
          <option value="7"> 7 years  work experience</option>
          <option value="1"> 1 years  work experience</option>
        </select>
      </div>
      {filteredResults.length > 0 ? (
        <ul style={styles.ul}>
          {filteredResults.map((person) => (
            <li key={person.id}>
              {person.name} - {person.age} work experience
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
  ul: {
    marginLeft: '45%',
  },
};

export default SearchPeople;
