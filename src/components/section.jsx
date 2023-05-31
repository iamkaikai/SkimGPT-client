// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Remarkable } from 'remarkable';

function section(props) {
  // console.log(props.section);
  const { title } = props.section;
  const { overview } = props.section;
  // const { content } = props.section;

  const md = new Remarkable();

  return (
    <div id="section-container">
      <p className="subtitle" dangerouslySetInnerHTML={{ __html: md.render(title) }} />
      <p dangerouslySetInnerHTML={{ __html: md.render(overview) }} />
      {/* <p dangerouslySetInnerHTML={{ __html: md.render(content) }} /> */}
    </div>
  );
}
export default section;
