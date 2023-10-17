import React, { useState, useEffect } from "react";

const ConfirmationModal = ({ isOpen, closeModal }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        closeModal();
      }, 3000);
    }
  }, [isOpen, closeModal]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className="bg-white p-8 rounded shadow-md"
        style={{ width: "400px", height: "200px" }}
      >
        <p className="text-xl font-semibold text-gray-800">
          Your booking is confirmed. Please check your mailbox.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationModal;
