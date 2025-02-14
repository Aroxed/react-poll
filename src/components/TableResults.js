import React from 'react';
import { useRecoilValue } from 'recoil';
import { pollState } from '../atoms/pollAtom';

const TableResults = () => {
  const poll = useRecoilValue(pollState);
  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="table-results">
      <table className="results-table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {poll.options.map(option => (
            <tr key={option.id}>
              <td>{option.text}</td>
              <td>{option.votes}</td>
              <td>{totalVotes === 0 ? '0%' : `${((option.votes / totalVotes) * 100).toFixed(1)}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableResults; 