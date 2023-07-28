import React from "react";
import SkillImage from "../SkillImage/SkillImage";
import SkillLabel from "../SkillLabel/SkillLabel";
import TrajectoryTabs from "../TrajectoryTabs/TrajectoryTabs";
import AboutStyle from "./AboutStyle.css";

function About(props) {
  const isLight = props.isLight;

  const skillTech = [
    "Typescript",
    "ES6",
    "JavaScript",
    "HTML5",
    "CSS3",
    "JSON",
    "XML",
    "RESTful",
    "React",
    "jQuery",
    "NodeJS",
    "Bootstrap",
    "Express",
  ];
  const skillDB = ["SQL", "Oracle", "MySQL", "MongoDB"];
  const skillTool = [
    "Sublime",
    "VS Code",
    "Atom",
    "Developer Tools",
    "GitBash",
    "Hyper Terminal",
    "Postman",
    "Git",
    "GitBash",
    "GitHub",
    "Agile",
    "Scrum",
  ];

  return (
    <div id="about">
      <h1>About Me</h1>
      <p className="aboutText">
        UI Developer, passionate about Front-end development ♥️. I love creating
        websites that provide a unique and satisfying user experience. You can
        see some of my projects in the projects section. I am a self-taught
        person, responsible and committed to my work. I am constantly learning
        new technologies and tools to improve my skills. If you have any
        questions or comments, feel free to contact me.
      </p>
      <h1>Skills</h1>
      <div className="skills">
        <div className="skillContainer">
          <SkillImage img="images/code.png" />
          <div className="skillLabelContainer">
            {skillTech.map((skill) => (
              <SkillLabel skill={skill} />
            ))}
          </div>
        </div>
        <div className="skillContainer">
          <SkillImage img="images/server-storage.png" />
          <div className="skillLabelContainer">
            {skillDB.map((skill) => (
              <SkillLabel skill={skill} />
            ))}
          </div>
        </div>
        <div className="skillContainer">
          <SkillImage img="images/wrench.png" />
          <div className="skillLabelContainer">
            {skillTool.map((skill) => (
              <SkillLabel skill={skill} />
            ))}
          </div>
        </div>
      </div>
      <h1>My Trajectory</h1>
      <div className="trajectory">
        <TrajectoryTabs isLight={isLight} />
      </div>
    </div>
  );
}

export default About;
