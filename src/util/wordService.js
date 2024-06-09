import axios from 'axios'
import authService, { refreshToken } from './authService'

const baseURL = import.meta.env.VITE_API_URL

const wordService = axios.create({
  baseURL
})

export const getWordDetail = async (idWord) => {
  try {
    console.log(idWord)
    const response = await wordService.get(`/words/detail/${idWord}`)
    return response.data
  } catch (error) {
    console.error('Error fetching words:', error)
    throw error
  }
}

export const searchWord = async ({ keyword }) => {
  try {
    const response = await axios.get(`${baseURL}/words/search?keywords=${keyword}&page=1&limit=100`)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await axios.get(`${baseURL}/words/search?keywords=${keyword}&page=1&limit=100`)
      return retryResponse.data
    }
    throw error
  }
}

export const createWord = async (newWordData) => {
  try {
    const response = await wordService.post('/words', newWordData)
    return response.data
  } catch (error) {
    console.error('Error creating word:', error)
    throw error
  }
}

export const updateWord = async (wordId, updatedWordData) => {
  try {
    const response = await authService.patch(`/words/update/${wordId}`, updatedWordData)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.patch(`/words/update/${wordId}`, updatedWordData)
      return retryResponse.data
    }
    throw error
  }
}

export const deleteWord = async (wordId) => {
  try {
    const response = await wordService.delete(`/words/${wordId}`)
    return response.data
  } catch (error) {
    console.error('Error deleting word:', error)
    throw error
  }
}
