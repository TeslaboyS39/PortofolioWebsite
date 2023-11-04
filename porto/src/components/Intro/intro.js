import React from "react";
import "./intro.css";
import bg from "../../assets/photo.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hire.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Fatah</span>
          <br />
          Full-stack Developer
        </span>
        <p className="introPara">
          I am a junior full-stack web developer with a passion for creating{" "}
          <br />
          functional and user-friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
