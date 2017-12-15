import React from 'react';
import './game-container.css';

import GameForm from './game-form';
import GameFeedback from './game-feedback';
import GameGuess from './game-guess';

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfGuesses: 0,
      previousGuesses: [],
      correctNumber: Math.floor(Math.random() * 100 + 1),
      guessFeedback: 'Take a Guess!'
    }

    console.log('Set the number to: ' + this.state.correctNumber);
  }

processInput(input) {

  console.log('Processing Input');
  const correct = "You're Right!!"
  const hot = "You're right there";
  const warm = "You're getting closer";
  const cold = "you're pretty far";

  let guessFeedback;
    if (this.state.correctNumber == input) {
      guessFeedback = correct;
    }

    else if ((Math.abs(this.state.correctNumber - input)) <= 10) {
      guessFeedback = hot;
      }

    else if ((Math.abs(this.state.correctNumber - input)) <= 15) {
      guessFeedback = warm;
      }

    else {
      guessFeedback = cold;
      }

  console.log(guessFeedback);
  let guessCount = this.state.numberOfGuesses;
  guessCount++
  let previousGuesses = this.state.previousGuesses.slice();
  console.log('these are the previous guesses ' + previousGuesses);
  previousGuesses.push(input);
  this.setState({ previousGuesses: previousGuesses,
                  guessFeedback: guessFeedback,
                  numberOfGuesses: guessCount});
}

  render() {
    const correctNumber = this.state.correctNumber;
    const numberOfGuesses = this.state.numberOfGuesses;
    const guessFeedback = this.state.guessFeedback;
    const previousGuesses = this.state.previousGuesses;

    return (
      <section className="game">
        <GameFeedback guessFeedback={guessFeedback}/>
        <GameForm submitForm={this.processInput.bind(this)}
                  correctNumber={correctNumber} />
        <GameGuess numberOfGuesses={numberOfGuesses}
                   previousGuesses={previousGuesses} />
      </section>
    );
  }
}
