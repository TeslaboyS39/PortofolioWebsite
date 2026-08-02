import React from "react";
import "../Footer/footer.css";
import Reveal from "../Reveal/Reveal";

const Footer = () => {
  return (
    <Reveal as="footer" className="footer">
      <span>Copyright &#169; 2023 Fatahillah. All right received.</span>
      <a
        className="footerLink"
        href="https://sites.google.com/view/fatahproject39/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Engineering & Hardware Projects
      </a>
    </Reveal>
  );
};

export default Footer;
