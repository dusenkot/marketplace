import React, { useState } from 'react';
import App from '../home/form-send/forms-sends';
import logot from './pp.png'

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
       <div style={styles.middle}>
      <App />
    </div>
 
      <p style={styles.search}><img src = {logot} style = {styles.logot}></img><div style = {styles.div1}>Search</div></p>
      <p>Find your future partner</p>
      <input
        style = {styles.input}
        type="text"
        placeholder="Writte name people"
        value={searchTerm}
        onChange={handleSearch}
      />
     
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
    background: '#4040ff',
    minHeight: '100vh',
    textAlign:"center"
},
div1:{
  marginTop:"0px",
  fontSize:"40px"
},
logot:{
  
  marginTop:"5px",
  height:"120px"
},
search:{
  marginTop:"40px",
  marginLeft:"1%",
  fontSize:"20px",
},

input:{
  textAlign:"center",

  width:"600px",
  height:"30px",
  borderRadius:"5%",

  marginBotton:"100%"
},

};
export default SearchPeople;
