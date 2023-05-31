// import React, { useState, useEffect } from 'react';
import React from 'react';

function Summary(props) {
  // console.log(props);
  const { title } = props.generalInfo;
  const { numSections } = props.generalInfo;
  const { overview } = props.generalInfo;

  return (
    <div>
      <h3 className="summary-h3">{title.replace(/<title>|<\/title>/g, '')}</h3>
      <p>{numSections}</p>
      <p className="subtitle">Overview</p>
      <p className="bodytext">{overview.replace(/Title:/, '')}</p>
    </div>
  );
}
export default Summary;
