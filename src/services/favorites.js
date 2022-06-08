import axios from "axios";
const baseUrl = '/api/favorites'

const getFavorites = user => {
  const request = axios.get(baseUrl, {params: user})
  return request.then(response => response.data)
}

const saveFavorite = async artist => {
  const response = await axios.post(baseUrl, artist)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {saveFavorite, getFavorites}