import React from 'react';
import { useRecoilState } from 'recoil';
import { pollState } from '../atoms/pollAtom';

const PollOptions = () => {
  const [poll, setPoll] = useRecoilState(pollState);

  const handleVote = (optionId) => {
    setPoll(prevPoll => ({
      ...prevPoll,
      options: prevPoll.options.map(option =>
        option.id === optionId
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    }));
  };

  return (
    <div className="poll-options">
      {poll.options.map(option => (
        <button
          key={option.id}
          onClick={() => handleVote(option.id)}
          className="vote-button" 
          style={{ backgroundColor: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})` }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default PollOptions; 