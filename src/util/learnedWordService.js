import axios from "axios";
import authService, { refreshToken } from "./authService";


const baseURL = import.meta.env.VITE_API_URL;

const learnedWordService = axios.create({
  baseURL,
});

export const updateProcess = async (wordId, updatedWordData) => {
  try {
    const response = await authService.patch(
      `/learned-words/update-process/${wordId}`,
      updatedWordData
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.patch(
        `/learned-words/update-process/${wordId}`,
        updatedWordData
      );
      return retryResponse.data;
    }
    throw error;
  }
}


//No user id ??
export const getLearnedWords = async ({page, limit}) => {
  try {
    const response = await authService.get(`/learned-words?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.get(`/learned-words?page=${page}&limit=${limit}`);
      return retryResponse.data;
    }
    throw error;
  }
}

export const searchLearnedWord = async ({idUser, keyword}) => {
  try {
    const response = await learnedWordService.get(`/learned-words/search?keywords=${keyword}&page=1&limit=2`);
    return response.data;
  } catch (error) {
    console.error("Error fetching learned words:", error);
    throw error;
  }
}

export const createLearnedWord = async (newLearnedWordData) => {
  try {
    const response = await authService.post(`/learned-words`, newLearnedWordData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.post(`/learned-words`, newLearnedWordData);
      return retryResponse.data;
    }
    throw error;
  }
}

export const deleteLearnedWord = async (learnedWordId) => {
  try {
    const response = await learnedWordService.delete(`/learned-words/${learnedWordId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting learned word:", error);
    throw error;
  }
}