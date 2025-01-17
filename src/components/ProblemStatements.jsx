import React from "react";
import { FaCode, FaChartLine, FaVials } from "react-icons/fa";

const ProblemStatements = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto  rounded-xl  p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Problem Statements
        </h2>
        {/* Buttons Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Frontend Development Button */}
          <a
            href="https://link-to-frontend-problem.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-400 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 flex items-center justify-center gap-3"
          >
            <FaCode size={20} />
            <span>Software Development</span>
          </a>

          {/* Data Analytics (DA) Button */}
          <a
            href="https://link-to-da-problem.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-3"
          >
            <FaChartLine size={20} />
            <span>Data Analytics (DA)</span>
          </a>

          {/* Software Development Engineer in Test (SDET) Button */}
          <a
            href="https://link-to-sdet-problem.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center gap-3"
          >
            <FaVials size={20} />
            <span>Software Testing</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
