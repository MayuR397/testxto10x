import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TenXSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-800 py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-2">
        Unleash Your Inner <span className="text-red-500">10x</span>
      </h1>
      <div
        className="text-3xl font-semibold text-gray-900"
        style={{ height: "48px", display: "flex", alignItems: "center" }}
      >
        <ReactTypingEffect
          text={["Developer", "Analyst", "Tester"]}
          speed={100}
          eraseSpeed={100}
          typingDelay={500}
          eraseDelay={1500}
          cursor={"_"}
        />
      </div>
    </div>
  );
};

export default TenXSection;
