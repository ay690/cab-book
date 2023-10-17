import React, { useState, useEffect, useContext } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine, RiHome5Line, RiWallet3Line } from "react-icons/ri";
import { Menu } from "@headlessui/react";

const DropLocation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Location (any)'); 

  const dropLocations = [
    {
      value: 'Location (any)',
    },
    {
      value: '06353 Ronaldo Expressway, Missouri',
    },
    {
      value: '7107 Savannah Wall, JK',
    },
    {
      value: '23746 Emmet Fields, Tennessee',
    },
    {
      value: '58528 Roob Loaf, LA',
    },
    {
      value: '49423 Goyette Mill, Chicago',
    },
  ]

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsOpen(false); 
  }

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{selectedLocation}</div>
          <div className="text-[13px]">Choose your Dropping-Point</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className={`dropdown-menu ${isOpen ? 'block' : 'hidden'}`}>
        {dropLocations.map((location, index) => {
          return (
            <Menu.Item
              onClick={() => handleLocationSelect(location.value)} 
              className={`cursor-pointer hover:text-violet-700 transition ${location.value === selectedLocation ? 'text-violet-700 font-bold' : ''}`}
              as="li"
              key={index}
            >
              {location.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default DropLocation;
