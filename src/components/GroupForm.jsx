import React, { useState } from 'react';

const GroupForm = ({ onAddGroup }) => {
  const [groupName, setGroupName] = useState('');
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGroup({ groupName, repoOwner, repoName });
    setGroupName('');
    setRepoOwner('');
    setRepoName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Repo Owner"
        value={repoOwner}
        onChange={(e) => setRepoOwner(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Repo Name"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        required
      />
      <button type="submit">Add Group</button>
    </form>
  );
};

export default GroupForm;
