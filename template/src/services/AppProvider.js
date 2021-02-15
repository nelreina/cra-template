import React, { useContext } from "react";
import { useQuery } from "react-query";
import { fetchResource } from "./api";
const AppContext = React.createContext();

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const { data: formSettings } = useQuery(["form-settings"], async () =>
    fetchResource({ resource: "form-settings" })
  );

  return (
    <AppContext.Provider
      value={{
        formSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
