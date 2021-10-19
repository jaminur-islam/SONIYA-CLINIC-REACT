import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const MyContext = createContext();
const ContextProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <div>
      <MyContext.Provider value={allContext}>{children}</MyContext.Provider>
    </div>
  );
};

export default ContextProvider;
