import React, { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  // load data localstorage
  const localList = localStorage.getItem("list");
  const localUsername = localStorage.getItem("username");

  const [username, setUsername] = useState(localUsername);
  const [list, setList] = useState(localList && JSON.parse(localList || null));

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  }, [username]);

  useEffect(() => {
    if (list) {
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      localStorage.removeItem("list");
    }
  }, [list]);

  const value = {
    username,
    setUsername,
    list,
    setList
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
