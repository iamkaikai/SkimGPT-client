/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
// import SplitPane, { Pane } from 'split-pane-react';
// import 'split-pane-react/esm/themes/default.css';
import CloseIcon from '@mui/icons-material/Close';
import Tools from './tools';

function Sidebar(props) {
  const [loading, setLoading] = useState('null');
  const [response, setResponse] = useState(null);
  const [open, setOpen] = useState(true);
  const currentUrl = window.location.href;
  const maxAttempts = 3;
  const sidebarRef = useRef();
  console.log(open);

  // closing the extension when clicking outside
  // source: https://www.youtube.com/watch?v=HfZ7pdhS43s
  useEffect(() => {
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  });

  // closing button
  const handleClose = () => {
    setOpen(!open);
  };

  // turn on summarizer
  const submit = (attempt = 1) => {
    setLoading('start');

    const data = { url: currentUrl };
    axios.post('https://skimgpt-api.onrender.com/api/summarizer', data, { timeout: 200000 })
      .then((res) => {
        setLoading('done');
        setResponse(res);
      })
      .catch((error) => {
        if (attempt < maxAttempts) {
          submit(attempt + 1);
        } else {
          setLoading('error');
        }
      });
  };

  // display content
  let content = null;

  if (loading === 'null') {
    content = (
      <div id="start_main">
        <h2 className="start_title">Summary Mode<br />Is Currently Turned Off</h2>
        <p className="start_des">This feature allows you to quickly grasp the essence of your data. Enable it to see your data in a simplified and more digestible format.</p>
        <button type="button" className="cta-btn" onClick={submit}>Turn on</button>
      </div>
    );
  } else if (loading === 'done') {
    // You can also render <Tools /> component here if needed
    content = <Tools />;
    // content = <p>{response?.data?.general?.overview}</p>;
  } else if (loading === 'error') {
    content = (
      <div className="loadingWrapper">
        <p>something wrong with the request</p>
      </div>
    );
  } else {
    content = (
      <div className="loadingWrapper">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className={`app-container${open ? '-active' : '-inactive'}`} ref={sidebarRef}>
      <div className="header">
        <div>
          Skim<span>GPT</span>
        </div>
        <CloseIcon id="closeicon" onClick={handleClose} open={open} />
      </div>
      <div className="sidebar">
        {content}
      </div>
    </div>
  );
}

export default Sidebar;
