import React, { useState, useEffect, useMemo, useRef } from "react";
import "./intro.css";
import photo from "../../assets/photo.webp";
import photob from "../../assets/photob.webp";
import { Link } from "react-scroll";
import btnImg from "../../assets/hire.png";

const Intro = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const introRef = useRef(null);
  const bgBackRef = useRef(null);
  const bgFrontRef = useRef(null);
  const scrollLagRef = useRef(0);
  const mouseOffsetRef = useRef({ x: 0, y: 0 });
  const texts = useMemo(
    () => ["Systems Analyst", "Full-Stack Developer", "Hardware & Software Enthusiast"],
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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 840px)").matches;
    if (prefersReducedMotion || isMobile) return;

    let ticking = false;
    const applyTransforms = () => {
      const lag = scrollLagRef.current;
      const { x, y } = mouseOffsetRef.current;
      if (bgBackRef.current) {
        bgBackRef.current.style.transform = `translate3d(${x * 0.4}px, ${lag + y * 0.4}px, 0)`;
      }
      if (bgFrontRef.current) {
        bgFrontRef.current.style.transform = `translate3d(${x * 1.1}px, ${lag + y * 1.1}px, 0)`;
      }
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(applyTransforms);
    };

    const handleScroll = () => {
      scrollLagRef.current = window.scrollY * 0.25;
      requestUpdate();
    };

    const handleMouseMove = (e) => {
      const node = introRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseOffsetRef.current = { x: relX * 30, y: relY * 20 };
      requestUpdate();
    };

    const handleMouseLeave = () => {
      mouseOffsetRef.current = { x: 0, y: 0 };
      requestUpdate();
    };

    const introEl = introRef.current;
    window.addEventListener("scroll", handleScroll, { passive: true });
    introEl?.addEventListener("mousemove", handleMouseMove);
    introEl?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      introEl?.removeEventListener("mousemove", handleMouseMove);
      introEl?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="intro" ref={introRef}>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Fatah</span>
          <br />
          <span className="introRole">
            {texts[textIndex].slice(0, charIndex) +
              (charIndex < texts[textIndex].length ? " " : "")}
          </span>
        </span>
        <p className="introPara">
          Full-stack developer turned systems analyst, passionate about tech
          across software and hardware-integrated systems.
        </p>
        <Link>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">
              <img src={btnImg} alt="" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </Link>
      </div>
      <img ref={bgBackRef} src={photo} alt="Profile" className="bg bgBack" />
      <img ref={bgFrontRef} src={photob} alt="" className="bg bgFront" />
    </section>
  );
};

export default Intro;
