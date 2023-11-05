import React, { useState, useEffect, useMemo } from "react";
import "./intro.css";
import bg from "../../assets/photo.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hire.png";

const Intro = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const texts = useMemo(
    () => ["Javascript Enthusiast", "Mobile Developer", "Full-stack Developer"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, textIndex, texts]);
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Fatah</span>
          <br />
          {texts[textIndex].slice(0, charIndex) +
            (charIndex < texts[textIndex].length ? "\u00A0" : "")}
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
