import React, { useState, useEffect, useContext } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine, RiHome5Line, RiWallet3Line } from "react-icons/ri";
import { Menu } from "@headlessui/react";

const PickUpLocation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Location (any)'); 

  const pickUpLocations = [
    {
      value: 'Location (any)',
    },
    {
      value: '05977 Johns Springs, Missouri',
    },
    {
      value: '1115 Ramiro Ramp, Texas',
    },
    {
      value: '855 Frami Loop, Texas',
    },
    {
      value: '975 Treutel Port, LA',
    },
    {
      value: '75515 Price Port, Vegas',
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
          <div className="text-[13px]">Choose your Pick-up Point</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className={`dropdown-menu ${isOpen ? 'block' : 'hidden'}`}>
        {pickUpLocations.map((location, index) => {
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

export default PickUpLocation;
