import { doc, updateDoc } from "firebase/firestore"
import { createCustomer } from "./stripe/customer"
import { db } from "./firebase"

export const createStripeCustomer = async (name, email, userId) => {
  try {
    const reqCreateCustomer = {
      name,
      email,
      "metadata[user_id]": userId,
    }

    const resCreateCustomer = await createCustomer(reqCreateCustomer)

    await updateDoc(doc(db, "users", userId), {
      stripeCustomerId: resCreateCustomer.id,
    })

    return true
  } catch (err) {
    return { error: err }
  }
}
