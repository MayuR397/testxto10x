import React, { useState } from 'react';
import Leaderboard from './Leaderboard';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          if (Array.isArray(json)) {
            setGroups(json);
          } else {
            alert('Invalid JSON format');
          }
        } catch (error) {
          alert('Error parsing JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h1>Hackathon Leaderboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Upload Groups JSON:
          <input type="file" accept=".json" onChange={handleFileUpload} />
        </label>
      </div>
      <Leaderboard groups={groups} />
    </div>
  );
};

export default Dashboard;
