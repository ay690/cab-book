import React, { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { CabContext } from "./CabContext";
import { ImSpinner2 } from "react-icons/im";
import Cab from "./Cab";

const CabList = () => {
  const { cabs, loading } = useContext(CabContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (cabs.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing found
      </div>
    );
  }
  return (
    <section className="mb-20">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
        {cabs.map((cab, index) => {
          return (
            <Link to={`/cabbooking/${cab.id}`} key={index}>
              <Cab cab={cab} />
            </Link>
          );
        })}
      </div>
    </div>
  </section>
  )
};

export default CabList;
