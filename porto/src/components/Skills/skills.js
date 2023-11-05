import React from "react";
import "./skills.css";
import FrontEnd from "../../assets/ui-design.png";
import BackEnd from "../../assets/backend.png";
import FullStack from "../../assets/full-stack.png";

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am an aspiring web developer with a focus on full-stack development.
          I have a solid foundation in HTML, CSS, and JavaScript, and I'm
          proficient in React and Vue for building dynamic user interfaces.
          Additionally, I have experience with both SQL databases like
          PostgreSQL and NoSQL databases like MongoDB.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={FrontEnd} alt="FrontEnd" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Front-End Development</h2>
              <p>
                Expertise in building user interfaces with HTML, CSS, and
                JavaScript. Proficient in React and Vue for creating dynamic and
                interactive web applications.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={BackEnd} alt="BackEnd" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Back-End Development</h2>
              <p>
                Experience in server-side programming using Node.js and
                Express.js. Skilled in database management with PostgreSQL and
                MongoDB. Proficient in testing with Jest for ensuring code
                quality and reliability.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={FullStack} alt="FullStack" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Full-stack Development</h2>
              <p>
                Combining front-end and back-end skills to create end-to-end web
                applications. Proficient in both client-side and server-side
                technologies for seamless development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
