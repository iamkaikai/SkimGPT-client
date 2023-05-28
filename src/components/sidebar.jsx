/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'split-pane-react/esm/themes/default.css';
import Tools from './tools';

function Sidebar(props) {
  console.log('asdf');
  const [loading, setLoading] = useState('null');
  const currentUrl = window.location.href;
  let response;

  const submit = () => {
    console.log(currentUrl);
    setLoading('start');
  };

  if (loading === 'start') {
    (async () => {
      try {
        console.log(currentUrl);
        console.log('loading summarizer...');
        const data = { url: currentUrl };
        response = await axios.post('https://skimgpt-api.onrender.com/api/summarizer', data, { timeout: 180000 });
        console.log(response);
        setLoading('pending');
      } catch (error) {
        console.error(error);
        setLoading('error');
      }
    })();
  }

  let content = null;

  if (loading === 'null') {
    content = (
      <div id="start_main">
        <h2 className="start_title">Summary Mode<br />Is Currently Turned Off</h2>
        <p className="start_des">This feature allows you to quickly grasp the essence of your data. Enable it to see your data in a simplified and more digestible format.</p>
        <button type="button" onClick={submit}>Turn on</button>
      </div>
    );
  } else if (loading === 'done') {
    content = <p>{response?.data?.general?.overview}</p>;
    // You can also render <Tools /> component here if needed
  } else if (loading === 'error') {
    content = (
      <div className="loadingWrapper">
        <p>something wrong with the request</p>;
      </div>
    );
  } else {
    content = (
      <div className="loadingWrapper">
        <div alt="" id="loading" />
        <p>loading...</p>
      </div>
    );
  }

  return <div className="sidebar">{content}</div>;
}

export default Sidebar;
