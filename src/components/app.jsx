import React from 'react';
import Tools from './tools';

function App(props) {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="two-panel">
        <div className="left-panel">
          <h2>
            col 1
          </h2>
        </div>
        <div className="right-panel">
          <Tools />
        </div>
      </div>
    </div>
  );
}

export default App;
