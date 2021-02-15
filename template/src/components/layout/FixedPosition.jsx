import React from "react";

const FixedPosition = ({ children, drawerWidth }) => {
  return (
    <div
      style={{
        width: drawerWidth,
        position: "fixed",
        bottom: 0,
        paddingBottom: 10,
      }}
    >
      {children}
    </div>
  );
};

export default FixedPosition;
