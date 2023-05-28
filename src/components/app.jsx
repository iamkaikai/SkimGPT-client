import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
// import Tools from './tools';
import Empty from './empty';

function App(props) {
  const [sizes, setSizes] = useState(['70%', 'auto']);

  return (
    <div className="app-container">
      <h1 className="header">Skim<span>GPT</span></h1>
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize="20%" maxSize="80%">
          <div className="left-panel">
            <h2>col 1</h2>
          </div>
        </Pane>
        <div className="right-panel">
          <Empty />
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
