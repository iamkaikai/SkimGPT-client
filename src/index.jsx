import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { createRoot } from 'react-dom/client';
import SideBar from './components/sidebar';

let done = false;

// Get a reference to the body element
const body = document.getElementsByTagName('body')[0];

// Create a new container div
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
mainContainer.style.width = '75vw';

// Create a new rvtoggle div for reader view
const rvtoggle = document.createElement('div');
rvtoggle.className = 'rvtoggle';
rvtoggle.style.width = '75vw';
rvtoggle.style.height = '50px';
rvtoggle.style.backgroundColor = 'white';
rvtoggle.style.display = 'flex';
rvtoggle.style.justifyContent = 'flex-end';
rvtoggle.style.alignItems = 'center';
rvtoggle.style.boxShadow = '0px 3px 10px 1px #dfdfdf'; // Add shadow to the bottom

// Create a new div to contain the description text
const descriptionContainer = document.createElement('div');
descriptionContainer.textContent = 'Reader View';
descriptionContainer.style.marginRight = '10px';

// Append the description container to the rvtoggle
rvtoggle.appendChild(descriptionContainer);

// Create a new div to contain the toggle
const toggleContainer = document.createElement('div');
toggleContainer.style.marginRight = '75px';

// Append the toggle container to the rvtoggle
rvtoggle.appendChild(toggleContainer);

// Render the Toggle component into the container
ReactDOM.render(
  <Toggle
    className="toggle"
    id="toggle"
    icons={false}
  />,
  toggleContainer,
);

// Append the rvtoggle to the mainContainer
mainContainer.appendChild(rvtoggle);

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
