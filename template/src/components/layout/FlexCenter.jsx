import React from "react";

const FlexCenter = ({ children, column, height = "100%" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: column ? "column" : "row",
        height,
      }}
    >
      {children}
    </div>
  );
};

export default FlexCenter;
