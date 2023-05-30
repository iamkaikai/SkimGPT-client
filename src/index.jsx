import React, { useState } from 'react';
import './style.scss';
import { createRoot } from 'react-dom/client';
import SideBar from './components/sidebar';
import Reader from './components/reader';

const [html, setHtml] = useState(null);

const addHtml = (input) => {
  setHtml(input);
};

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

const sidebar = document.createElement('div');
const reader = document.createElement('div');
sidebar.className = 'sidebar';
reader.className = 'reader';

document.body.appendChild(sidebar);
document.body.appendChild(reader);

const comp1 = createRoot(reader);
const comp2 = createRoot(sidebar);

comp1.render(<Reader html={html} />);
comp2.render(<SideBar addHtml={addHtml} />);

body.appendChild(mainContainer);
