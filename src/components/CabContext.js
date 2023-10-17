import React, { useState, useEffect, createContext } from "react";
import { cabData } from "../data";

//create context

export const CabContext = createContext();

const CabContextProvider = ({ children }) => {
  const [cabs, setCabs] = useState(cabData);
  const [type, setType] = useState("Type (any)");
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  //countries
  useEffect(() => {
    const allCabs = cabs.map((cab) => {
      return cab.type;
    });
    // console.log(allCabs);

    const uniqueCabs = ["Type (any)", ...new Set(allCabs)];

    setTypes(uniqueCabs);
  }, []);

  //properties

  const handleClick = () => {
    setLoading(true);
 
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    

    const newCab = cabData.filter((cab) => {
    
      if (cab.type === cab) {
        return cab;
      }
      //if all values are default
      if (isDefault(cab)) {
        return cab;
      }
    });

    console.log(newCab);
    setTimeout(() => {
      return newCab.length < 1 ? setCabs([]) : setCabs(newCab), 
      setLoading(false)
    }, 1000);
  };

  return (
    <CabContext.Provider
      value={{
        cabs,
        setCabs,
        type,
        setType,
        types,
        setTypes,
        loading,
        setLoading,
        handleClick,
      }}
    >
      {children}
    </CabContext.Provider>
  );
};

export default CabContextProvider;
