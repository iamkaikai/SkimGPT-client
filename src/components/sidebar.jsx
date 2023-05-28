/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import 'split-pane-react/esm/themes/default.css';
import Tools from './tools';

function Sidebar(props) {
  const [start, setStart] = useState(false);
  const currentUrl = window.location.href;

  const submit = () => {
    console.log(currentUrl);
    setStart(true);
  };

  if (start === true) {
    const response = async () => {
      await axios.post(currentUrl, { URL: currentUrl });
    };
  }

  return (
    !start ? (
      <div id="start_main">
        <h2 className="start_title">Summary Mode<br />Is Currently Turned Off</h2>
        <p className="start_des">This feature allows you to quickly grasp the essence of your data. Enable it to see your data in a simplified and more digestible format.</p>
        <button type="button" onClick={submit}>Turn on</button>
      </div>
    ) : (
      <Tools />
    )
  );
}

export default Sidebar;
