import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import { doc, getDoc } from "firebase/firestore"
import handleTxError from "../handleTxError"
import { auth, db } from "./db"

const userLogin = async (usermail, password) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, usermail, password)

    if (!credential.user.emailVerified) {
      toast.error("Email is not verified")
      return { error: "Email is not verifie" }
    }

    const user = await getDoc(doc(db, "users", credential.user.uid))

    return {
      id: user.id,
      ...user.data(),
    }
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default userLogin
