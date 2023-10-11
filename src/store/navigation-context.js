import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext({
  onNavigate: () => {},
});

export const NavContextProvider = props => {
  const navigate = useNavigate();

  const navigationHandler = path => {
    navigate(`/${path}`);
  };

  return (
    <NavigationContext.Provider value={{ onNavigate: navigationHandler }}>
      {" "}
      {props.children}{" "}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
