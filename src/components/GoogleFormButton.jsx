import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa"; // Using Google icon from react-icons

const GoogleFormButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Track modal visibility

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center py-8">
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-3 bg-red-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
      >
        <FaGoogle size={20} />
        <span className="text-lg font-semibold">Open Google Form</span>
      </button>

      {/* Modal - Google Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full md:w-2/3 lg:w-1/2 p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <span className="text-xl">&times;</span>
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdJgPfbWwfJDNuEJI_I-AVxFKuXA5i3MkXUyxJFOT6RUmAh5w/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleFormButton;
