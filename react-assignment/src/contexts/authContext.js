import React, { useState, createContext } from "react";
import { login, signup, addFavourite } from "../api/tmdb-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userEmail, setEmail] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (email, password) => {
    const result = await login(email, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setEmail(email);
    }
  };

  const register = async (email, password) => {
    const result = await signup(email, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const addToFavorites = async (email, movieId) => {
    const result = await addFavourite(email, movieId)
    console.log(result.code);
    return (result.code == 200) ? true : false;
  }

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        addToFavorites,
        userEmail
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;