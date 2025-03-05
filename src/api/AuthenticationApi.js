import axios from 'axios';

const API_URL = "https://podcast-registration-backend1.onrender.com";

// Signup API call
export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/register`, {
      username: name,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};
