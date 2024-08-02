import React from "react";
import { FaTimes } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const LogoutModal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <FaTimes size={20} />
        </button>
        <div className="flex items-center justify-center mb-4">
          <FiLogOut size={40} className="text-red-600" />
        </div>
        <h2 className="text-white text-lg font-semibold mb-4 text-center">
          Are you sure you want to <br />
          <span className="text-red-600">log out </span>?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded flex items-center gap-2"
          >
            <FaTimes size={16} />
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center gap-2"
          >
            <FiLogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
