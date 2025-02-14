import React from 'react';
import RecoilizeDebugger from 'recoilize';
import { RecoilRoot } from 'recoil';
import Poll from './components/Poll';
import './styles/Poll.css';

function App() {
  return (
    <RecoilRoot>
      <RecoilizeDebugger />
      <div className="App"> 
        <Poll />
      </div>
    </RecoilRoot>
  );
}

export default App; 