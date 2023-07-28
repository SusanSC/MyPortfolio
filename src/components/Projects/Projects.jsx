import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsStyle from "./ProjectsStyle.css";
import OtherProjects from "../OtherProjects/OtherProjects";

function Projects(props) {
  const isLight = props.isLight;
  const blogSkills = ["JavaScript", "EJS Templates", "Express", "MongoDB"];
  const toDoListSkills = ["JavaScript", "EJS Templates", "Express", "Mongoose"];
  const newsletterSkills = ["JavaScript", "Mailchimp API", "Express"];
  const keeperSkills = ["JavaScript", "React", "React Hook", "Material UI"];

  const simonSaysSkills = ["JavaScript", "CSS", "jQuery"];
  const drumKitSkills = ["JavaScript", "CSS", "HTML"];
  const tinDogSkills = ["Bootstrap", "CSS", "HTML"];
  const secretsSkills = ["Express", "MongoDB", "PassportJS"];

  return (
    <div id="projects">
      <h1>My Projects</h1>
      <ProjectCard
        title="Blog Website"
        description="A blog that uses Express and EJS templates to render elements. It has a NoSQL database created with MongoDB in which the articles are stored."
        skills={blogSkills}
        URL1="https://github.com/SusanSC/BlogWebsite"
        URL2="https://blogwebsite-qnou.onrender.com/"
        image1="images/github.png"
        image2="images/globe.png"
        screenshot="images/BlogWebsite.png"
        isLight={isLight}
      ></ProjectCard>
      <ProjectCard
        title="To Do List"
        description="Allows the user to create custom task lists and add/delete items in them, using Express, Mongoose and EJS templates."
        skills={toDoListSkills}
        URL1="https://github.com/SusanSC/todoList"
        URL2="https://mytodolist-ssc.onrender.com/"
        image1="images/github.png"
        image2="images/globe.png"
        screenshot="images/ToDoList.png"
        isLight={isLight}
      ></ProjectCard>
      <ProjectCard
        title="Newsletter"
        description="A web application that uses Express and Mailchimp API, in which the user can register with their credentials to receive the newsletter."
        skills={newsletterSkills}
        URL1="https://github.com/SusanSC/NewsletterApp"
        URL2="https://newsletter-079b.onrender.com/"
        image1="images/github.png"
        image2="images/globe.png"
        screenshot="images/Newsletter.png"
        isLight={isLight}
      ></ProjectCard>
      <ProjectCard
        title="Keeper"
        description="Web application that allows the user to organize their personal information through the notes file (similar to the classic post-it), created using React."
        skills={keeperSkills}
        URL1="https://github.com/SusanSC/Keeper"
        URL2="https://keeperapp-1sc3.onrender.com/"
        image1="images/github.png"
        image2="images/globe.png"
        screenshot="images/Keeper.png"
        isLight={isLight}
      ></ProjectCard>
      <h1 className="otherProjects">Other Interesting Projects</h1>
      <div className="otherProjectsContainer">
        <OtherProjects
          skills={simonSaysSkills}
          URL1="https://github.com/SusanSC/SimonSaysGame"
          URL2="https://simonsays-3yuk.onrender.com/"
          image1="images/github.png"
          image2="images/globe.png"
          title="Simon Says"
          description="A game about visualizing and listening to the sequence of sounds and colors and repeating it, the length of the sequence increases each time, becoming more complex."
        />
        <OtherProjects
          skills={drumKitSkills}
          URL1="https://github.com/SusanSC/DrumKit"
          URL2="https://drumkit-omsp.onrender.com/"
          image1="images/github.png"
          image2="images/globe.png"
          title="Drum Kit"
          description="Application that allows you to play the drums with the keyboard and mouse, created using JavaScript and event listeners."
        />
        <OtherProjects
          skills={tinDogSkills}
          URL1="https://github.com/SusanSC/TinDog"
          URL2="https://tindog-61j9.onrender.com/"
          image1="images/github.png"
          image2="images/globe.png"
          title="Tin Dog"
          description="A web application with responsive design created using HTML, CSS and Bootstrap."
        />
        <OtherProjects
          skills={secretsSkills}
          URL1="https://github.com/SusanSC/Secrets"
          URL2="https://secrets-wm2w.onrender.com/"
          image1="images/github.png"
          image2="images/globe.png"
          title="Secrets"
          description="Allows the user to register and log in either with their credentials or using third parties such as Facebook and Google, to get access to a page where they can view and send secrets. It implements cookies and sessions, as well as password encryption."
        />
      </div>
    </div>
  );
}

export default Projects;
