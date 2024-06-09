import axios from "axios";
import authService, { refreshToken } from "./authService";

const baseURL = import.meta.env.VITE_API_URL;

const feedBackService = axios.create({
  baseURL,
});

export const createFeedBack = async (newFeedBackData) => {
  try {
    console.log(newFeedBackData);
    const response = await authService.post("/feedbacks", newFeedBackData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken();
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      const retryResponse = await authService.post("/feedbacks", newFeedBackData);
      return retryResponse.data;
    }
    throw error;
  }
}

export const getFeedBacks = async ({page, limit}) => {
  try {
    const response = await feedBackService.get(`/feedbacks/all?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    throw error;
  }
}

export const updateFeedBack = async (feedBackId, updatedFeedBackData) => {
  try {
    const response = await feedBackService.patch(
      `/feedbacks/${feedBackId}`,
      updatedFeedBackData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating feedback:", error);
    throw error;
  }
}

