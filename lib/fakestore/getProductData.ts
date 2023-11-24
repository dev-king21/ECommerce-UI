import axios from "axios"
import { BACKEND_URL } from "../const"

const getProductData = async (id) => {
  try {
    if (!id) return null
    const response = await axios.get(`${BACKEND_URL}/products/${id}`)
    return response.data
  } catch (err) {
    return []
  }
}

export default getProductData
