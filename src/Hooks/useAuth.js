import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

const useAuth = () => {
  return useContext(MyContext);
};

export default useAuth;
