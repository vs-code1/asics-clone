import { useState } from "react";
import { scluptureList } from "./data.js";

function Sclupture() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () => {
    index < scluptureList.length ? setIndex(index + 1) : setIndex(index);
    console.log(index);
  };

  const handleMoreClick = () => setShowMore(!showMore);
  let sclupture = scluptureList[index];

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <span className="sl-name">{sclupture.name} </span>
        by {sclupture.artist}
      </h2>
      <h3>
        ({index + 1} of {scluptureList.length})
      </h3>
      <img src={sclupture.url} alt={sclupture.alt} />
      <button onClick={handleMoreClick}>
        {showMore ? "hide" : "show"} detail
      </button>
      {showMore && <p>{sclupture.description}</p>}
    </div>
  );
}

export default Sclupture;
