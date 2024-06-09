import axios from 'axios'
import authService, { refreshToken } from './authService'

const baseURL = import.meta.env.VITE_API_URL

const wordService = axios.create({
  baseURL
})

export const uploadVideo = async (videoData) => {
  const formData = new FormData()
  formData.append('video', videoData)
  try {
    const response = await authService.post('/medias/word/upload-video', formData)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh the access token and retry the original request
      const newAccessToken = await refreshToken()
      authService.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
      const retryResponse = await authService.post('/medias/word/upload-video', formData)
      return retryResponse.data
    }
    throw error
  }
}