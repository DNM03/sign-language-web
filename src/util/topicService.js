import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const topicService = axios.create({
  baseURL,
});

export const getAllTopics = async ({page,limit}) => {
  try {
    const response = await topicService.get(`/topics?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching topics:", error);
    throw error;
  }
}

export const getWordsByTopic = async ({idTopic,page,limit}) => {
  try {
    console.log("idTopic",idTopic);
    const response = await topicService.get(`/topics/words/${idTopic}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
}

export const createTopic = async (newTopicData) => {
  try {
    const response = await topicService.post("/topics", newTopicData);
    return response.data;
  } catch (error) {
    console.error("Error creating topic:", error);
    throw error;
  }
}

export const updateTopic = async (topicId, updatedTopicData) => {
  try {
    const response = await topicService.patch(
      `/topics/update/${topicId}`,
      updatedTopicData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating topic:", error);
    throw error;
  }
}

export const deleteTopic = async (topicId) => {
  try {
    const response = await topicService.delete(`/topics/${topicId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting topic:", error);
    throw error;
  }
}