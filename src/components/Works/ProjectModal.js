import { useEffect } from "react";
import "./projectModal.css";

const ProjectModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div
        className="modalContent"
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modalClose" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <img
          src={item.img}
          alt={`Screenshot of the ${item.name} project`}
          className="modalImg"
        />
        <h3 className="modalTitle">{item.name}</h3>
        <p className="modalDesc">{item.description}</p>
        <a
          className="modalLink"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
