import React from "react";
import "./skills.css";
// TODO: draft kategori skill — belum dikonfirmasi user, dan icon masih placeholder.
import FullStackIcon from "../../assets/full-stack.png";
import DesignIcon from "../../assets/ui-design.png";
import IntegrationIcon from "../../assets/backend.png";
import Reveal from "../Reveal/Reveal";

const skillBars = [
  {
    img: FullStackIcon,
    alt: "Full-Stack Development",
    title: "Full-Stack Development",
    text: "Building end-to-end web applications across front-end and back-end technologies.",
  },
  {
    img: DesignIcon,
    alt: "Systems Analysis & Design",
    title: "Systems Analysis & Design",
    text: "Gathering requirements and designing system architecture that spans both hardware and software.",
  },
  {
    img: IntegrationIcon,
    alt: "Hardware-Software Integration",
    title: "Hardware-Software Integration",
    text: "Coordinating integration between hardware infrastructure and software systems, such as warehouse and fleet management systems.",
  },
];

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <Reveal as="span" className="skillTitle">
          What I do
        </Reveal>
        <Reveal as="span" className="skillDesc" delay={0.1}>
          I'm a full-stack developer turned systems analyst, passionate about
          technology across software, systems design, and hardware-integrated
          solutions.
        </Reveal>
        <div className="skillBars">
          {skillBars.map((skill, i) => (
            <Reveal
              key={skill.title}
              className="skillBar"
              delay={0.15 + i * 0.12}
            >
              <img src={skill.img} alt={skill.alt} className="skillBarImg" />
              <div className="skillBarText">
                <h2>{skill.title}</h2>
                <p>{skill.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
