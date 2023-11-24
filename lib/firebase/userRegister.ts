import { doc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import handleTxError from "../handleTxError"
import { auth, db } from "./db"

const userRegister = async (username, password, email, firstname, lastname, phone) => {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password)

    await sendEmailVerification(auth.currentUser)

    await setDoc(doc(db, "users", credential.user.uid), {
      email,
      username,
      password,
      name: {
        lastname,
        firstname,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone,
    })

    return credential.user.uid as any
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default userRegister
