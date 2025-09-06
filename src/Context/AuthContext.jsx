import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("user"); // "user" or "admin"

  useEffect(() => {
    const session = sessionStorage.getItem("isLoggedIn");
    const role = sessionStorage.getItem("userRole");
    if (session === "true") {
      setIsLoggedIn(true);
      setUserRole(role || "user");
    }
  }, []);

  function login(role = "admin") {
    setIsLoggedIn(true);
    setUserRole(role);
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userRole", role);
  }

  function logout() {
    setIsLoggedIn(false);
    setUserRole("user");
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userRole");
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
