import React from "react";


const CustomCard = (props) => {


  const cardStyle = {
    display: "flex",
    flexDirection: props.fDirection,
    justifyContent: props.jContent,
    alignItems: 'center',
    height: props.height,
    border:props.border,
    padding: props.padding,
    
  };

  return (
    <div className="customCardWrap" style={cardStyle}>
      {props.children}
    </div>
  );
};

export default CustomCard;
