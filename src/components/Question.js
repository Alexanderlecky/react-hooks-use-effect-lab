import React, { useEffect, useState } from 'react';

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h1>{question.text}</h1>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
