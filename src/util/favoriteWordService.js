import axios from "axios";
import authService, { refreshToken } from "./authService";

const baseURL = import.meta.env.VITE_API_URL;

const favoriteWordService = axios.create({
  baseURL,
});

//////Why favorite word does not have iduser?

export const getFavoriteWords = async ({page, limit}) => {
  try {
    const response = await authService.get(`/favorite-words?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.get(`/favorite-words?page=${page}&limit=${limit}`);
      return retryResponse.data;
    }
    throw error;
  }
}

export const searchFavoriteWord = async ({keyword}) => {
  try {
    const response = await authService.get(`/favorite-words/search?keywords=${keyword}&page=1&limit=100`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.get(`/favorite-words/search?keywords=${keyword}&page=1&limit=100`);
      return retryResponse.data;
    }
    throw error;
  }
}

export const createFavoriteWord = async (newFavoriteWordId) => {
  try {
    const response = await authService.post(`/favorite-words/add/${newFavoriteWordId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.post(`/favorite-words/add/${newFavoriteWordId}`);
      return retryResponse.data;
    }
    throw error;
  }
}

export const deleteFavoriteWord = async (favoriteWordId) => {
  try {
    const response = await favoriteWordService.delete(`/favorite-words/delete/${favoriteWordId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting favorite word:", error);
    throw error;
  }
}