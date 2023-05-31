import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/sidebar';
import Reader from './components/reader';
import './style.scss';

// App component
function App() {
  const [html, setHtml] = useState(null);

  const addHtml = (input) => {
    setHtml(input);
  };

  useEffect(() => {
    if (html) {
      setHtml(html);
    }
  }, [html]);

  return (
    <div className="all">
      <SideBar className="sidebar" addHtml={addHtml} />
      <Reader className="reader" html={html} />
    </div>
  );
}

// Get a reference to the body element
// Create a new container div
const body = document.getElementsByTagName('body')[0];
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
mainContainer.style.width = '75vw';

// Move all the existing content into the container
while (body.firstChild) {
  mainContainer.appendChild(body.firstChild);
}

ReactDOM.render(<App />, body);

const all = document.getElementsByClassName('reader-content')[0];
all.appendChild(mainContainer);
