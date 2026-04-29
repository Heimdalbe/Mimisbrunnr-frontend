import { axios } from './index';

export async function login(email, password) {
  const { data } = await axios.post('/identity/accounts/login', {
    email,
    password
  });
  return data;
}

export async function logout() {
  const { data } = await axios.post('/identity/accounts/logout');
  return data;
}

export async function getUserInfo() {
  const { data } = await axios.get('/identity/accounts/info');
  return data;
}
