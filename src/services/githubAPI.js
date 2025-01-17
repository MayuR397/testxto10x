import axios from 'axios';

const API_URL = 'https://api.github.com';
const TOKEN = process.env.TOKEN;
console.log('TOKEN:', process.env.TOKEN);



const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const getCommits = async (owner, repo) => {
  try {
    const response = await apiClient.get(`/repos/${owner}/${repo}/commits`);
    return response.data.length;
  } catch (error) {
    console.error(`Error fetching commits for ${owner}/${repo}`, error);
    return 0;
  }
};

export const getIssues = async (owner, repo) => {
  try {
    const response = await apiClient.get(`/repos/${owner}/${repo}/issues`);
    
    return response.data.filter(issue => !issue.pull_request).length; // Exclude pull requests
  } catch (error) {
    console.error(`Error fetching issues for ${owner}/${repo}`, error);
    return 0;
  }
};
