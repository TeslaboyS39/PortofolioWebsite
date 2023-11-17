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
import NodeJS from "../../assets/nodejslogo.png";
import MongoDB from "../../assets/mongodblogo.png";
import Jquery from "../../assets/jquerylogo.png";
import Jest from "../../assets/jestlogo.png";
import Tailwind from "../../assets/tailwindlogo.png";
import Redux from "../../assets/reduxlogo.png";
import Redis from "../../assets/redislogo.png";
import Pinia from "../../assets/pinialogo.png";
import GraphQL from "../../assets/graphqllogo.png";
import Bootstrap from "../../assets/bootstraplogo.png";
import Apollo from "../../assets/apollologo.png";
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
          I have built proficiency in various technologies and tools throughout
          my journey. Below are some of the key components of my technical
          expertise, including the tech stack and tools I am proficient in:
        </p>
        <div className="clientImgs">
          <div className="clientImgContainer">
            <img src={HTML} alt="Client" className="clientImg" />
            <div className="overlay">HTML</div>
          </div>
          <div className="clientImgContainer">
            <img src={CSS} alt="Client" className="clientImg" />
            <div className="overlay">CSS</div>
          </div>
          <div className="clientImgContainer">
            <img src={JS} alt="Client" className="clientImg" />
            <div className="overlay">JavaScript</div>
          </div>
          <div className="clientImgContainer">
            <img src={PG} alt="Client" className="clientImg" />
            <div className="overlay">PostgreSQL</div>
          </div>
          <div className="clientImgContainer">
            <img src={Expressjs} alt="Client" className="clientImg" />
            <div className="overlay">Express.js</div>
          </div>
          <div className="clientImgContainer">
            <img src={Sequelize} alt="Client" className="clientImg" />
            <div className="overlay">Sequelize</div>
          </div>
          <div className="clientImgContainer">
            <img src={Vue} alt="Client" className="clientImg" />
            <div className="overlay">Vue.js</div>
          </div>
          <div className="clientImgContainer">
            <img src={ReactJS} alt="Client" className="clientImg" />
            <div className="overlay">React.js</div>
          </div>
          <div className="clientImgContainer">
            <img src={NodeJS} alt="Client" className="clientImg" />
            <div className="overlay">Node.js</div>
          </div>
          <div className="clientImgContainer">
            <img src={Jquery} alt="Client" className="clientImg" />
            <div className="overlay">jQuery</div>
          </div>
          <div className="clientImgContainer">
            <img src={Jest} alt="Client" className="clientImg" />
            <div className="overlay">Jest</div>
          </div>
          <div className="clientImgContainer">
            <img src={Redis} alt="Client" className="clientImg" />
            <div className="overlay">Redis</div>
          </div>
          <div className="clientImgContainer">
            <img src={Pinia} alt="Client" className="clientImg" />
            <div className="overlay">Pinia</div>
          </div>
          <div className="clientImgContainer">
            <img src={Redux} alt="Client" className="clientImg" />
            <div className="overlay">Redux</div>
          </div>
          <div className="clientImgContainer">
            <img src={Tailwind} alt="Client" className="clientImg" />
            <div className="overlay">Tailwind CSS</div>
          </div>
          <div className="clientImgContainer">
            <img src={Bootstrap} alt="Client" className="clientImg" />
            <div className="overlay">Bootstrap</div>
          </div>
          <div className="clientImgContainer">
            <img src={MongoDB} alt="Client" className="clientImg" />
            <div className="overlay">MongoDB</div>
          </div>
          <div className="clientImgContainer">
            <img src={Apollo} alt="Client" className="clientImg" />
            <div className="overlay">Apollo</div>
          </div>
          <div className="clientImgContainer">
            <img src={GraphQL} alt="Client" className="clientImg" />
            <div className="overlay">GraphQL</div>
          </div>
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
