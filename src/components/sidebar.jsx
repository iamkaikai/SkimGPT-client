/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ClassSharp } from '@mui/icons-material';
import Tools from './tools';

function Sidebar(props) {
  const [loading, setLoading] = useState('null');
  const [response, setResponse] = useState(null);
  const [open, setOpen] = useState(true);
  const [parsedHtml, setParsedHtml] = useState(null);

  const currentUrl = window.location.href;
  const maxAttempts = 3;
  const sidebarRef = useRef();

  // closing the extension when clicking outside
  // source: https://www.youtube.com/watch?v=HfZ7pdhS43s
  useEffect(() => {
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        // setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  });

  useEffect(() => {
    console.log(parsedHtml);
    if (parsedHtml) {
      props.addHtml(parsedHtml);
    }
  }, [parsedHtml]);

  // closing button
  const handleClose = () => {
    setOpen(!open);
  };

  const encodedURL = encodeURIComponent(currentUrl);
  // get request
  const callGet = () => {
    console.log('get method triggered');
    axios('https://skimgpt-mongo.onrender.com/api/summarizers', {
      params: {
        url: encodedURL,
      },
    }).then((res) => {
      console.log(res.data); // this is entire summarizer btw
      setParsedHtml(res.data.general.result_html);
      props.addHtml(res.data);
    });
  };

  // turn on summarizer
  const submit = (attempt = 1) => {
    setLoading('start');
    axios.post('https://skimgpt-mongo.onrender.com/api/summarizers', {
      data: {
        url: currentUrl,
      },
    })
      .then((res) => {
        callGet();
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
