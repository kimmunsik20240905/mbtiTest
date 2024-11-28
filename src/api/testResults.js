import axios from 'axios';

const API_URL = 'http://localhost:5000/testResults';

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData);
    return response.data;  
  } catch (error) {
    console.error('create 실패:', error);
    throw error; 
  }
};

export const deleteTestResult = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('delete 실패:', error);
    throw error;
  }
};

export const updateTestResultVisibility = async (id, updatedResult) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedResult);
    return response.data;
  } catch (error) {
    console.error('update visibility 실패:', error);
    throw error;
  }
};