import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"
import handleTxError from "../handleTxError"

const getCartData = async (userId) => {
  try {
    if (!userId) return []

    const carts = await getDocs(query(collection(db, "carts"), where("userId", "==", userId)))

    return carts.docs.map((cart) => ({
      id: cart.id,
      ...cart.data(),
    }))
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default getCartData
