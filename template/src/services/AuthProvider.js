import React, { useState, useContext } from "react";
import { apiLogin } from "../services/api";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const login = async (credential) => {
    try {
      const auth = await apiLogin(credential);
      if (auth) {
        setUser(() => auth.user);
        setRole(() => auth.user.role.type);
        setToken(() => auth.jwt);
        setError(() => null);
      } else {
        setError(() => "Invalid Credentials!");
      }
      return auth;
    } catch (error) {
      alert(error);
    }
    return null;
  };

  const logout = () => {
    setUser(() => null);
    setRole(() => null);
    setToken(() => null);
  };

  return (
    <AuthContext.Provider value={{ token, user, role, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
