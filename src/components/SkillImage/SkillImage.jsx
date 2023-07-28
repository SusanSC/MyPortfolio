import React from "react";
import SkillImageStyle from "./SkillImageStyle.css";

function SkillImage(props) {
  return <img className="skillImage" src={props.img}></img>;
}

export default SkillImage;
