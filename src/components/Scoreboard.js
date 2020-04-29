import React from 'react';

export default function Scoreboard({ correct, wrong }) {
  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrong}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correct}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
