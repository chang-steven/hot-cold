import React from 'react';
import './game-guess.css'
import PreviousGuess from './game-previous-guess'

export default function GameGuess(props) {
  return (
    <div>
      <div>
        <p>Guess Counter: <span>{props.numberOfGuesses}</span></p>
      </div>
      <div className="guess-list">
        <PreviousGuess previousGuesses={props.previousGuesses}/>
      </div>
    </div>
  )
}
