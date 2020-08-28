import React from "react";

const TitleWithUnderline = (props) => {

const myStyle={
  fontWeight: props.fWeight ? props.fWeight : 600
}

  return (
    <div className="underlineTitleWrap">
      <h4 style={myStyle}>{props.title}</h4>
    </div>
  );
};

export default TitleWithUnderline;
