import axios from "axios";

const key = import.meta.env.VITE_IMAGE_API_KEY;
const url = import.meta.env.VITE_IMG_API_URL;

const baseURL = `${url}?key=${key}`

const imageService = axios.create({
  baseURL,
})

export const uploadImage = async (image) => {
  const formData = new FormData()
  formData.append('image', image)
  try {
    const response = await imageService.post('', formData)
    return response.data.data.url
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}