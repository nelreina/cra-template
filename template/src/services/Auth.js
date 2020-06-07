import React, { useEffect, useState } from "react";
import { app } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [role, setRole] = useState({})
  const [ploeg, setPloeg] = useState({})

  useEffect(() => {

    app.auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user)
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        setRole(tokenResult.claims.role)
        setPloeg(tokenResult.claims.ploeg)

      }
      setPending(false)

    });
  }, []);

  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        role,
        ploeg
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};