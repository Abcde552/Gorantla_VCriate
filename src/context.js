// src/context/EcomContext.js
import React, { createContext, useState } from "react";

export const EcomContext = createContext();

export const EcomProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0)
  const value = localStorage.getItem("userlogin");

   const e_value = localStorage.getItem("email");
   const p_value = localStorage.getItem("password");

  const [login, setLogin] = useState(value)
  const [ee, setEE] = useState(e_value);
  const [PP, setPP] = useState(p_value);
  



  return (
    <EcomContext.Provider
      value={{
        quantity,
        setQuantity,
        login,
        setLogin,
       ee,setEE,
       PP,setPP
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};
