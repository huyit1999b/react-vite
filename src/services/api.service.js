import axios from './axios.customize';

const fetchAllUserApi = async () => {
  const URL_BACKEND = '/api/v1/user';
  return await axios.get(URL_BACKEND);
};

const createUserAPI = async (fullName, email, password, phone) => {
  const URL_BACKEND = '/api/v1/user';
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  const response = await axios.post(URL_BACKEND, data);

  return response;
};

export { createUserAPI, fetchAllUserApi };
