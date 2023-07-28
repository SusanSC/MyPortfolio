import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactStyle from "./ContactStyle.css";

function Contact(props) {
  const isLight = props.isLight;

  const notifySuccess = () =>
    toast.success("Your message has been sent! 👌", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyError = () =>
    toast.error("Your message couldn't be sent! 🙁", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          notifySuccess();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          notifyError();
        }
      );
  };

  return (
    <div id="contact">
      <div className="contactContainer">
        <div className="contactTitleContainer">
          <span className="contactTitle">Contact Me.</span>
        </div>
        <p className="contactText">
          I'd love if you reached out to me, even if it's just to say "Hey!".
          Don't hesitate! Drop me a line and I'll get back to you as soon as
          possible. 😊
          <a
            className="emailLink"
            href="mailto:susan.seguracastro@gmail.com"
            target="_blank"
          >
            <p>
              <img
                className={isLight ? "emailImageLight" : "emailImageDark"}
                src="images/email.png"
              />
              susan.seguracastro@gmail.com
            </p>
          </a>
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input type="text" placeholder="Name" name="user_name" required></input>
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          required
        ></input>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required
        ></input>
        <textarea
          placeholder="Message"
          rows="5"
          name="message"
          required
        ></textarea>
        <button className="submitButton" type="submit">
          <img src="images/send.png" className="submitImage" />
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Contact;
