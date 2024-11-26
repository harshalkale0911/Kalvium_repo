import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getDogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/dogs`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const addDog = async (name) => {
  try {
    const response = await axios.post(`${API_URL}/dogs`, { name });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateDog = async (id, name) => {
  try {
    const response = await axios.put(`${API_URL}/dogs/${id}`, { name });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteDog = async (id) => {
  try {
    await axios.delete(`${API_URL}/dogs/${id}`);
  } catch (err) {
    console.error(err);
  }
};
