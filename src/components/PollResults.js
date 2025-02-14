import React from 'react';
import TableResults from './TableResults';
import BarResults from './BarResults';

const PollResults = () => {
  return (
    <div className="poll-results">
      <TableResults />
      <BarResults />
    </div>
  );
};

export default PollResults; 