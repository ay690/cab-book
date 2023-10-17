import React, { useState, useEffect, useContext } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { CabContext } from "./CabContext";

const CabRide = () => {
  const { type, setType, types } = useContext(CabContext);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{type}</div>
          <div className="text-[13px]">Select your Type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {types.map((type, index) => {
          return (
            <Menu.Item
              onClick={() => setType(type)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {type}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CabRide;