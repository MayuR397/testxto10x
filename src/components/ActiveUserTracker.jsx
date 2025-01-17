import React, { useState, useEffect } from "react";
import axios from "axios";

const DATABASE_URL = "https://reactserver-103af-default-rtdb.asia-southeast1.firebasedatabase.app/activeUsers.json";

const ActiveUserTracker = () => {
  const [userName, setUserName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Timer logic: input box visible for 10 seconds every minute
    const updateInputVisibility = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const isVisible = seconds < 10; // Input visible for the first 10 seconds of every minute
      setIsInputVisible(isVisible);

      // Reset hasSubmitted state for the next window
      if (!isVisible) {
        setHasSubmitted(false);
      }

      // Update remaining time for the timer
      if (isVisible) {
        setTimeRemaining(10 - seconds);
      } else {
        setTimeRemaining(60 - seconds); // Time until next window
      }
    };

    const timer = setInterval(updateInputVisibility, 1000);
    updateInputVisibility();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Fetch leaderboard data from Firebase
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(DATABASE_URL);
        if (response.data) {
          const sortedLeaderboard = Object.entries(response.data)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count); // Sort by count descending
          setLeaderboard(sortedLeaderboard);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const handleUserSubmit = async () => {
    if (!isInputVisible) {
      alert("Input is not allowed at this time.");
      return;
    }

    if (hasSubmitted) {
      alert("You have already submitted your name. Please wait for the next window.");
      return;
    }

    if (userName.trim()) {
      try {
        // Check if user exists in the database
        const response = await axios.get(DATABASE_URL);
        const users = response.data || {};

        if (users[userName]) {
          // User exists, increment their count
          await axios.patch(`${DATABASE_URL.replace(".json", `/${userName}.json`)}`, {
            count: users[userName] + 1,
          });
        } else {
          // New user, create their entry with a count of 1
          await axios.patch(DATABASE_URL, { [userName]: 1 });
        }

        // Clear input, set hasSubmitted to true
        setUserName("");
        setHasSubmitted(true);

        // Update leaderboard
        const updatedLeaderboard = Object.entries({
          ...users,
          [userName]: (users[userName] || 0) + 1,
        })
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count);
        setLeaderboard(updatedLeaderboard);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Leaderboard</h1>
        <ul className="mb-6">
          {leaderboard.map((user, index) => (
            <li key={index} className="text-gray-600">
              {index + 1}. {user.name} - {user.count} entries
            </li>
          ))}
        </ul>
        {isInputVisible ? (
          <div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <button
              onClick={handleUserSubmit}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Submit
            </button>
            <p className="text-gray-500 mt-2">
              {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}s remaining to submit.
            </p>
          </div>
        ) : (
          <p className="text-red-500">
            Input will be available in{" "}
            {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}s.
          </p>
        )}
      </div>
    </div>
  );
};

export default ActiveUserTracker;
