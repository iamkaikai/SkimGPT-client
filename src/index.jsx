import React from 'react';
import './style.scss';
import { createRoot } from 'react-dom/client';
import SideBar from './components/sidebar';

let done = false;

// Get a reference to the body element
const body = document.getElementsByTagName('body')[0];

// Create a new container div
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
mainContainer.style.width = '75vw';

// Move all the existing content into the container
while (body.firstChild) {
  mainContainer.appendChild(body.firstChild);
}

// Append the container to the body
body.appendChild(mainContainer);
done = true;

if (done) {
  const sidebar = document.createElement('div');
  document.body.appendChild(sidebar);
  const root = createRoot(sidebar);
  root.render(<SideBar />);
}
