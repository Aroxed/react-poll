import React from 'react';
import { useRecoilValue } from 'recoil';
import { pollState } from '../atoms/pollAtom';

const BarResults = () => {
  const poll = useRecoilValue(pollState);
  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="bar-results">
      <div className="bar-chart">
        {poll.options.map(option => (
          <div key={option.id} className="bar-container">
            <div className="bar-label">{option.text}</div>
            <div 
              className="bar"
              style={{
                width: totalVotes === 0 ? '0%' : `${(option.votes / totalVotes) * 100}%`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarResults; 