import React from "react";

const GridAutoFill = ({ children, px = 270, gap = "0.5em" }) => {
  return (
    <div
      style={{
        display: "grid",
        gridGap: gap,
        gridTemplateColumns: `repeat(auto-fit, minmax(${px}px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

export default GridAutoFill;
