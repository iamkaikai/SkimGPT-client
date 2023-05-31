// import React, { useState, useEffect } from 'react';
import React from 'react';

function section(props) {
  console.log(props);
  const { title } = props.generalInfo;
  const { numSections } = props.generalInfo;
  const { overview } = props.generalInfo;

  return (
    <div>
      <h3 className="summary-h3">{title.replace(/<title>|<\/title>/g, '')}</h3>
      <p>{numSections}</p>
      <p>{overview.replace(/Title:/, '')}</p>
    </div>
  );
}
export default section;
