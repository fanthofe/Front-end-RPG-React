import { useEffect, useState } from 'react';

export const useAIOpponent = turn => {
  const [aiChoice, setAIChoice] = useState('');

  useEffect(() => {
    if (turn === 1) {
      const options = ['attack', 'magic', 'heal'];
      let random = options[Math.floor(Math.random() * options.length)];
      setAIChoice(random);
    }
    else {
        setAIChoice('');
    }
  }, [turn]);

  return aiChoice;
};