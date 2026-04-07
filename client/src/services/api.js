import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const getClient = (apiKey) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
};

export const createKey = async () => {
  const response = await axios.post(`${BASE_URL}/create-key`);
  return response.data;
};

export const storeMemory = async (apiKey, text, userId) => {
  const client = getClient(apiKey);
  const response = await client.post('/store', { text, user_id: userId });
  return response.data;
};

export const searchMemory = async (apiKey, query, userId) => {
  const client = getClient(apiKey);
  const response = await client.post('/search', { query, user_id: userId });
  return response.data;
};

export const chatWithMemory = async (apiKey, message, userId) => {
  const client = getClient(apiKey);
  const response = await client.post('/chat', { message, user_id: userId });
  return response.data;
};
