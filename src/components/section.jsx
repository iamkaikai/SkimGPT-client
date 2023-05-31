// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Remarkable } from 'remarkable';

function section(props) {
  console.log(props.section);
  const { title } = props.section;
  const { overview } = props.section;
  const { content } = props.section;

  const md = new Remarkable();

  console.log('in section.jsx');

  return (
    <div id="section-container">
      <p dangerouslySetInnerHTML={{ __html: md.render(title) }} />
      <p dangerouslySetInnerHTML={{ __html: md.render(overview) }} />
      <p dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
}
export default section;
