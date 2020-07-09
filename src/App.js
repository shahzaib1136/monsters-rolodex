import React, { useEffect, useState } from "react";
import axios from "axios";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

function App() {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((users) => {
      let { data } = users;
      setMonster(data);
      setFilterMonsters(data);
    });
  }, []);

  useEffect(() => {
    const filteredMonsters = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilterMonsters(filteredMonsters);
  }, [searchField]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        handleChange={(e) => setSearchField(e.target.value)}
        placeholder="search monsters"
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
}

export default App;
