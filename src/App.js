import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Header from "./Header";
import GameForm from "./GameForm";
import GamesContainer from "./GamesContainer";
import './App.css';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(response => response.json())
    .then(gameData => {
      setGames(gameData);
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <GamesContainer games={games}/>
      <GameForm />
    </div>
  );
}

export default App;
