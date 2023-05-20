import React, { useState } from 'react';

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
    <div>
      <input
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

export default SearchPeople;
