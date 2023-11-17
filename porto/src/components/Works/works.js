import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/web1.png";
import Portfolio2 from "../../assets/web2.png";
import Portfolio3 from "../../assets/web3.png";
import Portfolio4 from "../../assets/web4.png";
import Portfolio5 from "../../assets/web5.png";
import Portfolio6 from "../../assets/web6.png";

const Works = () => {
  const portfolioLinks = [
    "https://github.com/TeslaboyS39/BluebirdClone",
    "https://github.com/TeslaboyS39/EMS-Basic-Website",
    "https://github.com/TeslaboyS39/SQR-mobile-App-fp",
    "https://github.com/TeslaboyS39/Uniqless",
    "https://github.com/TeslaboyS39/LebahGanteng-CMS",
    "https://github.com/TeslaboyS39/IndoZZ1",
    // Add more links for other portfolio items
  ];

  const redirectToGitHub = (index) => {
    window.location.href = portfolioLinks[index];
  };
  const redirectToGitHubRepo = (index) => {
    window.location.href = "https://github.com/TeslaboyS39?tab=repositories";
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I'm passionate about crafting user-friendly and visually appealing web
        experiences. My goal is to create websites that not only look great but
        also provide seamless functionality and a delightful user journey.
      </span>
      <div className="worksImgs">
        <img
          src={Portfolio1}
          alt=""
          className="worksImg"
          onClick={() => redirectToGitHub(0)}
        />
        <img
          src={Portfolio2}
          alt=""
          className="worksImg"
          onClick={() => redirectToGitHub(1)}
        />
        <img
          src={Portfolio3}
          alt=""
          className="worksImg"
          onClick={() => redirectToGitHub(2)}
        />
        <img
          src={Portfolio4}
          alt=""
          className="worksImg"
          onClick={() => redirectToGitHub(3)}
        />
        <img
          src={Portfolio5}
          alt=""
          className="worksImg"
          onClick={() => redirectToGitHub(4)}
        />
        <img
          src={Portfolio6}
          alt=""
          className="worksImg"
          onClick={() => redirectToGitHub(5)}
        />
      </div>
      <button className="workBtn" onClick={redirectToGitHubRepo}>
        See More
      </button>
    </section>
  );
};

export default Works;
