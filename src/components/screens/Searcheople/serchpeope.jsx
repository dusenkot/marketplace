import React, { useState } from 'react';
import App from '../home/form-send/forms-sends';
import logo from './logo.png'
// Маленька база даних з людьми
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const results = peopleData.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    
    <div style={styles.body}>
      <header style={styles.header}>
    <div style={styles.left}>
      <img src={logo} alt="Logo" style={styles.logo} />
    </div>
    <div style={styles.middle}>
      <App />
    </div>
  </header>
      <div style = {styles.div1}>
      <p style={styles.search}>Search</p>
      <input
        style = {styles.input}
        type="text"
        placeholder="Writte name people"
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      <ul>
        {searchResults.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
      </div>
    
  );
};
const styles = {
  body: {
    background: 'linear-gradient(to bottom right, #005c98, #005c98 0%, #003261 0%, #005c98 75%)',
    minHeight: '100vh',
},
serch:{
  marginLeft:"48%",
  fontSize:"20px",
},
div1:{
  textAlign:"center"
},
input:{
  textAlign:"center",

  width:"600px",
  height:"30px",
  borderRadius:"5%",

  marginBotton:"100%"
},
header: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#14FFF7',
  padding: '10px',
  borderRadius: '20px',
},
left: {},
logo: {
  height: '40px',
  width: 'auto',
},
middle: {
  display: 'flex',
  justifyContent: 'center',
},
button: {
  margin: '0 10px',
  padding: '8px 16px',
  backgroundColor: '#541A80',
  color: '#ffffff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
},
};
export default SearchPeople;
