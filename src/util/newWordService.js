import axios from 'axios'
import authService, { refreshToken } from './authService'

const baseURL = import.meta.env.VITE_API_URL

const newWordService = axios.create({
  baseURL
})

export const getWordDetail = async (idWord) => {
  try {
    console.log(idWord);
    const response = await authService.get(`/new-words/detail/${idWord}`)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.get(`/new-words/detail/${idWord}`)
      return retryResponse.data
    }
    throw error
  }
}

export const searchWord = async ({ keyword }) => {
  try {
    const response = await authService.get(`/new-words/search?keywords=${keyword}&page=1&limit=100`)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.get(`/new-words/search?keywords=${keyword}&page=1&limit=100`)
      return retryResponse.data
    }
    throw error
  }
}

export const createWord = async (newWordData) => {
  try {
    const response = await authService.post('/new-words', newWordData)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.post('/new-words', newWordData)
      return retryResponse.data
    }
    throw error
  }
}

export const updateWord = async (wordId, updatedWordData) => {
  try {
    const response = await newWordService.patch(`/new-words/update/${wordId}`, updatedWordData)
    return response.data
  } catch (error) {
    console.error('Error updating word:', error)
    throw error
  }
}

//Only delete when status of word is rejected
export const deleteWord = async (wordId) => {
  try {
    const response = await authService.delete(`/new-words/${wordId}`)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.delete(`/new-words/${wordId}`)
      return retryResponse.data
    }
    throw error
  }
}

export const getMyNewWords = async ({ page, limit }) => {
  try {
    const response = await authService.get(`/new-words?page=${page}&limit=${limit}`)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.get(`/new-words?page=${page}&limit=${limit}`)
      return retryResponse.data
    }
    throw error
  }
}

//Only Admin
export const getAllNewWords = async ({ page, limit }) => {
  try {
    const response = await authService.get(`/new-words/all?page=${page}&limit=${limit}`)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.get(`/new-words/all?page=${page}&limit=${limit}`)
      return retryResponse.data
    }
    throw error
  }
}

export const updateNewWordStatus = async (wordId, updatedWordData) => {
  console.log(wordId);
  try {
    const response = await authService.patch(`/new-words/update-status/${wordId}`, updatedWordData)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.patch(`/new-words/update-status/${wordId}`, updatedWordData)
      return retryResponse.data
    }
    throw error
  }
}

//  Pending = '0', //Đang chờ ở hàng đợi
//   Publishing = '1', //Đang xuất bản
//   Approved = '2', //Đã duyệt
//   Rejected = '3' //Từ bị từ chối
