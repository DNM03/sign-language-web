export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const setToken = (token) => {
  localStorage.setItem('accessToken', token);
};

export const removeToken = () => {
  localStorage.removeItem('accessToken');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const setRefreshToken = (token) => {
  localStorage.setItem('refreshToken', token);
};

export const removeRefreshToken = () => {
  localStorage.removeItem('refreshToken');
};

export const isLoggedIn = () => {
  return !!getToken();
};