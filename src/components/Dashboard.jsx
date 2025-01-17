import React, { useState, useEffect } from "react";
import Leaderboard from "./Leaderboard";

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("fsd");
  const [filteredGroups, setFilteredGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(
          "https://reactserver-103af-default-rtdb.asia-southeast1.firebasedatabase.app/groups.json"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error("Error fetching groups data:", error);
      }
    };

    fetchGroups();
  }, []);

  useEffect(() => {
    // Filter groups based on the selected course
    setFilteredGroups(groups.filter((group) => group.course === selectedCourse));
  }, [groups, selectedCourse]);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <h1>Hackathon Leaderboard</h1>
      <div className="mb-4">
        <label htmlFor="course-select" className="block text-lg font-semibold">
          Select Course:
        </label>
        <select
          id="course-select"
          value={selectedCourse}
          onChange={handleCourseChange}
          className="p-2 rounded border"
        >
          <option value="fsd">Full Stack Development (FSD)</option>
          <option value="sdet">Software Development Engineer in Test (SDET)</option>
          <option value="da">Data Analytics (DA)</option>
        </select>
      </div>
      <Leaderboard groups={filteredGroups} />
    </div>
  );
};

export default Dashboard;
