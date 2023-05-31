// import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary } from '../actions';

function Summary(props) {
  const dispatch = useDispatch();
  const all = useSelector((state) => (state.summary.all));

  dispatch(fetchSummary());

  // const [localTitle, setLocalTitle] = useState('hi');
  // console.log(localTitle);

  // const getData = async () => {
  //   const data = { url: currentUrl };
  //   const response = await axios.get('https://skimgpt-api.onrender.com/api/summarizers', data);
  //   console.log(`response: ${response}`);
  //   const numSections = response.data.num_sections;
  //   console.log(numSections);
  //   setLocalTitle(response.data.title);

  //   return response.data;
  // };

  // const options = {
  //   method: 'GET',
  //   url: 'https://skimgpt-mongo.onrender.com/api/summarizers',
  //   headers: { 'Content-Type': 'application/json' },
  //   data: { url: currentUrl },
  // };

  // // function callGet() {
  // axios.request(options).then((response) => {
  //   // console.log(response.data.general.overview);
  //   if (response != null) {
  //     setLocalTitle(response.data.general.title);
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });
  // // }

  // callGet();
  // axios.request(options).then((response) => {
  //   console.log(response);
  // }).catch((error) => {
  //   console.error(error);
  // });

  // const currNumSections = 0;
  // // have a response with timeout
  // const contentArray = Array(numSections).fill('Loading');
  // const [section, setSection] = useState(contentArray);

  return (
    <div>
      <div id="title">
        {all.general.title}
      </div>
      {/* <div id="subinfo">
        {`${} words | 10 mins`}
      </div> */}
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
        <div id="section-summary">
          BFS works well to find paths with the minimum number of edges, but it is also useful to find shortest-total-distance routes and fastest routes in a network.
          {/* {section.content} */}
        </div>
      </div>

    </div>
  );
}

export default Summary;
