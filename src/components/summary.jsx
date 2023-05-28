import React from 'react';

function Summary(props) {
  // const [summary, setSummary] = useState({
  //   title: '',
  //   num_sections: '',
  //   overview: '',
  //   result_html: '',
  // });

  // const [section, setSection] = useState({
  //   id: '',
  //   length: '',
  //   title: '',
  //   overview: '',
  //   content: '',
  // });

  return (
    <div>
      <div id="title">
        CS 10 | Problem solving
        {/* {summary.title} */}
      </div>
      <div id="subinfo">
        25 key-points | 540 words | 10 mins
      </div>
      <div id="tags">
        <p>Dijkstra&apos;s algorithm</p>
        <p>A* search</p>
        <p>Implicit graphs</p>
        <p>Shortest-path simulation</p>
      </div>

      <div>
        <div id="section-title">
          Shortest paths
          {/* {section.title} */}
        </div>
        <div id="section-content">
          BFS works well to find paths with the minimum number of edges, but it is also useful to find shortest-total-distance routes and fastest routes in a network.
          {/* {section.content} */}
        </div>
      </div>

    </div>
  );
}

export default Summary;
