/* eslint-disable react/prop-types */
import React, { useReducer, useState } from "react";


export const AppContext = React.createContext();

const loginState = {
  login2Active: false,
};

const initialState = {
  ...loginState,
};

const SET_LOGIN2_ACTIVE = "LOGIN2_ACTIVE";

const reducer = (state, action) => {
  const newState = { ...state, login2Active: action.payload };

  switch (action.type) {
    case SET_LOGIN2_ACTIVE:
      return { ...state, login2Active: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const setLogin2Active = (active) => {
  //   console.log("active");
  //   console.log(active);
  //   console.log("");

  //   if (active) {
  //     dispatch({ type: SET_LOGIN2_ACTIVE, payload: active });
  //   }
  // };

  const [state, setState] = useState({});
  return (
    (
      <AppContext.Provider value={{ state, setState }}>

        {children}

      </AppContext.Provider>
    )
  );
};

export default AppProvider;
