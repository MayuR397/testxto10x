import React, { useState } from "react";

const FindTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleIframeLoad = () => {
    setLoading(false); // Set loading to false when iframe is loaded
  };

  return (
    <div className="bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto rounded-xl p-6">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Know Your <span className="text-red-500">Team</span>
        </h1>

        {/* Button to Open Modal */}
        <div className="text-center">
          <button
            onClick={openModal}
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            View Dashboard
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-4xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2"
            >
              ✕
            </button>

            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
                <svg
                  className="animate-spin h-12 w-12 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                  ></path>
                </svg>
              </div>
            )}

            {/* Iframe */}
            <iframe
              className="w-full h-[450px] border-0 rounded-lg"
              src="https://lookerstudio.google.com/embed/reporting/9278b965-dc05-45b8-a520-41e83b2e14c7/page/rSodE"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              onLoad={handleIframeLoad} // Trigger loading state change on iframe load
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindTeam;
