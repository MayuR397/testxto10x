// 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
import axios from 'axios';

const API_URL = 'https://api.github.com';
const TOKEN = (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_GITHUB_TOKEN) 
  ? process.env.NEXT_PUBLIC_GITHUB_TOKEN 
  : "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";


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
