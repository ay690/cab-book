import React, { useState, useEffect, createContext } from "react";

const Cab = ({ cab }) => {
  const { image, type, price, name } = cab;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">{name}</div>
      </div>

      <div className="text-lg font-semibold text-violet-600 mb-4">
        $ {price}
      </div>
    </div>
  );
};

export default Cab;
