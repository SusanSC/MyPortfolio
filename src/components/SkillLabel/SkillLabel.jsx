import React from "react";
import SkillLabelStyle from "./SkillLabelStyle.css";

function SkillLabel(props) {
  return (
    <div className="skillLabel">
      <span>{props.skill}</span>
    </div>
  );
}

export default SkillLabel;
