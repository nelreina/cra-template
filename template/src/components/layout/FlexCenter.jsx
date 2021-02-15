import React from "react";

const FlexCenter = ({
  children,
  column,
  height = "100%",
  justify = "center",
  align = "center",
  style = {},
  gap = 0,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        flexDirection: column ? "column" : "row",
        height,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FlexCenter;
