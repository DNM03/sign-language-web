import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const learnedPakageService = axios.create({
  baseURL,
});

export const searchLearnedPakage = async ({idUser, keyword}) => {
  try {
    const response = await learnedPakageService.get(`/learned-pakages/search?keywords=${keyword}&page=1&limit=2`);
    return response.data;
  } catch (error) {
    console.error("Error fetching learned pakages:", error);
    throw error;
  }
}

export const getLearnedPakages = async ({idUser, page, limit}) => {
  try {
    const response = await learnedPakageService.get(`/learned-pakages/all?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching learned pakages:", error);
    throw error;
  }
}

export const createLearnedPakage = async (newLearnedPakageData) => {
  try {
    const response = await learnedPakageService.post(`/learned-pakages`, newLearnedPakageData);
    return response.data;
  } catch (error) {
    console.error("Error creating learned pakage:", error);
    throw error;
  }
}

export const updateLearnedPakage = async (pakageId, updatedPakageData) => {
  try {
    const response = await learnedPakageService.patch(
      `/learned-pakages/update/${pakageId}`,
      updatedPakageData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating pakage:", error);
    throw error;
  }
}

export const getAllWordsInPakage = async (pakageId) => {
  try {
    const response = await learnedPakageService.get(`/learned-pakages/learned-words/${pakageId}?page=1&limit=100`);
    return response.data;
  } catch (error) {
    console.error("Error fetching words in pakage:", error);
    throw error;
  }
}
export const addWordToPakage = async (pakageId, wordData) => {
  try {
    const response = await learnedPakageService.post(`/learned-pakages/learned-words/${pakageId}`, wordData);
    return response.data;
  } catch (error) {
    console.error("Error adding word to pakage:", error);
    throw error;
  }
}

export const deleteWordFromPakage = async (pakageId, wordData) => {
  try {
    const response = await learnedPakageService.delete(`/learned-pakages/learned-words/${pakageId}`, wordData);
    return response.data;
  } catch (error) {
    console.error("Error deleting word from pakage:", error);
    throw error;
  }
}
