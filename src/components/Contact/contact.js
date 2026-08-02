import React, { useEffect, useRef, useState } from "react";
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
import Reveal from "../Reveal/Reveal";

const skillIcons = [
  { img: HTML, alt: "HTML" },
  { img: CSS, alt: "CSS" },
  { img: JS, alt: "JavaScript" },
  { img: PG, alt: "PostgreSQL" },
  { img: Expressjs, alt: "Express.js" },
  { img: Sequelize, alt: "Sequelize" },
  { img: Vue, alt: "Vue.js" },
  { img: ReactJS, alt: "React.js" },
  { img: NodeJS, alt: "Node.js" },
  { img: Jquery, alt: "jQuery" },
  { img: Jest, alt: "Jest" },
  { img: Redis, alt: "Redis" },
  { img: Pinia, alt: "Pinia" },
  { img: Redux, alt: "Redux" },
  { img: Tailwind, alt: "Tailwind CSS" },
  { img: Bootstrap, alt: "Bootstrap" },
  { img: MongoDB, alt: "MongoDB" },
  { img: Apollo, alt: "Apollo" },
  { img: GraphQL, alt: "GraphQL" },
];

const Contact = () => {
  const form = useRef();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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

  const marqueeIcons = reducedMotion ? skillIcons : [...skillIcons, ...skillIcons];

  return (
    <section id="contactPage">
      <div id="clients">
        <Reveal as="h1" className="contactPageTitle">
          My Skills
        </Reveal>
        <Reveal as="p" className="clientDesc" delay={0.1}>
          I have built proficiency in various technologies and tools throughout
          my journey. Below are some of the key components of my technical
          expertise, including the tech stack and tools I am proficient in:
        </Reveal>
        <Reveal className="marqueeViewport" delay={0.2}>
          <div className={`marqueeTrack ${reducedMotion ? "marqueeStatic" : ""}`}>
            {marqueeIcons.map((skill, i) => (
              <div className="clientImgContainer" key={`${skill.alt}-${i}`}>
                <img src={skill.img} alt={skill.alt} className="clientImg" />
                <div className="overlay">{skill.alt}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div id="contact">
        <Reveal as="h1" className="contactPageTitle">
          Contact Me
        </Reveal>
        <Reveal as="span" className="contactDesc" delay={0.1}>
          Please fill out the form below to discuss any work opportunities
        </Reveal>
        <Reveal delay={0.2}>
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
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
