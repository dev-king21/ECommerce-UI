import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"
import handleTxError from "../handleTxError"

const getUserData = async (userId) => {
  try {
    if (!userId) return []

    const user = await getDoc(doc(db, "users", userId))

    return {
      id: user.id,
      ...user.data(),
    }
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default getUserData
