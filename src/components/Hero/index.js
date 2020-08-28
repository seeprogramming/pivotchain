import React from "react";
import "./hero.css";

const Hero = () => {
 
  return (
    <React.Fragment>
        <div className="videoWrap">
            <div className="videoOverlay"></div>
      <video id="background-video" loop autoPlay>
        <source
          src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4"
          type="video/mp4"
        />
        <source
          src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4"
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>
      </div>
    </React.Fragment>
  );
};

export default Hero;
