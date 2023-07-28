import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import SkillLabel from "../SkillLabel/SkillLabel";
import OtherProjectsStyle from "./OtherProjectsStyle.css";

function OtherProjects(props) {
  const skills = props.skills;

  return (
    <div className="otherProjectCard">
      <img className="folderImage" src="images/folder.png"></img>
      <SocialButton URL={props.URL2} image={props.image2} />
      <SocialButton URL={props.URL1} image={props.image1} />
      <h1 className="otherProjectTitle">{props.title}</h1>
      <p className="otherProjectBody">{props.description}</p>
      {skills.map((skill) => (
        <SkillLabel skill={skill} className="otherSkillLabel" />
      ))}
    </div>
  );
}

export default OtherProjects;
