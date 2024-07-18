import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{}}>{children}hallo</AppContext.Provider>;
};

export default AppProvider;
