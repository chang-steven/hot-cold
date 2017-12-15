import React from 'react';
import Nav from './components/container';
import Board from './components/board';
import GameContainer from './components/game-container';

import './App.css';

export default function Container() {
  return (
    <div className="container">
      <Nav />
      <Board />
      <GameContainer />
    </div>
  );
}
