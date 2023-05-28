import React from 'react';

function Summary(props) {
  // const dispatch = useDispatch();
  // const [isGenerating, setIsGenerating] = useState(false);
  // const [summary, setSummary] = useState({
  //   title: '',
  //   num_sections: '',
  //   overview: '',
  //   result_html: '',
  // });

  // const handleGenerateSummary = () => {
  //   setIsEditing(true);
  //   setSummary({
  //     title: currPost.title,
  //     tags: currPost.tags,
  //     content: currPost.content,
  //     coverUrl: currPost.coverUrl,
  //   });
  // };

  return (
    <div className="empty">
      <div className="empty_title">
        Summary Mode is Currently Turned Off
        {/* {summary.title} */}
      </div>
      <div className="empty_description">
        This feature allows you to quickly grasp the essence of your data. Enable it to see your data in a simplified and more digestible format.
      </div>
      <button className="empty_button" type="button">Turn On</button>
    </div>
  );
}

export default Summary;
