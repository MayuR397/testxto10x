import React, { useEffect, useState } from "react";
import { getCommits, getIssues } from "../services/githubAPI";

const randomCrayonColors = [
  "bg-red-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-orange-300",
  "bg-teal-300",
  "bg-indigo-300",
];

const getRandomColor = () => {
  return randomCrayonColors[
    Math.floor(Math.random() * randomCrayonColors.length)
  ];
};

const NewLeaderBoard = () => {
  const [groups, setGroups] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("fsd");
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorGroups, setErrorGroups] = useState([]);

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
    setFilteredGroups(
      groups.filter((group) => group.course === selectedCourse)
    );
  }, [groups, selectedCourse]);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    const fetchGroupData = async () => {
      setLoading(true);
      setErrorGroups([]);
      try {
        const data = await Promise.all(
          filteredGroups.map(async (group) => {
            try {
              const commits = await getCommits(group.repoOwner, group.repoName);
              const issues = await getIssues(group.repoOwner, group.repoName);
              return {
                groupName: group.groupName,
                commits,
                issues,
                total: commits + issues,
                color: getRandomColor(),
              };
            } catch (error) {
              setErrorGroups((prev) => [
                ...prev,
                `${group.groupName} (${group.repoOwner}/${group.repoName})`,
              ]);
              return {
                groupName: group.groupName,
                commits: 0,
                issues: 0,
                total: 0,
                color: getRandomColor(),
              };
            }
          })
        );
        setLeaderboardData(data.sort((a, b) => b.total - a.total));
      } catch (error) {
        console.error("Error fetching group data:", error);
      }
      setLoading(false);
    };

    if (filteredGroups.length > 0) {
      fetchGroupData();
    }
  }, [filteredGroups]);

  if (loading) {
    return (
      <p className="text-center text-lg text-gray-600">
        Loading leaderboard... 🕒
      </p>
    );
  }

  return (
    <div className=" bg-gray-50 py-12 px-6 ">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 tracking-wide">
          🏆 Hackathon <span className="text-red-500">Leaderboard</span>
        </h2>
        <div className="mb-4">
          <label htmlFor="course-select" className="block text-lg font-semibold">
            Select Course:
          </label>
          <select
            id="course-select"
            value={selectedCourse}
            onChange={handleCourseChange}
            className="p-2 rounded border w-full sm:w-auto"
          >
            <option value="fsd">Software Development (SD)</option>
            <option value="sdet">Software Testing (SDET)</option>
            <option value="da">Data Analytics (DA)</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <div className="max-h-[600px] overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-400 text-white">
                  <th className="py-4 px-6 text-sm font-semibold">Rank</th>
                  <th className="py-4 px-6 text-sm font-semibold">Team Name</th>
                  <th className="py-4 px-6 text-sm font-semibold">Commits</th>
                  <th className="py-4 px-6 text-sm font-semibold">
                    Issues Resolved
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold">Total Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((group, index) => {
                  const rankColors = [
                    "bg-yellow-100 text-yellow-800", // Gold
                    "bg-gray-200 text-gray-800", // Silver
                    "bg-orange-200 text-orange-800", // Bronze
                  ];

                  const rowClass =
                    index < 3
                      ? `${rankColors[index]}`
                      : "bg-white hover:bg-gray-100 transition";

                  return (
                    <tr key={index} className={rowClass}>
                      <td className="py-4 px-6 font-semibold text-center">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${group.color}`}
                        >
                          {group.groupName.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-gray-800 font-medium">
                          {group.groupName}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        <span className="flex items-center">
                          <span className="text-red-500 mr-2">🔥</span>
                          {group.commits}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        <span className="flex items-center">
                          <span className="text-blue-500 mr-2">🏥</span>
                          {group.issues}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-yellow-700 font-semibold">
                        <span className="flex items-center">
                          <span className="text-xl">⭐</span>
                          {group.total} Points
                          {index === 0 && (
                            <span className="ml-2 text-sm text-gray-500 italic">
                              🚀 Outstanding!
                            </span>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {errorGroups.length > 0 && (
          <div className="mt-6 text-red-500 text-sm">
            <p>⚠️ Could not fetch data for the following groups:</p>
            <ul className="list-disc ml-6">
              {errorGroups.map((group, index) => (
                <li key={index}>{group}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewLeaderBoard;
