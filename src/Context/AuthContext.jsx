import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem("isLoggedIn");
    if (session === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  function login() {
    setIsLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", "true");
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
