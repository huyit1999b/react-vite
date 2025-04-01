import axios from './axios.customize';

const apiRequest = async (method, url, data = null, params = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
    });
    return response; // Only return the data to keep it clean
  } catch (error) {
    console.error(`API ${method} error at ${url}:`, error);
    throw error.response ? error.response : error;
  }
};

export default apiRequest;