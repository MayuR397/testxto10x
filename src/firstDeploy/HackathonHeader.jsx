import React, { useEffect, useState } from "react";

const HackathonHeader = () => {
  const hackathonName = "Hackathon 2025";
  const tagline = "Code, Collaborate, Conquer!";

  // Set the target time to today at 11:30 AM IST
  const targetTime = new Date();
  targetTime.setHours(11, 30, 0, 0); // Set to 11:30 AM today

  const [timeLeft, setTimeLeft] = useState(targetTime - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const timeRemaining = targetTime - currentTime;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
      } else {
        setTimeLeft(timeRemaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}h ${minutes
      .toString()
      .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-pink-100 text-gray-800 py-12 px-6">
      <h1 className="text-8xl font-bold text-center mb-4">
        xto<span className="text-red-500">10x</span>
      </h1>
      <h2 className="text-2xl font-bold text-center mb-4">
        Hackathon <span className="text-red-500">2025</span>
      </h2>
      <p className="text-lg italic text-center mb-6">{tagline}</p>
      <div className="text-4xl font-mono text-red-500">
        {timeLeft > 0 ? formatTime(timeLeft) : "Hackathon Started"}
      </div>
    </div>
  );
};

export default HackathonHeader;
