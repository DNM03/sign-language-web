import axios from "axios";
import authService, { refreshToken } from "./authService";


const baseURL = import.meta.env.VITE_API_URL;

const statisticService = axios.create({
  baseURL,
});

export const getStatisticIn7Days = async () => {
  try {
    const response = await statisticService.get(`/statistics/7-days`);
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
}

export const getStatisticIn1Month = async ({month, year}) => {
  try {
    const response = await statisticService.get(`/statistics/month?month=${month}&year=${year}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
}

export const getStatisticIn1Year = async ({year}) => {
  try {
    const response = await authService.get(`/statistics/year?year=${year}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.get(`/statistics/year?year=${year}`);
      return retryResponse.data;
    }
    throw error;
  }
}

export const getStatisticTop10Words = async () => {
  try {
    const response = await authService.get(`/statistics/top-ten-words`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.get(`/statistics/top-ten-words`);
      return retryResponse.data;
    }
    throw error;
  }
}

export const getUserInforStatistic = async ({idUser}) => {
  try {
    const response = await statisticService.get(`/statistics`);
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
}