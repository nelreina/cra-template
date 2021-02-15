import React, { useState, useContext } from "react";

const MTContext = React.createContext();

export const useMT = () => useContext(MTContext);

const MTProvider = ({ children, ps = 15, height = "600px" }) => {
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(ps);
  const headerStyle = { position: "sticky", top: 0 };
  const maxBodyHeight = height;
  return (
    <MTContext.Provider
      value={{
        page,
        setPage,
        searchText,
        setSearchText,
        pageSize,
        setPageSize,
        headerStyle,
        maxBodyHeight,
      }}
    >
      {children}
    </MTContext.Provider>
  );
};

export default MTProvider;
