import React from "react";
import FooterStyle from "./FooterStyle.css";
import SocialButton from "../SocialButton/SocialButton";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <h1>Thank you for visiting my website!</h1>
      <a href="#contact">
        <button className="contactMeButton">Contact Me</button>
      </a>
      <span>Or you can also get in touch with me through:</span>
      <SocialButton
        URL="https://github.com/SusanSC"
        image="images/github.png"
      />
      <SocialButton
        URL="https://www.linkedin.com/in/susan-segura-castro/?locale=en_US"
        image="images/linkedin.png"
      />
      <SocialButton
        URL="mailto:susan.seguracastro@gmail.com"
        image="images/email.png"
      />
      <p>Made with 💗 by Susan Segura </p>
      <p>© Copyright {year}</p>
    </div>
  );
}

export default Footer;
