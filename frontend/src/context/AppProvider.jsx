/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
