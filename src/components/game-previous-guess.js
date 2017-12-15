import React from 'react';
import "./game-previous-guess.css";


export default function PreviousGuess(props) {
let previousGuesses = props.previousGuesses.map((guess, index) => (
  <span key={index} >
    {guess}
  </span>
))

  return (
    <div>
      <div className="guess-list">
        {previousGuesses}
      </div>
    </div>
  )
}
