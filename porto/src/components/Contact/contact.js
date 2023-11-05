import React, { useRef } from "react";
import "./contact.css";
import HTML from "../../assets/htmllogo.png";
import CSS from "../../assets/csslogo.png";
import JS from "../../assets/jslogo.png";
import PG from "../../assets/postgresqllogo.png";
import Expressjs from "../../assets/expressjslogo.png";
import Sequelize from "../../assets/sequelizelogo.png";
import Vue from "../../assets/vuejslogo.png";
import ReactJS from "../../assets/reactjslogo.png";
import LinkedinIcon from "../../assets/linkedinIcon.png";
import GithubIcon from "../../assets/githubIcon.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zy7e36i",
        "template_bhp9j08",
        form.current,
        "ScuWmox5NjM2DC8d4"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          Swal({
            title: "Success!",
            text: "Email sent!",
            icon: "success",
            button: "OK",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Skills</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={HTML} alt="Client" className="clientImg" />
          <img src={CSS} alt="Client" className="clientImg" />
          <img src={JS} alt="Client" className="clientImg" />
          <img src={PG} alt="Client" className="clientImg" />
          <img src={Expressjs} alt="Client" className="clientImg" />
          <img src={Sequelize} alt="Client" className="clientImg" />
          <img src={Vue} alt="Client" className="clientImg" />
          <img src={ReactJS} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name or Your Company"
            name="from_name"
          ></input>
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          ></input>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/fatahillah-8a8664170/?originalSubdomain=id">
              <img src={LinkedinIcon} alt="Linkedin" className="link" />
            </a>
            <a href="https://github.com/TeslaboyS39">
              <img src={GithubIcon} alt="Github" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
