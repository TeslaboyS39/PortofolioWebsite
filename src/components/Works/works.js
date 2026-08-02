import React, { useRef, useState } from "react";
import "./works.css";
import Portfolio1 from "../../assets/web1.webp";
import Portfolio2 from "../../assets/web2.webp";
import Portfolio3 from "../../assets/web3.webp";
import Portfolio4 from "../../assets/web4.webp";
import Portfolio5 from "../../assets/web5.webp";
import Portfolio6 from "../../assets/web6.webp";
import Reveal from "../Reveal/Reveal";
import ProjectModal from "./ProjectModal";

// TODO: deskripsi di bawah ini masih placeholder — ganti dengan deskripsi asli tiap project.
const portfolioItems = [
  {
    img: Portfolio1,
    name: "Bluebird Clone",
    url: "https://github.com/TeslaboyS39/BluebirdClone",
    description: "Deskripsi project ini belum diisi.",
  },
  {
    img: Portfolio2,
    name: "EMS Basic Website",
    url: "https://github.com/TeslaboyS39/EMS-Basic-Website",
    description: "Deskripsi project ini belum diisi.",
  },
  {
    img: Portfolio3,
    name: "SQR Mobile App",
    url: "https://github.com/TeslaboyS39/SQR-mobile-App-fp",
    description: "Deskripsi project ini belum diisi.",
  },
  {
    img: Portfolio4,
    name: "Uniqless",
    url: "https://github.com/TeslaboyS39/Uniqless",
    description: "Deskripsi project ini belum diisi.",
  },
  {
    img: Portfolio5,
    name: "LebahGanteng CMS",
    url: "https://github.com/TeslaboyS39/LebahGanteng-CMS",
    description: "Deskripsi project ini belum diisi.",
  },
  {
    img: Portfolio6,
    name: "IndoZZ1",
    url: "https://github.com/TeslaboyS39/IndoZZ1",
    description: "Deskripsi project ini belum diisi.",
  },
];

const Works = () => {
  const scrollerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const scrollByPage = (direction) => {
    const node = scrollerRef.current;
    if (!node) return;

    if (direction > 0) {
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 1;
      if (atEnd) {
        node.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
    }

    if (direction < 0) {
      const atStart = node.scrollLeft <= 1;
      if (atStart) {
        node.scrollTo({ left: node.scrollWidth, behavior: "smooth" });
        return;
      }
    }

    node.scrollBy({ left: direction * node.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="works">
      <Reveal as="h2" className="worksTitle">
        My Portfolio
      </Reveal>
      <Reveal as="span" className="worksDesc" delay={0.1}>
        I'm passionate about crafting user-friendly and visually appealing web
        experiences. My goal is to create websites that not only look great but
        also provide seamless functionality and a delightful user journey.
      </Reveal>
      <div className="worksCarousel">
        <button
          type="button"
          className="carouselArrow carouselArrowLeft"
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll portfolio left"
        >
          &#8249;
        </button>
        <div className="worksImgs" ref={scrollerRef}>
          {portfolioItems.map((item, i) => (
            <Reveal
              key={item.name}
              as="button"
              type="button"
              className="worksCard"
              delay={0.15 + i * 0.08}
              onClick={() => setSelectedItem(item)}
              aria-label={`View details for ${item.name}`}
            >
              <img
                src={item.img}
                alt={`Screenshot of the ${item.name} project`}
                className="worksImg"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
        <button
          type="button"
          className="carouselArrow carouselArrowRight"
          onClick={() => scrollByPage(1)}
          aria-label="Scroll portfolio right"
        >
          &#8250;
        </button>
      </div>
      <Reveal
        as="a"
        className="workBtn"
        href="https://github.com/TeslaboyS39?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        See More
      </Reveal>

      {selectedItem && (
        <ProjectModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

export default Works;
