import React from "react";

const Padding = ({ children, value = "0", style = {} }) => {
  return (
    <div
      style={{
        padding: value,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Padding;
