import { deleteDoc, doc } from "firebase/firestore"
import handleTxError from "../handleTxError"
import { db } from "./db"

const removeCart = async (cartId) => {
  try {
    if (!cartId) return { error: "remove cart failed." }
    await deleteDoc(doc(db, "carts", cartId))
    return true
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default removeCart
