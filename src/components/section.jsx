// import React, { useState, useEffect } from 'react';
import React from 'react';

function section(props) {
  // console.log(props.section);
  const { title } = props.section;
  const { overview } = props.section;
  const { content } = props.section;

  return (
    <div id="section-container">
      {/* <div>loading...</div> */}
      <p className="subtitle">{title}</p>
      <p>{overview}</p>
      <p>{content}</p>
    </div>
  );
}
export default section;
