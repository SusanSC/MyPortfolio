import React from "react";
import SkillLabel from "../SkillLabel/SkillLabel";
import SocialButton from "../SocialButton/SocialButton";
import ProjectCardStyle from "./ProjectCardStyle.css";

function ProjectCard(props) {
  const skills = props.skills;
  const isLight = props.isLight;

  return (
    <div className="projectContainer">
      <div className="projectTextContainer">
        <h1 className="projectTitle">{props.title}</h1>
        <div className="projectDescription" title={isLight ? "light" : "dark"}>
          {props.description}
        </div>
        <div className="projectSkills">
          {skills.map((skill) => (
            <SkillLabel skill={skill} />
          ))}
        </div>
        <div className="projectLinks">
          <SocialButton URL={props.URL1} image={props.image1} />
          <SocialButton URL={props.URL2} image={props.image2} />
        </div>
      </div>
      <div className="screenshotContainer">
        <img className="screenshot" src={props.screenshot}></img>
      </div>
    </div>
  );
}

export default ProjectCard;
