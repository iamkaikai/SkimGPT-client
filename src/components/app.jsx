import React, { useState } from 'react';
import SplitPane from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import Tools from './tools';

function App(props) {
  const [sizes, setSizes] = useState(['70%', 'auto']);

  return (
    <div style={{ height: 500 }}>
      <h1>Hello World</h1>
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
      >
        <div className="left-panel">
          <h2>col 1</h2>
        </div>
        <div className="right-panel">
          <Tools />
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
