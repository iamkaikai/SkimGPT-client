import React, { useState, useEffect } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import Tools from './tools';

function App(props) {
  const [sizes, setSizes] = useState(['auto', '500px']);

  useEffect(() => {
    const handleResize = () => {
      const rightPane = document.querySelector('.right-panel');
      if (rightPane.offsetWidth < 500) {
        setSizes(['auto', '500px']);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app-container">
      <h1 className="header">Skim<span>GPT</span></h1>
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize={100}>
          <div className="left-panel">
            <h2>col 1</h2>
          </div>
        </Pane>
        <Pane minSize={500}>
          <div className="right-panel">
            <Tools />
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
}

export default App;
