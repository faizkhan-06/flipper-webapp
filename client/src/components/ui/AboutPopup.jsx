import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function AboutPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center overflow-y-auto pt-10">
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full  mx-4 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">About</h2>
          <button onClick={onClose}>
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <div className="mt-4 max-h-60 overflow-y-auto">
          <p>
            This is a sample description of the channel. It can include
            information about the channel owner, the type of content they
            create, and other relevant details. This popup provides more details
            about the channel to the users. This is a sample description of the
            channel. It can include information about the channel owner, the
            type of content they create, and other relevant details. This popup
            provides more details about the channel to the users. This is a
            sample description of the channel. It can include information about
            the channel owner, the type of content they create, and other
            relevant details. This popup provides more details about the channel
            to the users. This is a sample description of the channel. It can
            include information about the channel owner, the type of content
            they create, and other relevant details. This popup provides more
            details about the channel to the users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPopup;
