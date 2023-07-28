import React from "react";
import Header from "../Header/Header";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Footer from "../Footer/Footer";
import SocialButton from "../SocialButton/SocialButton";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AppStyle from "./AppStyle.css";

function App() {
  const [isLight, setLight] = React.useState(false);

  const handleTheme = () => {
    setLight(!isLight);
  };

  if (isLight) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "#2B2730";
    document.body.style.color = "white";
  }

  // Get the button:
  let mybutton = document.getElementsByClassName("scrollUpButton");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton[0].style.display = "block";
    } else {
      mybutton[0].style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="generalContainer">
      <Header isLight={isLight} onClick={handleTheme} />
      <div class="profMainContainer">
        <div class="profTextContainer">
          <p>Hello 👋🏻, I'm</p>
          <h1 class="myName">Susan Segura</h1>
          <p>UI Developer.</p>
        </div>
        <div class="profButtonContainer">
          <a
            href="https://drive.google.com/file/d/1M99HTLYixH_cJb4tscZIYcWQsJB0Z7HZ/view?usp=sharing"
            target="_blank"
          >
            <button className="profButton">
              <FileDownloadOutlinedIcon fontSize="large" />
              <span> Resume</span>
            </button>
          </a>
          <a href="#contact">
            <button className="profButton">
              <EmailOutlinedIcon fontSize="large" />
              <span> Contact</span>
            </button>
          </a>
        </div>
        <div className="socialContainer">
          <ul>
            <li>
              <SocialButton
                URL="https://github.com/SusanSC"
                image="images/github.png"
              />
            </li>
            <li>
              <SocialButton
                URL="https://www.linkedin.com/in/susan-segura-castro/?locale=en_US"
                image="images/linkedin.png"
              />
            </li>
            <li>
              <SocialButton
                URL="mailto:susan.seguracastro@gmail.com"
                image="images/email.png"
              />
            </li>
          </ul>
        </div>
      </div>
      <About isLight={isLight} />
      <Projects isLight={isLight} />
      <Contact isLight={isLight} />
      <hr className={isLight ? "lineDark" : "lineLight"} />
      <Footer />
      <button onClick={topFunction} className="scrollUpButton">
        <KeyboardArrowUpIcon fontSize="large" />
      </button>
    </div>
  );
}

export default App;
