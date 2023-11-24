import axios from "axios"
import { BACKEND_URL } from "../const"

const getProductList = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/products`)
    return response.data
  } catch (err) {
    return []
  }
}

export default getProductList
