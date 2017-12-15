import React from "react";
import './game-form.css'

export default class GameForm extends React.Component {

handleSubmit(e) {
  console.log('Handling Submit');
  e.preventDefault();
  console.log(this.textInput.value);
  this.props.submitForm(this.textInput.value)
}

render() {
  return (
    <form onSubmit={e => this.handleSubmit(e)}>
      <div className="guess">
        <input type="number" min="0" max="100" ref={input => this.textInput = input} id="input-answer" autoComplete="off" placeholder="Enter your Guess" className="input-guess" required/>
      </div>
      <div>
        <button type="submit">Guess</button>
      </div>
    </form>
  );
  }
}
