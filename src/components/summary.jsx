import React from 'react';

function Summary(props) {
  $.getJSON('../../frontend.json', (data) => {
    const { sections } = data;
    let currId = 1;
    let currSection = `section${toString(currId)}`;
    while (sections[currSection] != null) {
      const temp = `<div className="summaryText">
        ${sections[currSection].content}
        </div>`;
      ${'#entire-summary'}.innerHTML += temp;
      currId += 1;
      currSection = `section${toString(currId)}`;
    }
  });
  return (
    <div id="entire-summary">
      Hello
    </div>
  );
}

export default Summary;
