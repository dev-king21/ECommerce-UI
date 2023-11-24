import { addDoc, collection } from "firebase/firestore"
import handleTxError from "../handleTxError"
import { db } from "./db"

const addNewCart = async (userId, productId, quantity) => {
  try {
    if (!userId) return { error: "add cart failed." }

    const newCart = await addDoc(collection(db, "carts"), {
      userId,
      productId,
      quantity,
      createdAt: new Date().toLocaleDateString(),
    })

    return newCart.id
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default addNewCart
