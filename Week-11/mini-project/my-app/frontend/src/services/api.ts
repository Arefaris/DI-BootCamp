const API_BASE = 'http://localhost:5001';

export const api = {
  register: async (username: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    return response.json();
  },

  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  getStories: async (token: string) => {
    const response = await fetch(`${API_BASE}/stories`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  createStory: async (token: string, title: string, content: string) => {
    const response = await fetch(`${API_BASE}/stories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
    return response.json();
  },

  updateStory: async (token: string, id: number, title: string, content: string) => {
    const response = await fetch(`${API_BASE}/stories/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
    return response.json();
  },

  deleteStory: async (token: string, id: number) => {
    const response = await fetch(`${API_BASE}/stories/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  getContributors: async (token: string, storyId: number) => {
    const response = await fetch(`${API_BASE}/contributors/${storyId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  addContributor: async (token: string, storyId: number, userId: number) => {
    const response = await fetch(`${API_BASE}/contributors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ story_id: storyId, user_id: userId })
    });
    return response.json();
  },

  removeContributor: async (token: string, contributorId: number) => {
    const response = await fetch(`${API_BASE}/contributors/${contributorId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  }
};