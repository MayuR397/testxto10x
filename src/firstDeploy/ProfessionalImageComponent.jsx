import React from "react";
import { FaSlack, FaYoutube, FaVideo } from "react-icons/fa";

const ProfessionalImageComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 py-6 px-6 bg-gray-50">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 mt-0">
        {/* Slack Button */}
        <a
          href="https://bit.ly/42hSjff"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-red-400 text-white py-3 px-6 rounded-lg shadow hover:bg-red-500 transition duration-300"
        >
          <FaSlack size={20} />
          Slack
        </a>

        {/* Zoom Button */}
        <a
          href="https://us06web.zoom.us/j/82145777662"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-400 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300"
        >
          <FaVideo size={20} />
          Zoom
        </a>

        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/live/qgy0SEMjRjA?feature=shared"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300"
        >
          <FaYoutube size={20} />
          YouTube
        </a>
      </div>

      {/* Image */}
      <img
        src="https://ik.imagekit.io/74a8dncgy/xto10x.jpg?updatedAt=1737041745666"
        alt="Professional"
        className="w-full sm:w-2/3 rounded-xl shadow-md mb-10" // Make the image full width on small screens and 2/3 on larger screens
      />

    </div>
  );
};

export default ProfessionalImageComponent;
