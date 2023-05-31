import React, { useState } from 'react';
import Toggle from 'react-toggle';

export default function reader(props) {
  const [mode, setMode] = useState(false);
  const modeChange = (event) => {
    setMode(event.target.checked);
  };

  return (
    <div className="reader-container">
      <div className="reader-nav">
        <span className="toggle-des">Reader Mode</span>
        <Toggle
          id="cheese-status"
          defaultChecked={mode}
          onChange={modeChange}
        />
      </div>
    </div>
  );
}
