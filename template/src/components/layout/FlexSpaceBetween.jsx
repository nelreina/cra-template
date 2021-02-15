import React from "react";

const FlexSpaceBetween = ({
  children,
  column,
  margin = "0.3em 0",
  align = "flex-start",
}) => {
  return (
    <div
      style={{
        margin,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: column ? "column" : "row",
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};

export default FlexSpaceBetween;
