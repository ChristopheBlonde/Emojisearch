import { useState } from "react";

const Line = (props) => {
  const { symbol, title } = props;
  const [hovered, setHovered] = useState(false);
  const handleMouseOn = () => setHovered(true);
  const handleMouseOff = () => setHovered(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(symbol);
  };
  return (
    <div
      className="line"
      onClick={handleCopy}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
    >
      <div>
        <span>{symbol}</span>
        <span>{title}</span>
      </div>

      <span className="hovered">{hovered && "click to copy !"}</span>
    </div>
  );
};

export default Line;
