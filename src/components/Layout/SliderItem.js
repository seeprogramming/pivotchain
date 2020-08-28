import React from "react";

const SliderItem = (props) => {
  return (
    <React.Fragment>
      <div className="slideTitle">
        <div className="dot"></div>
        <h2>{props.id}</h2>
        <h3>{props.title}</h3>
      </div>
      <div className="sData">
        <h6>{props.data}</h6>
      </div>
      <button>Read More</button>
    </React.Fragment>
  );
};

export default SliderItem;
