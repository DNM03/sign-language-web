import axios from "axios";
import { AuthProvider, useAuth } from '../AuthContext'; 

const baseURL = import.meta.env.VITE_API_URL;

const authService = axios.create({
  baseURL,
});


// Add a request interceptor
authService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  const token = localStorage.getItem('refreshToken');
  console.log(token);
  try {
    const response = await axios.post(`${baseURL}/users/refresh-token`, { refresh_token: token });
    const accessToken = response.data.result.access_token;
    const refreshToken = response.data.result.refresh_token;    // Update tokens in localStorage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    return accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    // Handle token refresh failure (e.g., log out user)
    throw error;
  }
};
// Add a response interceptor
authService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        
        return authService(originalRequest);
      } catch (err) {
        console.error('Error retrying original request:', err);
        // Handle token refresh failure
      }
    }

    return Promise.reject(error);
  }
);

export const register = async (newUserData) => {
  try {
    const response = await axios.post(`${baseURL}/users/register`, newUserData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

export const loginToApp = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/users/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

export const userLogout = async (data) => {
  try {
    const response = await authService.post("/users/logout", data);
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
}

export const refreshUserToken = refreshToken;

export const verifyEmail = async (token) => {
  console.log(token);
  try {
    const response = await axios.post(`${baseURL}/users/verify-email`, token);
    return response.data;
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
}

export const resendVerificationEmail = async () => {
  try {
    const response = await authService.post(`/users/resend-verify-email`);
    return response.data;
  } catch (error) {
    console.error("Error resending verification email:", error);
    throw error;
  }
}

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${baseURL}/users/forgot-password`, email);
    return response.data;
  } catch (error) {
    console.error("Error sending forgot password email:", error);
    throw error;
  }
}

export const verifyResetPasswordToken = async (token) => {
  try {
    const response = await authService.get(`/users/verify-forgot-password-token`, token);
    return response.data;
  } catch (error) {
    console.error("Error verifying reset password token:", error);
    throw error;
  }
}

export const resetPassword = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/users/reset-password`, data);
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
}

export const getMyProfile = async () => {
  try {
    const response = await authService.get(`/users/me`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

export const updateMyProfile = async (updatedUserData) => {
  try {
    const response = await authService.patch(`/users/me`, updatedUserData);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

export const changePassword = async (data) => {
  try {
    console.log(data);
    const response = await authService.put(`/users/change-password`, data);
    return response.data;
  } catch (error) {
    console.error("Error changing password:", error.response);
    throw error;
  }
}

export const banUser = async ({userId}) => {
  try {
    const response = await authService.post(`/users/ban/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error banning user:", error);
    throw error;
  }
}

export const unbanUser = async ({userId}) => {
  try {
    const response = await authService.post(`/users/unban/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error unbanning user:", error);
    throw error;
  }
}
export const getAllUsers = async ({page,limit}) => {
  try {
    const response = await authService.get(`/users?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export default authService;
export { refreshToken };