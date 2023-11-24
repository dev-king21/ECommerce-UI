import { doc, updateDoc } from "firebase/firestore"
import handleTxError from "../handleTxError"
import { db } from "./db"

const updateQuantity = async (cartId, quantity) => {
  try {
    if (!cartId) return { error: "update cart failed." }

    await updateDoc(doc(db, "carts", cartId), {
      quantity,
    })

    return true
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default updateQuantity
