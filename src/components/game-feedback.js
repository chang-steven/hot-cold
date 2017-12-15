import React from 'react';
import './game-feedback.css';

export default function GameFeedback(props) {

  return (
    <div className="GameFeedback">
      <div id="feedback">
        <h2>{props.guessFeedback}</h2>
      </div>
    </div>
  )
}
