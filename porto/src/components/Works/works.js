import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/ems.png";
// import Portfolio2 from "../../assets/ems.png";
// import Portfolio3 from "../../assets/ems.png";
// import Portfolio4 from "../../assets/ems.png";
// import Portfolio5 from "../../assets/ems.png";
// import Portfolio6 from "../../assets/ems.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I'm passionate about crafting user-friendly and visually appealing web
        experiences. My goal is to create websites that not only look great, but
        also provide seamless functionality and a delightful user journey.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio1} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
