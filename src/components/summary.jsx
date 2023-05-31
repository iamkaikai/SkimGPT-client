import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSummary } from '../actions';

function Summary(props) {
  const currentUrl = window.location.href;
  const [numSections, setNumSections] = useState(5); // non-zero initial state
  const [title, setTitle] = useState('');
  const [sections, setSections] = useState([]);
  const [initialCall, setInitialCall] = useState(false);
  const [summarySection, setSummarySection] = useState(null);

  const encodedURL = encodeURIComponent(currentUrl);

  useEffect(() => {
    const firstCall = () => {
      axios('https://skimgpt-mongo.onrender.com/api/summarizers', {
        params: {
          url: encodedURL,
        },
      }).then((res) => {
        console.log(`in summarizer - num sections: ${res.data.general.num_sections}`); // this is entire summarizer btw
        console.log(res);
        setNumSections(res.data.general.num_sections);
        setTitle(res.data.general.title);
        setSections(res.data.sections);
        console.log(`number of sections is now ${numSections}`);
        console.log(sections);
        setInitialCall(true);
        const contentArray = Array(res.data.general.num_sections).fill('<div>Loading<div>');
        setSummarySection(contentArray);
      });
    };
    firstCall();
  }, []);
  // get request

  // const displaySections = () => {
  //   if (summarySection) {
  //     for (const section in sections) {
  //       if (section) {
  //         console.log(section.id);
  //         if (summarySection[section.id - 1] === '<div>Loading<div>') {
  //           summarySection[section.id - 1] = `<div id="section-title">${section.title}</div><div id="section-summary">${section.content}</div>`;
  //         }
  //       }
  //     }
  //   }
  // };

  const continuousCall = () => {
    axios('https://skimgpt-mongo.onrender.com/api/summarizers', {
      params: {
        url: encodedURL,
      },
    }).then((res) => {
      console.log(`current sections: ${res.data.sections}`);
      const { sections2 } = res.data;
      // setSections(res.data.sections);
      // displaySections();
      // for (const section in res.data.sections) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < sections2.length; i++) {
        if (sections2[i]) {
          console.log(`section: ${sections2[i]}`);
          console.log(`section id: ${sections2[i].id}`);
          if (summarySection[sections2[i].id - 1] === '<div>Loading<div>') {
            summarySection[sections2[i].id - 1] = `<div id="section-title">${sections2[i].title}</div><div id="section-summary">${sections2[i].content}</div>`;
          }
        }
      }
    });
  };

  useEffect(() => {
    const getSections = () => {
      // while (sections.length < numSections) {
      //   setTimeout(() => {
      //     continuousCall();
      //     console.log('done a cycle');
      //   }, 2000);
      // }
      const cycle = async () => {
        if (sections.length < numSections) {
          await continuousCall();
          console.log('done a cycle');
          setTimeout(cycle, 5000); // Schedule the next cycle after a delay
        }
      };

      cycle(); // Start the cycle
    };
    getSections();
  }, [initialCall]);

  const displayTitle = () => {
    if (title) {
      return title;
    } else {
      return (
        <title />
      );
    }
  };

  // const currNumSections = 0;
  // // have a response with timeout

  return (
    <div>
      <div id="title" dangerouslySetInnerHTML={{ __html: displayTitle() }} />
      {/* <div id="subinfo">
        {`${} words | 10 mins`}
      </div> */}
      {/* <div id="tags">
        <p>Dijkstra&apos;s algorithm</p>
        <p>A* search</p>
        <p>Implicit graphs</p>
        <p>Shortest-path simulation</p>
      </div> */}

      <div id="content" dangerouslySetInnerHTML={{ __html: summarySection }} />
      {/* <div id="section-title">
Shortest paths
</div>
<div id="section-summary">
BFS works well to find paths with the minimum number of edges, but it is also useful to find shortest-total-distance routes and fastest routes in a network.
</div> */}
    </div>
  );
}
export default Summary;
