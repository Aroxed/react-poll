import React from 'react';
import { useRecoilState } from 'recoil';
import { pollState } from '../atoms/pollAtom';
import PollOptions from './PollOptions';
import PollResults from './PollResults';

const Poll = () => {
  const [poll] = useRecoilState(pollState);

  return (
    <div className="poll-container">
      <h2>{poll.question}</h2>
      <PollOptions />
      <PollResults />
    </div>
  );
};

export default Poll; 