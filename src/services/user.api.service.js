import apiRequest from './api.service';

const BASE_URL = '/api/v1/user';

export const fetchAllUserApi = async () => {
  return await apiRequest('GET', BASE_URL);
};

export const createUserAPI = async (fullName, email, password, phone) => {
  return await apiRequest('POST', BASE_URL, { fullName, email, password, phone });
};

export const updateUserAPI = async (userId, fullName, phone) => {
  return await apiRequest('PUT', BASE_URL, { _id: userId, fullName, phone });
};

export const deleteUserAPI = async (userId) => {
  return await apiRequest('DELETE', `${BASE_URL}/${userId}`);
};
