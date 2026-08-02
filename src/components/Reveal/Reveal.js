import useReveal from "../../hooks/useReveal";

const Reveal = ({ as: Tag = "div", className = "", delay = 0, children, ...rest }) => {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
