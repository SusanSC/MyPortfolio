import React from "react";
import SocialButtonStyle from "./SocialButtonStyle.css";

function SocialButton(props) {
  return (
    <a href={props.URL} target="_blank">
      <img className="socialIcon" src={props.image} />
    </a>
  );
}

export default SocialButton;
